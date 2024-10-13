import React, { useState } from 'react'
import toast from 'react-hot-toast';

const useGettask = async () => {
    try {
        const res = await fetch("/api/task", {
            method: "GET",
            headers: {"content-type": "application/json"},
        })
        const data = await res.json();
        console.log("Get task: ",data);
        return data;
    } catch (error){
        console.log(error.message);
    }
}
export default useGettask