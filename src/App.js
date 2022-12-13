import{useQuery} from 'react-query'
import React from "react";
import "./style.css";

const fetchData=()=>{
  return axios.get('https://jsonplaceholder.typicode.com/users')
}
const App=()=>{
  const{isLoading,data}=useQuery('nithish',fetchData)

  is(isLoading){
    return <h2> Loading... </h2>
  }

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
