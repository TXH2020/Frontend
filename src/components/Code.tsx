import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as style1 from 'react-syntax-highlighter/dist/esm/styles/prism';
import * as FiIcons from "react-icons/fi"
import "../styles/Markdown.css"
import { useEffect, useState} from 'react';
import "../styles/Codenew.css"
import Markdown from "markdown-to-jsx";
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash'

var id_event:any;
var cmd1:any;
var clr1:any;
var time:any=0;
SyntaxHighlighter.registerLanguage('bash', bash)
const CodeBlock = ({children}:any) => {
  function setdiv(){
    try{
    if({clr1}.clr1==='green')
    id_event.innerHTML=`<span class="icon_everything" style="color:green;">&#10003;</span>`+`<p>`+{time}.time+`</p>`
    if({clr1}.clr1==='red')
    id_event.innerHTML=`<span class="icon_everything" style="color:red;">&#10007;</span>`+`<p>`+{time}.time+`</p>`   
}
    catch(err){console.log(err)}
  }
  setdiv();
  let lang = 'bash';
  const [isActive, setIsActive] = useState(false);
  
  function fcmd(event:any)
  {
    cmd1(children);
  }
  return (
    <>
    <div className='codepart'>
    <div style={{margin: '2rem'}}>
    <div >{<><FiIcons.FiPlay onClick={(event) => {
            setIsActive(!isActive);fcmd(event);id_event=event.currentTarget.parentElement;
          } }className='icon_everything' style={{ fontSize: '1.2rem', color: "grey", fontWeight: "bold"  }} /></>}     
    </div> 
    </div>  
    <SyntaxHighlighter language={lang} style={style1.coy } >    
      {children}
    </SyntaxHighlighter> 
    </div></>
  )
}


const PreBlock = ({cmd,children, ...rest}:any) => {
    return( 
      CodeBlock(children['props'])    
    ); 
}

const Code = ({content,cmd,clr,t}:any) => {
  const [postContent, setPostContent] = useState("");

  useEffect(() => {
    const set=async()=>{
      let a=await fetch(content)
      let d=await a.text();
      setPostContent(d);
    }
    set();
  }, [])
  clr1=clr
  cmd1=cmd
  time=t;
  return (
    <>
    <div className='markdown'>
    
    <Markdown options={{
            overrides: {
            pre: PreBlock,      
            },
          }}>{postContent}</Markdown></div>
    </>
  )
}

  

export default Code

