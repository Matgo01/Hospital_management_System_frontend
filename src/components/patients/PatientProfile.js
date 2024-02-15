import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PatientProfile = () => {
    const {id} = useParams();
    const [patient,setPatients]=useState({
        firstName:'',
        lastName:'',
        gender:'',
        age:'',
        residence:''
    });

    useEffect(()=>{
        loadPatient();
    },[]);

    const loadPatient = async ()=>{
        try{
            const result = await axios.get(
                `http://localhost:8080/patients/patient/${id}`
            );
            setPatients(result.data)
        }catch(error){
            console.error("error loadin patient",error);
        }
    };

  return (
   <section className='shadow' style={{backgroundColor:'whitesmok'}}>
    <div className='container py-5'>
        <div className='row'>
            <div className='col-lg-3'>
                <div className='card mb-4'>
                    <div className='card-body text-center'>
                        <img 
                        src="https://mdbcd.b-cdn.net/img/Photos/new-templates/bootstrap-chat/avatar"
                        alt="avatar"
                        className="rounded-circle img-fluid"
                        style={{ width: 150 }}/>
                    <h5 className='my-3'>{`${patient.firstName} ${patient.lastName}`}</h5>
                    <div className='d-flex justify-content-center mb-2'>
                        <button type='button' className='btn btn-outline-primary'>Call</button>
                        <button type='button' className='btn btn-outline-warning ms-1'>Message</button>
                    </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-9'>
                <div className='card mb-4'>
                    <div className='card-body'>
                        <hr/>
                        <div className='row'>
                            <div className='col-sm-3'>
                                <h5 className='mb-0'>First Name</h5>
                            </div>
                            <div className='col-sm-9'>
                                <p className='text-muted mb-0'>{patient.firstName}</p>
                            </div>
                        </div>
                        <hr/>
                        <div className='row'>
                            <div className='col-sm-3'>
                                <h5 className='mb-0'>LastName</h5>
                            </div>
                            <div className='col-sm-9'>
                                <p className='text-muted mb-0'>{patient.lastName}</p>
                            </div>
                        </div>
                        <hr/>
                        <div className='row'>
                            <div className='col-sm-3'>
                                <h5 className='mb-0'>Gender</h5>
                            </div>
                            <div className='col-sm-9'>
                                <p className='text-muted mb-0'>{patient.age}</p>
                            </div>
                        </div>
                        <hr/>
                        <div className='row'>
                            <div className='col-sm-3'>
                                <h5 className='mb-0'>{patient.gender}</h5>
                            </div>
                            <div className='col-sm-9'>
                                <p className='text-muted mb-0'>Gender</p>
                            </div>
                        </div>
                        <hr/>
                        <div className='row'>
                            <div className='col-sm-3'>
                                <h5 className='mb-0'>Age</h5>
                            </div>
                            <div className='col-sm-9'>
                                <p className='text-muted mb-0'>{patient.age}</p>
                            </div>
                        </div>
                        <hr/>
                        <div className='row'>
                            <div className='col-sm-3'>
                                <h5 className='mb-0'>Residence</h5>
                            </div>
                            <div className='col-sm-9'>
                                <p className='text-muted mb-0'>{patient.residence}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default PatientProfile