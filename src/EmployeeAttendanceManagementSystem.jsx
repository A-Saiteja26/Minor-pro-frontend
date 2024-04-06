import React from 'react';
//import { Link } from 'react-router-dom';
import './EmployeeAttendanceManagementSystem.css'
const EmployeeAttendanceManagementSystem = () => {
    
    return (

       
        <div className='by'>
        <h1>Employee Attendance Management System</h1>
        <div className='buttons'>
    <form method="get">
        <button className='btn' formAction="/register" type="submit">Register</button>
        <button className='btn' formAction="/app" type="submit">Recognize</button>
        <button className='btn' formAction="/delete" type="submit">Delete</button>

    </form>
</div>
<div className='admin-login'>
    <form method="get">
        <button className="btn-admin" formAction="/admin" type="submit">Admin Login</button>
    </form>
</div>

    </div>
    
    );
};

export default EmployeeAttendanceManagementSystem;
