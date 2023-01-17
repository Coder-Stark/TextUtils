import React, { useState } from 'react'

export default function About(props) {
    
    /*
    const[myStyle , setMyStyle] = useState(
        {
            color : 'black',
            backgroundColor : 'white'
        }
    )
    const[btnText , setBtnText] = useState("Enable Dark Mode")
    const toggleStyle= ()=>{
        if(myStyle.color === 'white'){
            setMyStyle({
                color : 'black',
                backgroundColor : 'white',
                border : '2px solid white'
            })
            setBtnText('Enable Dark Mode');
        }   
        else{
            setMyStyle({
                color : 'white',
                backgroundColor : 'black'
            })
            setBtnText('Enable Light Mode'); 
        }
    }
    */

    let myStyle = {
        color : props.mode === 'dark'?'white' : '#042743',
        backgroundColor : props.mode === 'dark'?'#042743' : 'white'
    }
     
    return (
        <div className='container' style={myStyle}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>Analyse Your text</strong> 
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        TextUtils gives you a way to analyze your text quickly and efficiently.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                       <strong>Free To Use</strong> 
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        TextUtils is a free character counter tool taht provides instant charcter count & word count statistices for a given text.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Browser Cmpatible</strong> 
                    </button>
                    </h2>
                     <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        This Word Counter software works in any web browser such as chrome , brave , firefox etc .
                    </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-3">
                <button type='button' className='btn btn-primary' onClick={toggleStyle}>{btnText}</button>   
            </div> */}
        </div>
  )
}
