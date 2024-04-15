"use client"
import { useState,useEffect } from "react";
function GetDate(){
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // Janvier est 0
    const day = now.getDate();
    
    return `${day}/${month}/${year}`;
  }
  export let date = GetDate();

 export default function GetHours()
{
    const [dateTime, setDateTime] = useState('');
    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            const hour = now.getHours();
            const minute = now.getMinutes();
            const second = now.getSeconds();
            setDateTime(`${hour}:${minute}:${second}`);
        };
    
        const interval = setInterval(updateDateTime, 1000); // Mettre à jour toutes les secondes
    
        return () => clearInterval(interval);
      }, []);
    
      return dateTime;
}