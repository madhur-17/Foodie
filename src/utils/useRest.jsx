import React, { useState,useEffect } from 'react'


const useRest=(id)=> {

    const [ab,setAb]=useState({});
    useEffect(() => {
        getInfo()
      }, []);
    async function getInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8176736&lng=75.86171709999999&restaurantId=" + id);
        const json = await data.json();
        setAb(json?.data?.cards);
    
       // console.log(ab[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
      // console.log(menu);
    }
  return (ab);
}

export default useRest;
