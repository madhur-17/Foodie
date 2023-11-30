import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer';
import useRest from '../utils/useRest';


function Menu() {
  const parms = useParams();
 
  //const [menu, setMenu] = useState([]);
 // const [rest, setRest] = useState({});
  //console.log(parms);
  const { id } = parms;
  const mdata=useRest(id);
  const rest=(mdata[0]?.card?.card?.info);
  const menu=(mdata[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
  
  return (!rest)?<Shimmer/>: (
    <div>

      <h1>{rest?.name}</h1>
      <h3 >{rest?.cuisines?.join(", ")}</h3>



      <ul>
        {menu.map((item) => <li key={item?.card?.info?.id} >

          <h3  >{item?.card?.info?.name}</h3>

        </li>)}
      </ul>


    </div>
  )
}

export default Menu
