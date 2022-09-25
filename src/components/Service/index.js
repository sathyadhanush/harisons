// Features
import React from 'react';
import './Features.css';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import WebIcon from '@material-ui/icons/Web';
import DataUsageIcon from '@material-ui/icons/DataUsage';
export default function Service() {
  return (
    <section className="features" id="Service">
      <div className="content">
      <br/>  <br/>  <br/>  <br/>  <br/>  <br/>
        
       <h1 className='main'>Harisons Automation & Moulds</h1>
   
        <div className="box-container">
          <div className="box">
            
          <InsertDriveFileIcon color="primary" style={{ fontSize: 70 }} /><br/>
          <b>Our design softwares</b><br/>
         <p> Build the secure, futureproof application through
          latest technologies and enhance your user experience</p>
          </div>
          <div className="box">
          <WebIcon color="primary"  style={{ fontSize: 70 }} /><br/>
          <b>Website development</b><br/>
         <p>create websites that help you upscale your 
         business through research based designs </p>
          </div>
          
          <div className="box">
          <DataUsageIcon color="primary"  style={{ fontSize: 70 }}/><br/>
          <b>consulting</b><br/>
        <p> Explore new opportunities,get insights and
         overcome your barriers by consulting with our 
         experts </p>
          </div>
        </div>
      </div>
    </section>
  );
}
