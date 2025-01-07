import React, { useEffect , useState } from 'react'
import { useLoaderData } from 'react-router'


function Github() {

  const data = useLoaderData();


  // const [data, setData]= useState([]);
  // useEffect(()=>{


  //   fetch("https://api.github.com/users/hiteshchoudhary")
  //   .then(Response  =>Response.json())
  //   .then(data =>{
  //     console.log(data)
  //     setData(data)
  // })


  // },[])
  return (
    <div className='text-center m-4 bg-gray-400 text-white p-4 text-3xl '>

      GitHub Followers: {data.followers}
      <br/>
      Repo : {data.public_repos}
      <img src={data.avatar_url} alt="" width={300}/>
      
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
 const response= await fetch("https://api.github.com/users/hiteshchoudhary")

 return response.json();

}
