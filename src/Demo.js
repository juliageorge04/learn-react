import React from 'react';
var x =10;
function test(){
    x++;
    alert(x);
}

function Demo(){
    return(
        <div>
            <button onClick={test}>Click</button>
        </div>
    )
}

export default Demo;