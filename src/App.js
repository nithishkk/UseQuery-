import{useQuery} from 'react-query'
import React from "react";
import "./style.css";
const fetchdata=()=>{
  return axios.get('https://jsonplaceholder.typicode.com/users')
}

export default function App() {
  // const{isLoading,data} = useQuery('nithish',()=>{
  //  return axios.get('https://jsonplaceholder.typicode.com/users')

  const{isLoading,data} =useQuery('nithihd',fetchdata) 
})


  if(isLoading){
    return <h1>Loading... </h1>
  }

  return (
    <div>
      <h2> Rq code in Nithish </h2>
      {data?.data.map(hero=>{
        return <div key={hero.name}>{hero.name} </div>
      })}
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
