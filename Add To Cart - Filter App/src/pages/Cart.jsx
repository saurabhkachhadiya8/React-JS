import React from 'react'

const cart = () => {
    return (
        <div>
            <h1>View Cart</h1>
            <div style={{ width: '20%' }}>
                <h2>View Cart</h2>
                <table border={1} width={'100%'} style={{ textAlign: 'center' }}>
                    <thead>
                        <tr>
                            <th>Srno</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((c, index) => {
                                return (
                                    <tr key={c.id}>
                                        <td>{++index}</td>
                                        <td><img src={c.img} style={{ height: "50px", objectFit: 'cover' }} /></td>
                                        <td>{c.title}</td>
                                        <td>₹{c.newPrice}</td><td></td><td></td>
                                        {/* <td>{c.qty}</td>
                                            <td>{c.newPrice * c.qty}</td> */}
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default cart