import React from 'react'


const container_style = {
    'display' :'flex',
    'align-items' : 'center',
    // 'overflow' : 'scroll',

    'justify-content' : 'flex',
    // 'justify-content' : 'space-evenly'
    'border-bottom' : '1px solid #7CDDD9',
    'color' : '#1B686A',
    'width':'1000px',    
    'font-size': '12.8785px'    
}
const div_style = {
    'display' :'flex',
    'align-items' : 'center',
    'justify-content' : 'center',
    'word-break':'break-all',
    // 'overflow' : 'hidden',
    // 'border' : '1px solid',
    // 'background' : 'red',
    'text-align' : 'center',
    'width':'150px',    
    'margin' : '2% 0%',
    // 'height' : '60px'
    // disp
}

const ImportRowComponent = ({mobilenumber,email,salary,eid,name,jobtitle}) => {
  return (
    <div style={container_style}>
        <div style={div_style}>{mobilenumber}</div>
        <div style={div_style} >{email}</div>
        <div style={div_style} >{salary}</div>
        <div style={div_style} >{eid}</div>
        <div style={div_style} >{name}</div>
        <div style={div_style} >{jobtitle}</div>
    </div>
  )
}

export default ImportRowComponent
