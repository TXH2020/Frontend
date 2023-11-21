import React from 'react'
import Code from '../components/Code'
const c = require("../markdown/Stage0.md")

const Stag0 = ({cmd,clr,t}:any) => {
  return (
    <div className='pages'>
    <Code content={c} cmd={cmd} clr={clr} t={t}></Code>      
      
      </div>
  )
}

export default Stag0;