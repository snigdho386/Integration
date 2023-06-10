import React from 'react'
const func = (e) => {
    e.preventDefault();
    console.log("I'm clicked")
    // const setThreshold = require('./utils/setThreshold');
    // setThreshold();
}
const Credentials = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 50,
            height: '20%'
        }}>
            <label >
                <input type="text" placeholder='Item' style={{
                    paddingLeft: '10px',
                    height: '150%',
                    border: '2px solid red',
                    borderRadius: '50px'
                }} />
            </label>
            <label>
                <input type="text" placeholder='Qty' style={{
                    paddingLeft: '10px',
                    height: '150%',
                    border: '2px solid red',
                    borderRadius: '50px'
                }} />
            </label>
            <button style={{ cursor: 'pointer', height: '150%', border: "none", backgroundColor: "Orange", padding: "10px", borderRadius: '50px' }}
                onClick={func}>
                Set
            </button>


        </div>
    )
}

export default Credentials
