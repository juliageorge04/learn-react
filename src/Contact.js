import React from 'react';
import './Contact.css';
function contact(probs){
console.log(probs);
//alert(typeof probs.id);
var nm = probs.name.toUpperCase();
    return(
        <div className="test">
            <p style={{color:"red"}}>{probs.id.name}</p>
            <p>{probs.id[0]}</p>
            <h1>{nm} Contact Page</h1>
            <label>Email Id</label>  
            <input type="text" />
            <br/>
            <label>Message</label>
            <textarea>

            </textarea>
            <button>Send</button>
        </div>
    );
}

export default contact;