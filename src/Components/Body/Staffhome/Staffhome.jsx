import React, { useEffect, useState } from 'react'
import './staffhome.css'
import { Link, useNavigate } from 'react-router-dom';

const Staffhome = () => {
  const navigate=useNavigate()
const [username, setUsername] = useState('');

useEffect(() => {
  const storedUsername = localStorage.getItem('username');
  if (storedUsername) {
    // Remove double quotes from the stored username
    const cleanedUsername = storedUsername.replace(/"/g, '');
    setUsername(cleanedUsername);
  }
}, []);

const Logout = () => {
  const confirmed = window.confirm("Are you sure you want to log out?");
  if (confirmed) {
      localStorage.clear();
      navigate("/admin")
  }
 
};


  return (
    // <div className=''><Link className='staffhome-back-btn'><i className="fa fa-angle-left" aria-hidden="true"></i>Back</Link></div>
    <div>
     <div className="upper">
      <div className="upper-left"><div className=''><Link className='staffhome-back-btn' to='/stafflogin'><i className="fa fa-angle-left" aria-hidden="true"></i>Back</Link></div></div>
      <div className="upper-right">
      <div className="mmm"><div className="admin-logoutt"><div className='span'><span><i className="fa fa-user" aria-hidden="true"></i>{username}</span></div><div><button className="Btn" onClick={Logout}>
  
  <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
  
  <div className="text">Logout</div>
</button></div></div></div>
      </div>
     </div>
     <div className="div-stud-btns">
      <div className='stud-btn'><Link className='staffHome-studReg-btn' to='/studentreg'>Register Student</Link></div>
      <div><Link className='staffHome-studView-btn' to='/viewfullstudents'>View All Students</Link></div>
     </div>
    </div>
   
  )
}

export default Staffhome
