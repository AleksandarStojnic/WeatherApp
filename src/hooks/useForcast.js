import { useEffect, useState } from 'react';


const API_URL = "https://api.met.no/weatherapi/locationforecast/2.0";


function useForcast() {

    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);

    let headers = new Headers({
        "Accept"       : "application/json",
        "Content-Type" : "application/json",
        "User-Agent"   : "SchoolProject aleksandar.stojnic@gmail.com"
    });
    
    useEffect(() => {
        const fetchData = async () => {
          navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
          });
    
          await fetch(`${API_URL}/complete?lat=${lat}&lon=${long}`,
          {
            method  : 'GET', 
            headers : headers 
        }) .then(res => res.json())
          .then(result => {
            setData(result)
           // console.log(result);
          }).catch(err => {
              console.log(err.message);
          });
        }
        fetchData();
      }, [lat,long])

      return data;
}

export default useForcast;