import React from 'react'
import { Category } from './Data'

const Filter = ({ products, category, addCart,cart }) => {
    return (
        <div>
            <h1>Categories</h1>
            <div style={{ margin: '20px 0 40px' }}>
                {
                    Category.map((cg) => {
                        return (
                            <button onClick={() => category(cg.name)} key={cg.id} style={{ margin: '0 10px' }}>{cg.name}</button>
                        )
                    })
                }
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', width: '80%', justifyContent: 'center' }}>
                    {
                        products.map((p) => {
                            return (
                                <div key={p.id} style={{ width: '15%',height:'330px', border: '1px solid #000', padding: '15px', margin: '0 5px 20px' }}>
                                    <div>
                                        <img src={p.img} style={{ height: "200px", objectFit: "cover" }} alt="..." />
                                        <div>
                                            <h4>{p.title}</h4>
                                            <p>₹{p.newPrice} <del>₹{p.oldPrice}</del></p>
                                            <button onClick={() => addCart(p.id) } style={{ width: '100%', height: '35px', textDecoration: 'none', color: '#fff', backgroundColor: '#000', border: '1px solid #000' }}>Add Cart</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div style={{ width: '20%' }}>
                    <h2>View Cart</h2>
                    <table border={1} width={'100%'}>
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
                                    return(
                                        <tr key={c.id}>
                                            <td>{++index}</td>
                                            <td><img src={c.img} style={{ height: "50px", objectFit:'cover'}}/></td>
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
        </div >
    )
}

export default Filter