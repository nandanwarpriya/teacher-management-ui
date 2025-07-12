import React,{useEffect, useState} from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";

interface Teacher{
    id: number;
   name: string;
   email: string;
   phoneno: string;
   gender: string;
   dateOfBirth: string;
   subject: string;
   qualification: string;
   experienceYears: string;
   location: string;
   profileImage: string;
   status: string;
   createdAt:string;
   updatedAt:string;
}

const TeacherList: React.FC =() =>{

    const[teachers,setTeachers]=useState<Teacher[]>([]);
    const[loading,setLoading]=useState(true);
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get<Teacher[]>('http://localhost:8080/api/teachers')
            .then((res)=>{
                setTeachers(res.data);
                setLoading(false);
            })
            .catch((err)=>{
                console.error(err);
                setLoading(false);
            });
    },[]);

    const addNewTeacher = () =>{
        navigate("/add-teacher");
    };

    if(loading) return <p>Loading...</p>;

    return(
        <div className="p-4 bg-white shadow rounded">
            <h2 className="text-xl font-semibold mb-4">All Teachers</h2>
            <table className="w-full border text-sm">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="p-2 border">ID</th>
                        <th className="p-2 border">Name</th>
                        <th className="p-2 border">Email</th>
                        <th className="p-2 border">Phone</th>
                        <th className="p-2 border">Subject</th>
                        <th className="p-2 border">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {teachers.map((t)=>(
                        <tr key={t.id}>
                            <td className="p-2 border text-center font-bold"><Link to={`/teachers/${t.id}`} className="text-blue-600 underline hover:text-blue-800">{t.id}</Link></td>
                            <td className="p-2 border text-center font-bold"><Link to={`/teachers/${t.id}`} className="text-blue-600 underline hover:text-blue-800">{t.name}</Link></td>
                            <td className="p-2 border text-center">{t.email}</td>
                            <td className="p-2 border text-center">{t.phoneno}</td>
                            <td className="p-2 border text-center">{t.subject}</td>
                            <td className="p-2 border text-center">{t.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br/>
            <div className="flex justify-end">
                <button className="bg-green-400 w-[200px] h-[50px] font-bold"
                onClick={addNewTeacher}>Add New Teacher</button>
            </div>
        </div>
    );
};

export default TeacherList;