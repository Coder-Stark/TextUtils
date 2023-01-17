import React,{useState} from 'react'


export default function TextForm(props) {

    const [text , setText] = useState("");
    // text = "new  text";        //wrong way to change the state
    // setText("new text");           //correct way to change the state

    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to upper Case' , 'success')
    }
    const handleLoClick = ()=>{
        // console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to lower Case' , 'success')

    }
    const handleClearClick =()=>{
        // console.log("clear was clicked");
        let newText = '';
        setText(newText);
        props.showAlert('Text cleared' , 'success')

    }
    const handleCopy =()=>{
        // console.log('copy was clicked');
        navigator.clipboard.writeText(text);
        props.showAlert('Text copied to clipboard' , 'success')

    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert('Extra spaces removed' , 'success')

    }

    return (
        <>
            <div className='container' style = {{color : props.mode === 'dark' ? 'white' : '#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value = {text} onChange = {handleOnChange} style = {{backgroundColor : props.mode === 'dark' ? '#042743' : 'white',color : props.mode === 'dark' ? 'white' : '#042743'}} id="myBox" rows="8"></textarea>
                </div>
                <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleLoClick}>Convert to LowerCase</button>
                <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleCopy}>Copy Text</button>
                <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-3" style = {{color : props.mode === 'dark' ? 'white' : '#042743'}}>
                <h2>Your text is here</h2>
                <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length !== 0}).length}</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Nothing to preview'}</p>
            </div>
        </>
    )
}
 