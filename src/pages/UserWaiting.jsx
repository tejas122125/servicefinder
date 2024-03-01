import React, { useState,useEffect } from 'react'

const UserWaiting = () => {
    const [accepted,setaccepted] =  useState(false)
    const [data,setdata] = useState("")
    // assuming a user id exist
    const userid  = "dbchdchgcv"
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`http://localhost:3000/user/{userid}`);
            const jsonData = await response.json();
            setaccepted(true)
            setdata(jsonData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        // Fetch data initially
        fetchData();
    
        // Fetch data every 5 seconds
        const interval = setInterval(fetchData, 5000);
    
        // Clean up interval on component unmount
        return () => clearInterval(interval);
      }, []); // Empty dependency array ensures effect runs only once on mount
  return (
    <div className='h-screen w-screen'>
        {accepted?<>accepted</>:<>loading state</>}

    </div>
  )
}

export default UserWaiting