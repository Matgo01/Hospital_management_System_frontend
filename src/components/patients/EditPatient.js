import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditPatient = () => {
    let navigate = useNavigate();
    const { id } = useParams();
    const [patient, setPatient] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        age: '',
        residence: ''
    });

    const { firstName, lastName, gender, age, residence } = patient;

    useEffect(() => {
        const loadPatients = async () => {
            try {
                const result = await axios.get(`http://localhost:8080/patients/patient/${id}`);
                setPatient(result.data);
            } catch (error) {
                console.error("error loading patient", error);
            }
        };
        loadPatients();
    }, [id]);

    const handleInputChange = (e) => {
        setPatient({ ...patient, [e.target.name]: e.target.value });
    };

    const updatePatient = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/patients/update/${id}`, patient);
            navigate("/view-patients");
        } catch (error) {
            console.error("error updating patient", error)
        }
    };

    return (
        <div className='col-sm-8 py-2 px-5'>
            <h2 className='mt-5'>Edit Patient</h2>
            <form onSubmit={(e) => updatePatient(e)}>
                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='firstName'>First Name</label>
                    <input
                        className='from control col-sm-6'
                        type='text'
                        name='firstName'
                        id='firstName'
                        required
                        value={firstName}
                        onChange={(e) => handleInputChange(e)} />
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
                        onChange={(e) => handleInputChange(e)} />
                </div>
                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='gender'>Gender</label>
                    <input
                        className='from-control col-sm-6'
                        text='gender'
                        name='gender'
                        id='gender'
                        required
                        value={gender}
                        onChange={(e) => handleInputChange(e)} />
                </div>
                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='age'>Age</label>
                    <input
                        className='form-control col-sm-6'
                        type='number'
                        name='age'
                        id='age'
                        required
                        value={age}
                        onChange={(e) => handleInputChange(e)} />
                </div>
                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='residence'>Residence</label>
                    <input
                        className='form-control col-sm-6'
                        text='residence'
                        name='residence'
                        id='residence'
                        required
                        value={residence}
                        onChange={(e) => handleInputChange(e)} />
                </div>
                <div>
                    <button type='submit' className='btn btn-outline-success btn-lg'>Save</button>
                </div>
                <div>
                    <Link to='/view-patients' className='btn btn-outline-warning btn-lg'>Cancel</Link>
                </div>
            </form>
        </div>);
}

export default EditPatient;
