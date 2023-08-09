import React from 'react'
import Post from '../components/Post'
import Code from '../components/Code'
const c = require("../markdown/Stage0New.md")

const Stag0New = ({cmd,clr,t}:any) => {
  // let c="a";
  return (
    <div className='pages'>
    <Code content={c} cmd={cmd} clr={clr} t={t}></Code>      
      
      </div>
  )
}

export default Stag0New;