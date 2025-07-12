import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddNewTeacher: React.FC = () =>{
    const navigate=useNavigate();

    const[teacher, setTeacher]=useState({
        Id:"",
        name:"",
        email:"",
        phoneno:"",
        gender:"",
        dateOfBirth:"",
        subject:"",
        qualification:"",
        experienceYears:"",
        location:"",
        profileImage:"",
        status:"",
        createdAt:"",
        updatedAt:""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>{
        const{name,value} =e.target;
        setTeacher((prev)=>({
            ...prev,[name]:value,
        }));
    };

    const handleSubmit =async(e: React.FormEvent) =>{
        e.preventDefault();
        const { Id, createdAt, updatedAt,...payload} =teacher;
        try{
            const response = await axios.post("http://localhost:8080/api/teachers",payload);
            console.log("Teacher added successfully",response.data);
            alert("Teacher added successfully")
            navigate('/teachers');
        } catch(err:any){
            console.log("Failed to add teacher",err);
            alert(`Failed to add teacher: ${err.response?.data?.message || err.message}`);
        }
    };

    return (
        <div className="max-w-3xl mx-auto bg-white shadow p-6 rounded">
            <h2 className="text-xl font-bold mb-6 text-center">Add New Teacher</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" name="name" placeholder="Name" value={teacher.name} onChange={handleChange} className="border p-2 rounded" required/>
                <input type="text" name="email" placeholder="Email" value={teacher.email} onChange={handleChange} className="border p-2 rounded" required/>
                <input type="text" name="phoneno" placeholder="Mobile No" value={teacher.phoneno} onChange={handleChange} className="border p-2 rounded" required/>
                <select name="gender" value={teacher.gender} onChange={handleChange} className="border p-2 rounded" required>
                    <option value="">Select  Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
                <input type="date" name="dateOfBirth" value={teacher.dateOfBirth} onChange={handleChange} className="border p-2 rounded" required/>
                <input type="text" name="subject" placeholder="Subject" value={teacher.subject} onChange={handleChange} className="border p-2 rounded" required/>
                <input type="text" name="qualification" placeholder="Qualification" value={teacher.qualification} onChange={handleChange} className="border p-2 rounded" required/>
                <input type="text" name="experienceYears" placeholder="Experience in years" value={teacher.experienceYears} onChange={handleChange} className="border p-2 rounded" required/>
                <input type="text" name="location" value={teacher.location} placeholder="Location" onChange={handleChange} className="border p-2 rounded" required/>
                <input type="text" name="profileImage" placeholder="Profile Image URL" value={teacher.profileImage} onChange={handleChange} className="border p-2 rounded"/>
                <select name="status" value={teacher.status} onChange={handleChange} className="border p-2 rounded" required>
                    <option value="">Select Status</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="On_leave">On_leave</option>
                </select>

                <div className="md:col-span-2 text-right">
                    <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 font-semibold">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddNewTeacher;