import React from 'react'

const Cart = ({cart}) => {
    return (
        <div>
            <h1>View Cart</h1>
            <div>
                <table border={1} width={'100%'} cellPadding={'10px'} style={{ textAlign: 'center', fontSize: '20px' }}>
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
                                        <td><img src={c.img} style={{ width: "50px", objectFit: 'cover' }} /></td>
                                        <td>{c.title}</td>
                                        <td>₹{c.newPrice}</td>
                                        <td>{c.qty}</td>
                                        <td>{c.newPrice * c.qty}</td>
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

export default Cart