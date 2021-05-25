import axios from 'axios';
import React, {useState, useEffect} from 'react';
import styles from './Unit.module.css';
import Moment from 'react-moment';
import {Link} from '@reach/router'

const AllUnits = () => {
    const [allUnits, setAllUnits] = useState([]);
    const [deleteClicked, setDeleteClicked] = useState(false);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/units")
        .then(res=>{
            console.log(res)
            setAllUnits(res.data.results)
        })
        .catch(err=>console.log(err))
    }, [deleteClicked])
    
    const deleteUnitHandler = (e, unitId) =>{
        axios.delete(`http://localhost:8000/api/units/delete/${unitId}`)
        .then(res=>{
            console.log("this will be deleted", res)
            setDeleteClicked(!deleteClicked)
        })
        .catch(err=>console.log(err))
    }

    return (
        <div className={styles.container}>
            <table>
                <thead>
                    <tr>
                        <th>Unit #</th>
                        <th>Type</th>
                        <th>Model</th>
                        <th>VIN#</th>
                        <th>Plate</th>
                        <th>State</th>
                        <th>Last PM Service</th>
                        <th>Start Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allUnits.map((unit, idx)=>{
                            return <tr key={idx}>
                    <td><Link to={`/units/update/${unit._id}`}>{unit.unit}</Link></td>
                    <td>{unit.type}</td>
                    <td>{unit.model}</td>
                    <td>{unit.vin}</td>
                    <td>{unit.plate}</td>
                    <td>{unit.state}</td>
                    <td><Moment format="MM/DD/YYYY">{unit.oil_date}</Moment></td>
                    <td><Moment format="MM/DD/YYYY">{unit.start_date}</Moment></td>
                    <td><Link onClick={(e)=>deleteUnitHandler(e, unit._id)} to="#!" className="btn btn-danger">Delete</Link></td>
                </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllUnits;