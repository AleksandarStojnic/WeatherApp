import { useEffect, useState } from 'react';


const API_URL = "https://api.met.no/weatherapi/locationforecast/2.0";


function ForcastLocation(koordinate){

    const [data, setData] = useState([]);

    let headers = new Headers({
        "Accept"       : "application/json",
        "Content-Type" : "application/json",
        "User-Agent"   : "SchoolProject aleksandar.stojnic@gmail.com"
    });

    useEffect(() => {
        fetch(`${API_URL}/complete?lat=${koordinate.lat}&lon=${koordinate.lng}`,
        {
          method  : 'GET', 
          headers : headers 
      }) .then(res => res.json())
        .then(result => {
          setData(result)
         // console.log(result);
        }).catch(err => {
            console.log(err.message);
            //return;
        });
      
      
    }, [koordinate])

    return data;
}

export default ForcastLocation;