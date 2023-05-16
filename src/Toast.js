import React from 'react'

function Toast({setisToastVis ,toastprops, position}) {

    const deleteToast = () => {
        setisToastVis(false);
    }
     
    

  return (
    <div className={`container ${position}`}>
        <div className={`notification toast ${position}`}>
        <button onClick={deleteToast}>X</button>
        <div>
            <p className='toast-title'>{toastprops.title}</p>
            <p className='toast-desc'>{toastprops.description}</p>
        </div>
    </div>
    </div>
  )
}

export default Toast