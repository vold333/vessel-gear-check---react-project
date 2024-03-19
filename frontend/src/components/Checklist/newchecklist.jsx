import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar'; 
import Checklistmain from './Checklist_Main';
import Header from '../header';
import"./checklist.css";


const newchecklist = () => {
  return (
    <div className="dashboard">
      <Sidebar /> 
      <div className="cmain-content">
        <Header/>
        <div id='rol5'>
                    <h4>Checklist</h4>
                </div>
        <div className="box">
                <div className='selection'>
                    <input type='text' placeholder='Enter a New Department' style={{width:200, height: 48, border: 3,
                        marginTop: 69,marginLeft:20, outline: 'none', paddingLeft: 35, fontSize: 13, alignItems: 'center' }}></input>
                    <Link to={"/selectiontwo"} style={{textDecoration:'none'}}><button style={{width: 250, height: 45, fontSize: 15}}>Add</button></Link>
                </div>
                <img src={require("../images/image.png")} alt='img' style={{width:390, height: 250,}}></img>
              </div>
      </div>
    </div>
    
    
  );
};

export default newchecklist;