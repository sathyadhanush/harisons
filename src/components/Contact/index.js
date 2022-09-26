// Categories
import React from 'react';
import './Categories.css';
import TextField from '@mui/material/TextField';

// import FormControl from '@mui/material/FormControl';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
export default function Contact() {
  return (
    <section className="categories" id="Contact">
         <br/>  <br/>  <br/>  <br/>  <br/>  <br/>
        
    <center> <h2>Hello ,It's Great to Meet You</h2></center>
   
       <br/>
       <br/>
       <br/>
       <TextField
       fullWidth
        id="filled-basic" 
        label="Name"
         variant="filled"
         InputProps={{ style: { fontSize: 30 } }}
        InputLabelProps={{ style: { fontSize: 20 } }}
          />
           <br/>
           <br/>
           <br/>
          
    <TextField
       fullWidth
        id="filled-basic" 
        label="Mobile number"
         variant="filled"
         InputProps={{ style: { fontSize: 30 } }}
        InputLabelProps={{ style: { fontSize: 20 } }}
          />
           <br/>
           <br/>
           <br/>
              <TextField
       fullWidth
        id="filled-basic" 
        label="Email Address"
         variant="filled"
         InputProps={{ style: { fontSize: 30 } }}
        InputLabelProps={{ style: { fontSize: 20 } }}
          />
          <br/>
          <br/>
           <br/>
              <TextField
       fullWidth
        id="filled-basic" 
        label="Tell us more about your requirement"
         variant="filled"
         InputProps={{ style: { fontSize: 30 } }}
        InputLabelProps={{ style: { fontSize: 20 } }}
          />
          <br/>
          <br/>
           <br/>
           <hr/>
           
            {/* <h3 >Your requirements</h3>

        <FormControl sx={{ m: 3 ,marginLeft:25}} component="fieldset" variant="standard">
          <FormGroup>
          <FormControlLabel
            value="end"
            control={<Checkbox />}
            sx={{ '& .MuiSvgIcon-root': { fontSize: 35 } }}
            label="App Development"
            labelPlacement="end"
          />
            <FormControlLabel
            value="end"
            control={<Checkbox />}
            label="App Design"
            sx={{ '& .MuiSvgIcon-root': { fontSize: 35 } }}
            labelPlacement="end"
          />
      
          </FormGroup>
        </FormControl>
        <FormControl
          required
          component="fieldset"
          sx={{ m: 3 ,marginLeft:10}}
          variant="standard"
        >
          <FormGroup>
          <FormControlLabel
            value="end"
            control={<Checkbox />}
            sx={{ '& .MuiSvgIcon-root': { fontSize: 35 ,} }}
            label="Website Design and Development"
            labelPlacement="end"
          />
            <FormControlLabel
            value="end"
            control={<Checkbox />}
            label="Others"
            sx={{ '& .MuiSvgIcon-root': { fontSize: 35 } }}
            labelPlacement="end"
          />
          
          </FormGroup>
        </FormControl> */}
    
  <center> <Button variant="contained" sx={{ fontSize: 22,backgroundColor:"blue"}}>
          Submit
        </Button></center> 
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
    </section>
  );
}
