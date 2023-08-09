import React from 'react'
import Post from '../components/Post'
import Code from '../components/Code'
const c = require("../markdown/Stage4.md")

const Stag4 = ({cmd,clr,t}:any) => {
  // let c="a";
  return (
    <div className='pages'>
    <Code content={c} cmd={cmd} clr={clr} t={t}></Code>      
      
      </div>
  )
}

export default Stag4;