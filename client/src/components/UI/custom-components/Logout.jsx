import React from 'react'
import { useAuth } from '../../../context/Context'
import { toast } from 'react-toastify';

function Logout() {
    const auth = useAuth();
    const handleLogout = ()=>{
        auth.logoutUser();
        toast.info('User Logged out')
    }
  return (
    <>
    <div className='text-lg'>
        <button onClick={handleLogout}>Logout</button>
    </div>
    </>
  )
}

export default Logout