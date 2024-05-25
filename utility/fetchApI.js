import { useState,useEffect } from "react";

export default function FetchAPI(){
  const [data,setData]=useState()
  useEffect(()=>{
    fetchData()
  },[])
  const fetchData = async () => {
    const response= await fetch('https://jsonplaceholder.typicode.com/posts');
  if(!response.ok){
    throw Error("could not fetch data for that resource")
       }
  const result= await response.json();
  setData(result)
  }
    return data
}

