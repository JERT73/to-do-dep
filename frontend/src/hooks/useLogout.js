import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const {authUser, setAuthUser} = useAuthContext();

  const Logout = async () => {
    setLoading(true);
    try {
        const res = await fetch("/api/auth/logout", {
            method: "POST",
            headers: { "content-type": "application/json"}
        })
        const data = res.json();
        if (data.error){
            throw new Error(data.error);
        }

        localStorage.removeItem("chat-user");
        localStorage.removeItem("user-tasks");
        setAuthUser(null);
    } catch (error){
        toast.error(error.message);
    } finally {
        setLoading(false);
    }
  }

  return {loading, Logout}
}

export default useLogout