"use server"
import axios from 'axios';
export async function GetHistorique(){

    const reponse = await axios.get<[]>('http://localhost:4000/historiques')
    return(reponse.data)
}