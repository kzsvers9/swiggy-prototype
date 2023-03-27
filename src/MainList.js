import React from 'react'

function MainList({classname, listtext}) {
  return (
    <a href="" className="ctg"><div className={classname}>{listtext}</div></a>
  )
}

export default MainList