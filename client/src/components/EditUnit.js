import React, {useState, useEffect} from 'react';
import styles from './Unit.module.css';
import axios from 'axios';
import { navigate } from '@reach/router';

const EditUnit = (props) => {
    const [formInfo, setFormInfo] = useState({
        unit:"",
        type:"",
        model:"",
        vin:"",
        plate:"",
        state:"",
        start_date:"",
        oil_date:""
    })
    const [errors, setErrors] = useState({});
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/units/${props.id}`)
        .then(res=>{
            console.log(res)
            setFormInfo(res.data.results)
        })
        .catch(err=>console.log(err))
    }, [])
    
    const updateInfo = (e) =>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/units/update/${props.id}`, formInfo)
        .then(res=>{
            console.log(res)
            if(res.data.errors){
                setErrors(res.data.errors)
            } else {
                navigate("/")
            }
        })
        .catch(err=>console.log(err))
    }

    const changeHandler = (e) =>{
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <div className={styles.container_new}>
                <form onSubmit={updateInfo}>
                    <div className="row">
                        <div className="col">
                            <div className="mb-3">
                                <label className="form-label">Unit#</label>
                                <input onChange={changeHandler} type="text" className="form-control" value={props.unit} name="unit"/>
                                <p className="text-danger">{errors.unit? errors.unit.message: ""}</p>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Type</label>
                                <select onChange={changeHandler} type="text" className="form-control" name="type">
                                    <option value="Tractor">Tractor</option>
                                    <option value="Trailer">Trailer</option>
                                </select>
                                <p className="text-danger">{errors.type? errors.type.message: ""}</p>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Model</label>
                                <input onChange={changeHandler} type="text" className="form-control" name="model"/>
                                <p className="text-danger">{errors.model? errors.model.message: ""}</p>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">VIN #</label>
                                <input onChange={changeHandler} type="text" className="form-control" name="vin"/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="mb-3">
                                <label className="form-label">Plate #</label>
                                <input onChange={changeHandler} type="text" className="form-control" name="plate"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">State</label>
                                <input onChange={changeHandler} type="text" className="form-control" name="state"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Start Date</label>
                                <input onChange={changeHandler} type="date" className="form-control" name="start_date"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Last PM Service</label>
                                <input onChange={changeHandler} type="date" className="form-control" name="oil_date"/>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 d-flex justify-content-end">
                        <button type="submit" className="btn btn-info">CREATE</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditUnit;