let fs = require('fs');
let process = require("process");
const express = require("express");
const router = express.Router();

const Inventory = require("../models/Inventory");
const InventoryThreshold = require("../models/KitchenInventoryThreshold");

let moveFrom = "./data/shops";

router.post("/createinventory", async (req, res) => {
    try {
        let inventoryItemSet = new Set();

        fs.readdir(moveFrom, async (err, files) => {
            if (err) {
                console.error("Could not list the directory.", err);
                // process.exit(1);
            } else {
                const promises = files.map(async (file) => {
                    const obj = require("../data/shops/" + file);
                    await Promise.all(obj.map(async (data) => {
                        const existingInventory = await Inventory.findOne({ uid: data.uid });

                        if (!existingInventory) {
                            await Inventory.create({
                                uid: data.uid,
                                shopName: data.shopName,
                                item: data.item,
                                qty: data.qty,
                                price: data.price
                            });
                        }
                        // Add item to itemSet
                        inventoryItemSet.add(data.item);
                    }));
                });

                await Promise.all(promises);

                // Add all elements in inventoryItemSet to database
                for (item of inventoryItemSet) {
                    const existingThresholdInventory = await InventoryThreshold.findOne({ item: item });

                    if (!existingThresholdInventory) {
                        await InventoryThreshold.create({ item: item, qty: 1 });
                    }
                }

                res.json({ success: true });
            }
        });
    } catch (error) {
        console.error(error);
        res.json({ success: false });
    }
})

module.exports = router
