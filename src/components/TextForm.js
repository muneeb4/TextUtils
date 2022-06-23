import React, {useState} from 'react'




export default function TextForm(props) {
    const handleUpClick = () => {
    //console.log(text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Upper Case','success');
    }

    const handleLoClick = () => {
    //  console.log(text);
          let newText= text.toLowerCase();
          setText(newText);
          props.showAlert('Converted to Lower Case','success');
      }

      const handleClear = () => {
            setText('');
            props.showAlert('text Cleared','success');
        }

      const  handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
         setText(newText.join(" "));
         props.showAlert('Extra Spaces Removed','success');
        
      }

      const handleCopy = () => {
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value)
        props.showAlert('Copied to Clipboard!','success');
      }

    const handleOnChange = (event) => {
       // console.log("On Change")
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    //text = "new text"
    //setText("new text");
  
  return (
     <>
    <div classNAme = 'container' style={{color : props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
<div className="container mb-3" style={{color : props.mode === 'dark'?'white':'black'}}>
  <textarea className="form-control" onChange={handleOnChange} style = {{backgroundColor : props.mode === 'dark'?'#383838':'white', color : props.mode === 'dark'?'white':'black'}}  placeholder= "Enter Text here" value= {text} id="myBox" rows="8"></textarea>
</div>
 <button className="btn btn-primary mx-1 "onClick={handleUpClick} >Convert to Uppercase</button>
 <button className="btn btn-primary mx-1 "onClick={handleLoClick} >Convert to Lowercase</button>
 <button className="btn btn-primary mx-1 "onClick={handleCopy} >CopyText</button>
 <button className="btn btn-primary mx-1 "onClick={handleClear} >ClearText</button>
 <button className="btn btn-primary mx-1 "onClick={handleExtraSpaces} >Remove Extra Spaces</button>

    </div>
    <div className="container my-3" style={{color : props.mode === 'dark'?'white':'black'}} >
      <h2>Your text Summary</h2>
      
      <p>{text.replace(/\n/g, " ").split(' ').filter(value =>  value != "").length} and {text.length} characters</p>
      <p>{0.008 * text.replace(/\n/g, " ").split(' ').filter(value =>  value != "").length} Mins read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
