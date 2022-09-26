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
          <b>Design</b><br/>
     
          </div>
          <div className="box">
          <WebIcon color="primary"  style={{ fontSize: 70 }} /><br/>
          <b>Development</b><br/>
 
          </div>
          
          <div className="box">
          <DataUsageIcon color="primary"  style={{ fontSize: 70 }}/><br/>
          <b>Quality Analysis</b><br/>
        
          </div>
        </div>
      </div>
    </section>
  );
}
