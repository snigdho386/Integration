const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/inventory", async (req, res) => {
    try {
        const userInventory = await mongoose.connection.db.collection("kitchen_inventories");
        const thresholdInventory = await mongoose.connection.db.collection("threshold_inventories");

        const userInventoryData = await userInventory.find({}).toArray();
        const thresholdInventoryData = await thresholdInventory.find({}).toArray();

        const userInventoryWithThreshold = userInventoryData.map((inventoryItem) => {
            const thresholdItem = thresholdInventoryData.find((thresholdItem) => thresholdItem.item === inventoryItem.item);
            const updatedInvetoryItem = {
                id: inventoryItem._id,
                item: inventoryItem.item,
                qty: inventoryItem.qty,
                uid: inventoryItem.uid,
                thresholdQty: thresholdItem.qty
            };

            return updatedInvetoryItem;
        });

        res.json(userInventoryWithThreshold);
    }
    catch (error) {
        console.error(error);
        res.json({ success: false });
    }
});

module.exports = router;
