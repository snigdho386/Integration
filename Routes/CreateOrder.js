const express = require("express");
const router = express.Router();

const Order = require("../models/Orders");
const Inventory = require("../models/Inventory");
const KitchenInventory = require("../models/KitchenInventory");

router.post("/createorder", async (req, res) => {
    try {
        const orders = req.body;

        for (const order of orders) {
            const { uid, shopName, item, quty, price } = order;

            // Rename quty to qty
            const qty = quty;

            // Create a new order entry ------------------
            await Order.create({ uid, shopName, item, qty, price });

            // Update kitchen inventory ------------------
            const existingInventory = await KitchenInventory.findOne({ item });

            if (existingInventory) {
                existingInventory.qty += parseInt(qty);
                await existingInventory.save();
            } else {
                await KitchenInventory.create({ item, qty: parseInt(qty) });
            }

            // Update shop inventory ----------------
            const inventory = await KitchenInventory.findOne({ item });

            inventory.qty -= parseInt(qty);
            await inventory.save();
        }

        res.json({ success: true });
    } catch (error) {
        console.log(error);
        res.json({ success: false });
    }
});

module.exports = router;
