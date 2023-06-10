import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const UserHome = () => {
    const [items, setItems] = useState([]);
    const [rows, setRows] = useState([]);

    // Utility Functions ------------------------------------------------------
    const fetchInventoryData = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/user/inventory');
            const data = await response.json();
            setItems(data);
        } catch (error) {
            console.error(error);
        }
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'item', headerName: 'Item', width: 150 },
        { field: 'qty', headerName: 'Quantity', width: 130 },
        {
            field: 'thresholdQty',
            headerName: 'Threshold Quantity',
            width: 180,
            editable: true,
        },
        {
            field: 'belowThreshold',
            headerName: 'Below Threshold',
            width: 180,
            valueGetter: (params) => {
                const thresholdQty = params.row.thresholdQty;
                const qty = params.row.qty;

                if (qty < thresholdQty) {
                    return (thresholdQty - qty);
                } else {
                    return 0;
                }
            },
        },
    ];

    const processRowUpdate = async (update) => {
        console.log(update)
        const updatedRow = {
            ...update,
            thresholdQty: update.thresholdQty
        };

        const updatedRows = rows.map((row) =>
            row.id === update.id ? updatedRow : row
        );
        setRows(updatedRows);

        try {
            // Update thresholdQty in DB --------
            const updatedData = {
                item: update.item,
                qty: update.thresholdQty,
            };

            // Send the updated data to the server
            const response = await fetch('http://localhost:4000/api/user/threshold', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData),
            });

            // Handle the response as needed
            if (response.ok) {
                console.log('Threshold quantity updated successfully');
            } else {
                console.error('Failed to update threshold quantity');
            }

            return update;

        } catch (error) {
            console.error(error);
        }
    };


    // Use-Effect -------------------------------------------------------------
    useEffect(() => {
        fetchInventoryData();
    }, []);


    // RETURN -----------------------------------------------------------------
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div id='user-inventory' style={{ height: 400, width: '100%', marginBottom: '20px' }}>
                <DataGrid
                    rows={items}
                    columns={columns}
                    processRowUpdate={processRowUpdate}
                    onProcessRowUpdateError={(error) => console.error(error)}
                    disableSelectionOnClick
                    editable
                />
            </div>
            <button onClick={() => { window.location.href = 'http://localhost:3000/shop/'; }}>Go To Shop</button>
        </div>
    );
};

export default UserHome;
