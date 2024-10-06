import React, { useEffect } from 'react';
import { AiFillDelete } from "react-icons/ai";
import { MdEditSquare } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_USER, EDIT_USER } from '../redux/action/crud';
import { useNavigate } from 'react-router-dom';

const View = () => {
    const dispatch = useDispatch();
    const record = useSelector(state => state.crud.users);
    const navigate = useNavigate()



    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    {
                        record.map((val) => {
                            return (
                                <div key={val.id} className="col-lg-3 m-2">
                                    <div className="card shadow" style={{ width: '18rem', height: '10rem' }}>
                                        <div className="card-body text-center">
                                            <h5 className="card-title">{val.title}</h5>
                                            <p className="card-text">{val.note}</p>
                                            <button
                                                type="button"
                                                onClick={() => dispatch(DELETE_USER(val.id))}
                                                className="btn">
                                                <AiFillDelete style={{ fontSize: '25px', color: 'black' }} />
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => navigate('/edit', { state: val })}
                                                className="btn">
                                                <MdEditSquare style={{ fontSize: '25px', color: 'black' }} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default View;
