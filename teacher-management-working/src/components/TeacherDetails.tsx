import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ScheduleTabs from './ScheduleTabs';
import { useParams, useNavigate } from 'react-router-dom';

type Teacher = {
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
};


const TeacherDetails: React.FC = () => {
    const {id} = useParams();
  const [teacher, setTeacher] = useState<Teacher | null>(null);
  const navigate=useNavigate();

const deleteTeacher= () =>{
  axios
  .delete(`http://localhost:8080/api/teachers/${id}`)
  .then(()=>{
    alert("Teacher deleted successfully");
    navigate("/teachers");
  })
  .catch(err=>{console.error(err);
    alert("Failed to delete teacher");
  });
}
  useEffect(() => {
    axios.get<Teacher>(`http://localhost:8080/api/teachers/${id}`) 
      .then(res => setTeacher(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!teacher) return <div>Loading...</div>;

  return (
    <section className="space-y-6 px-4 sm:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="text-lg sm:text-xl font-semibold text-blue-600">
          Teachers / {teacher.name}
        </div>
          <div className='flex justify-end'>
            <button className="bg-green-400 w-[200px] h-[50px] font-bold" onClick={deleteTeacher}>
              Delete Teacher</button>
          </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <div className="font-semibold mb-2">Details</div>
          <p><strong>Name:</strong> {teacher.name}</p>
          <p><strong>Role:</strong> {teacher.subject}</p>
          <p><strong>Experience(Years): </strong>{teacher.experienceYears}</p>
          <p><strong>Birth Date:</strong> {teacher.dateOfBirth}</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <div className="font-semibold mb-2">Email</div>
          <p><strong>Work: </strong> {teacher.email}</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <div className="font-semibold mb-2">Mobile No.</div>
          <p>{teacher.phoneno}</p>
        </div>

        <div className="bg-white p-4 rounded shadow md:col-span-3">
          <div className="font-semibold mb-2">Location</div>
          <p>{teacher.location}</p>
        </div>

        <div className="bg-white p-4 rounded shadow md:col-span-3">
          <div className="font-semibold mb-2">Status</div>
          <p>{teacher.status}</p>
        </div>

        <div className="bg-white p-4 rounded shadow md:col-span-3">
          <div className="font-semibold mb-2">Qualification</div>
          <p>{teacher.qualification}</p>
        </div>
        
      </div>
      <ScheduleTabs/>
      
      
    </section>
  );
};

export default TeacherDetails;