import React, { useEffect, useState } from 'react'
import { list ,URL} from '../constants';
import Card from './Card';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useNetwork from '../utils/useNetwork';
/*
function filter(rest,search){
       const data=()=>(rest.filter((rname)=>rname.name.includes(search)))
      return data;
    }
*/

function Body() {
    const [search,setSearch]=useState("")
    const [Frest,setFRest]=useState([]);
    const [arest,setARest]=useState([]);
    const [network,setNetwork]=useState(true);
    const filterdata=()=>{
      setFRest(arest.filter((rname)=>  rname?.info?.name.toLowerCase().includes(search.toLowerCase())))
      
    }
    useEffect(()=>{
      Rdata();
    },[])

    async function Rdata(){
      const data=await fetch(URL)
      const json=await data.json();
      setFRest(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setARest(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      
    }
    //not render conponent
   // if(Frest?.length==0) return <h1>Not such restaruant</h1>

    const net=useNetwork();
    if(!net){
      return <h1>offline</h1>
    }

  return arest.length==0?(<Shimmer/>):(
    <div style={{}}>
        <div>
        <input
            type='text'
            placeholder='Search'
            value={search}
            onChange={e=>(setSearch(e.target.value))}
        />
        <button 
        //onClick={()=>{
        // setRest(filter(rest,search));
        //}}
        onClick={filterdata}
        >Submit</button>
    </div>
    <div className="restaurant-list" style={{width:"100%", display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
    {
  Frest.map(
    rest1 => {
      return(
        <Link to={"/rest/"+rest1?.info?.id} key={rest1?.info?.id}>
          <Card  {...rest1.info} />
          </Link>
      );
    }
      )
    
  
    }
      </div>
    </div>
  )
}

export default Body
