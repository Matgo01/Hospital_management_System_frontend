import React, {useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';

const AddPatient = () => {
    let navigate=useNavigate();
    
    const [patient, setPatients]=useState({
        firstName:'',
        lastName:'',
        gender:'',
        age:'',
        residence:''
    });

    const {firstName,lastName,gender,age,residence}=patient;

    
    const handleInputChange=(e)=>{
        setPatients({...patient,[e.target.name]:e.target.value});
    }
    const savePatients=async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/patients",patient);
        navigate("/views-patients");
    }
    return (
    <div className='col-sm-8 py-2 px-5'>
        <h2 className='mt-5'>Add Patient</h2>
        <form onSubmit={(e)=>savePatients(e)}>
            <div className='input-group mb-5'>
                <label className='input-group-text' htmlFor='firstName'>
                    Fist Name
                </label>
                <input 
                className='form-control col-sm-6'
                type='text'
                name='firstName'
                id='firstName'
                required
                value={firstName}
                onChange={(e)=>handleInputChange(e)}/>
            </div>
            <div className='input-group mb-5'>
                <label className='input-group-text' htmlFor='lastName'>Last Name</label>
                    <input 
                    className='form-control col-sm-6'
                    type='text'
                    name='lastName'
                    id='lastName'
                    required
                    value={lastName}
                    onChange={(e)=>handleInputChange(e)}/>
            </div>
            <div className='form-control col-sm-5'>
                <label className='input-group-text' htmlFor='gender'>Gender</label>
                <input 
                className='form-control col-sm-6'
                type='text'
                name='gender'
                id='gender'
                required
                value={gender}
                onChange={(e)=>handleInputChange(e)}/>
            </div>
            <div className='form-control col-sm-5'>
                <label className='input-group-text' htmlFor='age'>Age</label>
                <input 
                className='form-control col-sm-6'
                type='number'
                name='age'
                id='age'
                min='0'
                required
                value={age}
                onChange={(e)=>handleInputChange(e)}/>
            </div>
            <div className='form-control col-sm-5'>
                <label className='input-group-text' htmlFor='residence'>Residence</label>
                <input 
                className='form-control col-sm-6'
                type='text'
                name='residence'
                id='residence'
                required
                value={residence}
                onChange={(e)=>handleInputChange(e)}/>
            </div>

            <div>
                <button type='submit' className='btn btn-outline-success btn-lg'> Save</button>
            </div>
            <div>
                <Link to={'/view-patients'} className='btn btn-outline-warning btn-lg'>Cancel</Link>
            </div>
        </form>

    </div>);
}



export default AddPatient;