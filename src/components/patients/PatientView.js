import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { FaTrashAlt, FaEye, FaEdit } from "react-icons/fa";
import { Link} from 'react-router-dom';
import Search from '../common/Search';

const PatientView = () => {

    const [patients, setPatients]=useState([]);
    const [search,setSearch]=useState("");

    useEffect(()=>{
        loadPatients();
    },[]);

    const loadPatients=async ()=>{
        try{
            const result = await axios.get(
                "http://localhost:8080/patients",{
                    validateStatus:()=>{
                        return true;
                    },
                }
            );
            if(result.status===302){
                setPatients(result.data);
            }
        }catch(error){
            console.error("error loading patient",error);
        }
    };

    const handleDelete=async(id)=>{
        try{
            await axios.delete(`http://localhost:8080/patients/delete/${id}`);
            loadPatients();
        }catch(error){
            console.error("error dleting patients",error);
        }
    };

    return (
        <section>
            <Search search={search} setSearch={setSearch}/>
            <table className='table table-bordered table-hover shadow'>
                <thead>
                    <tr className='text-center'>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Residence</th>
                        <th colSpan='3'>Actions</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {patients
                    .filter((pt)=>pt.firstName.toLowerCase().includes(search))
                    .map((patient, index)=>(
                        <tr key={patient.id}>
                            <th scope='row'>{index+1}</th>
                            <th>{patient.firstName}</th>
                            <th>{patient.lastName}</th>
                            <th>{patient.gender}</th>
                            <th>{patient.age}</th>
                            <th>{patient.residence}</th>
                            <td className='mx-2'>
                            <Link to={`/patient-profile/${patient.id}`} className="btn btn-info">
                                        <FaEye />
                                    </Link>
                            </td>
                            <td className="mx-2">
                                <Link to={`/edit-patients/${patient.id}`} className="btn btn-warning">
                                   <FaEdit />
                                 </Link>
                                </td>
                            <td className="mx-2">
                                    <button className="btn btn-danger" onClick={() => handleDelete(patient.id)}>
                                        <FaTrashAlt />
                                    </button>
                                </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
   );
}



export default PatientView;