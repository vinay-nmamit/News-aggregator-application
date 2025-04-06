import React from 'react'
// import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const LogOut = () => {

    const navigate=useNavigate();
    const handleLogout = () => {
        // Perform logout logic here (e.g., clear user session, redirect to login page, etc.)
        console.log("User logged out");
        alert("Logged out successfully!");
        navigate('/');
    }
  return (
    <div>
      <button className=' w-100 py-3 bg-primary-subtle border-0 rounded-2  ' 
      onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default LogOut
