

import {useState,useEffect} from 'react';

const API_URL = "https://api.opencagedata.com/geocode/v1";
const KEY = 'c443d7d945054e6a8e7eae719a2e65c7';
///json?q=PLACENAME&key=c443d7d945054e6a8e7eae719a2e65c

function Geo(location){

    const [coordinate, setCoordinate] = useState({lat:null, long:null});
    
    useEffect(() => {
        if(location !== ''){
         fetch(`${API_URL}/json?q=${location}&key=${KEY}`)
        .then(res => res.json())
        .then(result=>
            {
                //console.log(result);
                setCoordinate({lat:result.results[0].geometry.lat, lng:result.results[0].geometry.lng});
            }).catch(error=>{
                console.log(error.message);
               // return;
            });
    }}, [location])

   // console.log(coordinate);
    return coordinate;
}

export default Geo;