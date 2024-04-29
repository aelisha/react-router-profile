import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const[data,setData]= useState([])
  // useEffect(() => {

  // fetch('https://api.github.com/users/reactjs')
  // .then(response=> response.json())
  // .then(data=>{
  //     console.log(data);
  //     setData(data)
  // })

  // }, [])

  return (
    <div className="text-center m-4 bg-blue-200 text-black p-4 text-3xl rounded-xl flex items-center justify-center">
      <img
        src={data.avatar_url}
        alt="Git picture"
        width={150}
        className="rounded-xl mr-4"
      />
      Github Followers: {data.followers}
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/reactjs");
  return response.json();
};
