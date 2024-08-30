import React from 'react'
import { Category } from './Data'

const Filter = ({ products, category, addCart, cart }) => {
    return (
        <div align="center">
            <nav style={{ maxWidth: '1350px', borderRadius: '0 0 10px 10px', padding: '25px 15px', boxShadow: '0px 0px 10px 5px #e0e0e0', display: 'flex', alignItems: 'center', fontSize: '25px' }}>
                <div className="menu" align="left">
                    <ul style={{ listStyle: 'none', display: 'flex', margin: '0', paddingLeft: '25px' }}>
                        <li style={{ marginRight: '30px' }}>
                            <a href="#" style={{ textDecoration: 'none', color: '#000' }}>Home</a>
                        </li>
                        <li style={{ marginRight: '30px' }}>
                            <a href="#" style={{ textDecoration: 'none', color: '#000' }}>Fetures</a>
                        </li>
                        <li style={{ marginRight: '30px' }}>
                            <a href="#" style={{ textDecoration: 'none', color: '#000' }}>Services</a>
                        </li>
                        <li style={{ marginRight: '30px' }}>
                            <a href="#" style={{ textDecoration: 'none', color: '#000' }}>Our Work</a>
                        </li>
                    </ul>
                </div>
                <div style={{ marginLeft: 'auto' }}>
                    <ul style={{ listStyle: 'none', display: 'flex', margin: '0', paddingLeft: '25px' }}>
                        <li style={{ marginRight: '30px' }}>
                            <a href="#" style={{ textDecoration: 'none', color: '#000' }}>Serach</a>
                        </li>
                        <li style={{ marginRight: '30px' }}>
                            <a href="#" style={{ textDecoration: 'none', color: '#000' }}>User</a>
                        </li>
                        <li style={{ marginRight: '30px' }}>
                            <a href="#" style={{ textDecoration: 'none', color: '#000' }}>Cart</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div style={{ display: 'flex' }}>
                <div className="filter-app" style={{ width: '70%' }}>
                    <h1>Filter App - Categories</h1>
                    <div style={{ margin: '20px 0 40px' }}>
                        {
                            Category.map((cg) => {
                                return (
                                    <button onClick={() => category(cg.name)} key={cg.id} style={{ margin: '0 10px', backgroundColor: '#000', color: '#fff', width: '100px', height: '35px', fontSize: '18px', borderRadius: '5px', cursor: 'pointer' }}>{cg.name}</button>
                                )
                            })
                        }
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'center' }}>
                        {
                            products.map((p) => {
                                return (
                                    <div key={p.id} style={{ width: '15%', height: '330px', border: '1px solid #000', padding: '15px', margin: '0 5px 20px' }}>
                                        <div>
                                            <img src={p.img} style={{ height: "200px", objectFit: "cover" }} alt="..." />
                                            <div>
                                                <h4>{p.title}</h4>
                                                <p>₹{p.newPrice} <del>₹{p.oldPrice}</del></p>
                                                <button onClick={() => addCart(p.id)} style={{ width: '100%', height: '35px', textDecoration: 'none', color: '#fff', backgroundColor: '#000', border: '1px solid #000' }}>Add Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="cart" style={{ width: '30%' }}>
                    <h1>View Cart</h1>
                    <div style={{ width: '100%' }}>
                        <h2>View Cart</h2>
                        <table border={1} width={'100%'} cellPadding={'10px'} style={{ textAlign: 'center',fontSize:'20px' }}>
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
            </div>
        </div >
    )
}

export default Filter