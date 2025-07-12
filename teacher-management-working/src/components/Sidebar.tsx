import React,{useState} from 'react';
import { Link,useLocation } from 'react-router-dom';


const navItems =[
        {name:'Dashboard',path:'/'},
        {name:'Teachers', path:'/teachers'},
        {name:'Students', path:'/students'},
        {name:'Schedule',path:'/schedule'},
        {name:'Admin',path:'/admin'},
        {name:'Setup',path:'/setup'},
        {name:'Timeline',path:'/timeline'}
    ];
const Sidebar: React.FC = () => {
    const location = useLocation();
    const[source,setSource]=useState(false);

    const clickHandler = (e: React.MouseEvent<HTMLLIElement>) =>{
        setSource(true);
    }

    return(
        <aside className="w-full md:w-64 bg-gray-800 text-white p-4 space-y-4 md:h-full">
            <div className="font-bold text-lg mb-4 text-center md:text-left">Navigation</div>
            <ul className="space-y-2 text-sm sm:text-base">
                {navItems.map((item) => (
                <li key={item.name} onClick={clickHandler}>
                    <Link to={item.path} className={`block p-2 rounded text-center md:text-left cursor-pointer
                    ${location.pathname === item.path ? 'bg-gray-700 font-semibold' : 'hover:bg-gray-700'}`}>
                        {item.name}
                    </Link>
                </li>
                ))}
            </ul>
        </aside>
        );
}

export default Sidebar;
