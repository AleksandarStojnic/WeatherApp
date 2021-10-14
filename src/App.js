import './App.css';
import Card from './components/Card';
import Form from './components/Form';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Forcast from './hooks/Forcast';
import Geo from './hooks/Geo';
import ForcastLocation from './hooks/ForcastLocation';
import {useState,useEffect} from 'react';



function App() {

  const [data1, setData1] = useState('');
  const [data2, setData2] = useState('');
  const [lokacija1, setLokacija1] = useState('');
  const [lokacija2, setLokacija2] = useState('');

 const onSubmit1 = (location) => { //Ovde bi trebalo da smo u location dobili lokaciju i sad cemo neke hookove
    console.log(location);
    console.log("prva lokacija");
    setLokacija1(location);
 }

 const onSubmit2 = (location) => { // Ovo je za drugu formu da setujemo podatke
   console.log(location);
   console.log("druga lokacija");
   setLokacija2(location);
 }

  const result=Forcast();
 
   const koordinate1 = Geo(lokacija1);
   const koordinate2 = Geo(lokacija2);

   const temp1 = ForcastLocation(koordinate1);
   const temp2 = ForcastLocation(koordinate2);
   
  
   if (temp1.properties && temp1!==data1){
    setData1(temp1);
   }


   if(temp2.properties && temp2!==data2){
    setData2(temp2);
   }
  
   console.log(data1);
   console.log(data2);
   
   
  
  return (
    <div>
      <Grid container spacing={2}
       direction="row"
       alignItems="top"
       justifyContent="center">
      <Button variant="contained" onClick={() =>{setData1(result)}} style={{ height:"50px"}} >Automatski</Button>
        <Grid item>
          <Container maxWidth="sm">
            <Form submitSearch={onSubmit1}/>
            <Card props={data1}/>
          </Container>
        </Grid>
        <Grid item>
          <Container maxWidth="sm">
            <Form submitSearch={onSubmit2}/>
            <Card props={data2} />
          </Container>
        </Grid>
      </Grid>
    </div>
   
  );
}

export default App;
