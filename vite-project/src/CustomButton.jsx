import { useState } from "react"
import './custom-button.css'
import PropTypes from 'prop-types';

function CustomButton({text,warnMessage,hint}){
    let [clicked,setClicked]=useState(false);
    let [mouseOver,setMouseOver]=useState(false);

    function clickHandle()
    {
        setClicked(!clicked);
    }
    return(
        <>
        <div className="button-container">
        <button 
            onClick={clickHandle}
            onMouseOver={()=>setMouseOver(true)}
            onMouseLeave={()=>setMouseOver(false)}
            className={`btn ${warnMessage!=null ? 'red': ''} ${hint!=null ? 'cursive-text' : ''}`}>{text}
            </button>
            {clicked && warnMessage!=null && <p className="warn">{warnMessage}</p>}
            {hint!=null && mouseOver && <p className='pop'>{hint}</p>}
        </div>
            
        </>
    )
}

CustomButton.propType = {
    text: PropTypes.string,
    warnMessage: PropTypes.string,
    hint: PropTypes.string,
}

export default CustomButton