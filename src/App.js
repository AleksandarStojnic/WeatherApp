import './App.css';
import Card from './components/Card';
import Form from './components/Form';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import useForcast from './hooks/useForcast';
import {useState} from 'react';


function App() {

 const onSubmit1 = (location) => { //Ovde bi trebalo da smo u location dobili lokaciju i sad cemo neke hookove
    console.log(location);
 }

 const onSubmit2 = (location) => { // Ovo je za drugu formu da setujemo podatke
   console.log(location);
 }

const [data, setData] = useState('');

 const result=useForcast();
 

  return (
    <div>
      <Grid container spacing={2}
       direction="row"
       alignItems="center"
       justifyContent="center">
        <Grid item>
          <Container maxWidth="sm">
            <Form submitSearch={onSubmit1}/>
            <Card props={data}/>
          </Container>
          <Button variant="contained" onClick={() => {setData(result)}}>Automatski</Button>
        </Grid>
        <Grid item>
          <Container maxWidth="sm">
            <Form submitSearch={onSubmit2}/>
            <Card />
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
