import React from 'react'

function Points({title, texts}) {
  return (
<div className="points">
       {title}
        <ul className="footer-ul">
            {texts.map(item => ( <li className="footer-li"><a href="#">{item.text}</a></li>))}
         
        </ul>
      </div>
  )
}

export default Points