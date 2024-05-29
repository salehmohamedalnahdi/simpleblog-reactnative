import { useState,useEffect } from "react";

export default function FetchAPI(){
  const [data,setData]=useState()
  // useEffect(()=>{
  //   fetchData()
  // },[])
  const fetchData = async () => {
    const response= await fetch('https://simbleblog-backend.onrender.com/blogs');
  if(!response.ok){
    throw Error("could not fetch data for that resource")
       }
  const result= await response.json();
  setData(result)
  }
  fetchData()
    return data
}

