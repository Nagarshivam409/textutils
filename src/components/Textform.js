import React, { useState } from 'react';
import PropTypes from 'prop-types'

export default function Textform(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }
    const handleClearClick=()=>{
        let newText='';
        setText(newText);
        props.showAlert(" All Clear ","success");
    }
    const handleCopy=()=>{
        let newText=document.getElementById("my-box");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Copied to Clipboard","success");
    }
    const handleRemoveSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces have been removed","success");
    }
    const handleOnClick=(event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>  
    
    <div className=" container ">
    <h1 style={{color:props.mode==='dark'? 'white':'black'}}>{props.heading}</h1>
     <textarea className="form-control" value={text} onChange={handleOnClick} id="my-box" rows="8" style={{color:props.mode==='dark'? 'white':'black',backgroundColor: props.mode==='dark'?'rgb(35 21 109)':'white'}} ></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
    <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleLoClick}>Convert To LowerCase</button>
    <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleClearClick}>Clear Text</button>
    <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleCopy}>Copy Text</button>
    <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleRemoveSpaces}>Remove Extra Spaces</button>
    <div className="container my-2" style={{color:props.mode==='dark'? 'white':'black'}}>
        <h1>Your Text Summary:</h1>
        <p> Your Sentence has {text.split(/\s+/).filter((element) => {return element.length !==0} ).length} words and {text.length} Characters.</p>
        <p>Average Time Required to Read: {0.008*text.split(" ").filter((element) => {return element.length !==0} ).length} Minutes.</p>
        <h2>Preview:</h2>
        <p> {text.length>0?text:"Nothing To Preview.."}</p>
    </div>
    </> 
)
}
Textform.propType={title:PropTypes.string}