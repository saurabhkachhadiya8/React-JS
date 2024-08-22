import React from 'react'
import { Category } from './Data'

const Filter = ({ products,category }) => {
    return (
        <div>
            <h1>Categories</h1>
            <div style={{margin:'20px 0 40px'}}>
                {
                    Category.map((cg) => {
                        return (
                            <button onClick={() => category(cg.name)} key={cg.id} style={{margin:'0 10px',width:'80px',height:'30px',backgroundColor:'#000',color:'#fff',border:'1px solid #000',borderRadius:'3px'}}>{cg.name}</button>
                        )
                    })
                }
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', width: '80%', justifyContent: 'center' }}>
                {
                    products.map((p) => {
                        return (
                            <div key={p.id} style={{ width: '20%', border: '1px solid #000',padding:'15px',margin:'0 10px 20px' }}>
                                <div>
                                    <img src={p.img} style={{ height: "200px", objectFit: "contain" }} alt="..." />
                                    <div>
                                        <h4>{p.title}</h4>
                                        <p>₹{p.newPrice} <del>₹{p.oldPrice}</del></p>
                                        <a href="#" style={{padding:'10px 75px',textDecoration:'none',color:'#fff',backgroundColor:'#000'}}>Add Cart</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}

export default Filter