import React, { useEffect, useState } from 'react'
import Cards from './Cards';
import axios from 'axios';

const Blogs = () => {
    const [myData,setMyData]=useState([]);
    const [isError, setIsError] = useState("");

    const getApiData = async () =>{
        try {
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setMyData(data);
        } catch (error) {
            setIsError(error.message);
        }
    }

    useEffect(() => {
        getApiData();
    }, []);
  return (
    <>
        <h1 style={{color:'blueviolet'}}>Blogs Page</h1>
        { isError !== "" && <h1>{isError}</h1>}
    {
        myData.map((post)=>{
            
            return(
                <div key={post.id}> 
                    <Cards post={post}/>
                </div>
            )
        })
    }
    </>
  )
}

export default Blogs;