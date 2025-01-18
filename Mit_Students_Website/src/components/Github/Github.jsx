import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


function Github(){
    const followers = useLoaderData();
    // const [followers,setFollowers] = useState('');
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Rajghosh786')
    //     .then(res => res.json())
    //     .then(data => {  
    //         setFollowers(data)
    //     })
    // },[])
    return(
        <>
            <div className="flex flex-col justify-center items-center text-center bg-gray-600 text-white text-3xl p-4">GithubFollowers:{followers.followers}
            <img src={followers.avatar_url} alt="Github Profile" />
            </div>            
        </>
    )
}

export default Github

export async function infoFromGithub(){
    const response = await fetch("https://api.github.com")
    const data = await response.json();
    return data
}

