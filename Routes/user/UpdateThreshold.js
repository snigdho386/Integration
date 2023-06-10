const express = require("express");
const router = express.Router();

router.put("/threshold", async (req, res) => {
    try {
        const InventoryThreshold = require('../../models/KitchenInventoryThreshold');

        const { item, qty } = req.body;

        // Find the inventory threshold document by uid and item
        const inventory = await InventoryThreshold.findOne({ item });

        if (!inventory) {
            // If the inventory document doesn't exist, create a new one
            await InventoryThreshold.create({ item, threshold });
        } else {
            // Update the threshold if the inventory document already exists
            inventory.qty = qty;
            console.log('inventory = ', inventory);
            await inventory.save();
        }

        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.json({ success: false });
    }
});

module.exports = router
