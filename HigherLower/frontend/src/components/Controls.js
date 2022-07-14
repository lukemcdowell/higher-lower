import React from 'react';

function Controls({handleClick}) {
    return (
        <>
            <button className="higher" onClick={(e) => handleClick(e)}>Higher</button>
            <button className="lower" onClick={(e) => handleClick(e)}>Lower</button>
        </>
    )
}

export default Controls