import React, { useState } from 'react'
import Select from 'react-select'
import './Color.css'
function MyFunction() {
  var colors=[
    { label : 'Lime', value : 'lime' },
     { label : 'Lavender', value : 'lavender' }, 
     { label : 'Crimson', value : 'crimson' }, 
     { label : 'Darkblue', value : 'darkblue' }, 
     { label : 'Teal', value : 'teal' }, 
     { label : 'Rebecca Purple', value : 'rebeccapurple' }, 
     { label : 'Ghost White', value : 'ghostwhite' }, 
     { label : 'Aqua Marine', value : 'aquamarine' }, 
     { label : 'Alice Blue', value : 'aliceblue' } 
  ];
  var [setbgcolor,ddlvalue]=useState(colors.value);
  var ddlhandle = (e) => {
    ddlvalue(e.value);
  }
  return (
    <>

         
      {/* <style>{'div {background-color:'+setbgcolor+';}'}</style> */}
      <center>
        <h1>COLOR CHANGER</h1>
      <div className='st'>

      <style>{'. {background-color:'+setbgcolor+';}'}</style>
        <Select options={colors} onChange={ddlhandle} className="sl">
         {/* <center>
             <h3>BACKGROUND COLOR CHANGER : {setbgcolor}</h3>
            </center> */}
        </Select>
            </div></center>
        <center>
        <div className='dk'>
            <style>{'.dk {background-color:'+setbgcolor+';}'}</style>

          <h3>{setbgcolor}</h3>
        </div></center>
             </>
   
  )
}

export default MyFunction