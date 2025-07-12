import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import TeacherDetails from './components/TeacherDetails';
import ScheduleTabs from './components/ScheduleTabs';
import { FaBars } from 'react-icons/fa';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import TeacherList from './components/TeacherList';
import AddNewTeacher from './components/AddNewTeacher';


function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
    <div className="flex flex-col md:flex-row h-screen">
      {/* Mobile Topbar with Hamburger */}
      <div className="md:hidden flex items-center justify-between bg-white shadow px-4 py-2">
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          <FaBars className="text-2xl" />
        </button>
        <h1 className="text-lg font-semibold">Teacher Management</h1>
      </div>

      {/* Sidebar: toggle for mobile, always visible for md+ */}
      <aside
        className={`bg-white shadow-lg md:w-64 w-full md:block ${
          sidebarOpen ? 'block' : 'hidden'
        }`}
      >
        <Sidebar />
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-auto">
        <Header />
        <main className="p-4 bg-gray-100 min-h-screen">
          <Routes>
            <Route path="/teachers/:id" element={<TeacherDetails/>}/>
            <Route path="/teachers" element={<TeacherList/>}/>
            <Route path="/add-teacher" element={<AddNewTeacher/>}/>
          </Routes>
        </main>
      </div>
    </div>
    </Router>
  );
}

export default App;
