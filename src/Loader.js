import React, { useState, useEffect } from 'react'

function Loader(){
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setInterval(() => {
            setLoading(!true)} , 5000)
     }, [])
   

    return(
        <>
            <div className="loader" style={{animation: loading ? 'spin 1s linear infinite' : 'none'}}>
                <div className="outer-circle">
                    <div className="top-circle"></div>
                    <div className="inner-circle"></div>
                </div>  
            </div>
            <div className={loading ? 'content' : 'content show-content'}>
                <p><strong>Doctor Manhattan </strong> (Dr. Jonathan Osterman), often shortened to Dr. Manhattan or simply Manhattan, is a fictional character who appears in comics published by DC Comics. He debuted in the graphic novel limited series Watchmen. Doctor Manhattan was created by writer Alan Moore and artist Dave Gibbons.</p>
                <p><i>- from the DC comics wikipedia page</i></p>
            </div>
        </>
    )
}

export default Loader