import React, { useEffect } from 'react';
import data from './credentials.json'
var url:any;
if(data.hostname!='' && data.username!='' && data.password!='')
         url="http://localhost:8888?"+"hostname="+data.hostname+"&&username="+data.username+"&&password="+btoa(data.password)
else
	 url="http://localhost:8888"
export default function Terminal({c,sclr,st}:any){
  let i:number=0;
  function sendMessage() {
        if(c!=""){
        var message:any='';
        c=c.trim();
        let singleLineTexts = c.split("\n");
    if(c.search("script")===0)
    {
        message+=singleLineTexts[0];
        const iframe = document.querySelector("iframe");
        iframe?.contentWindow?.postMessage(message, "*");
        setTimeout(function(){
          message=singleLineTexts[1];
          const iframe = document.querySelector("iframe");
        iframe?.contentWindow?.postMessage(message, "*");
        },500)
    }
    else if( !c.includes("&&")){
      for( i=0;i<singleLineTexts.length;i++)
      {
        if(i==singleLineTexts.length-1)
        message+=singleLineTexts[i]
        else
       message+=(singleLineTexts[i]+" && ")   
      }
      const iframe = document.querySelector("iframe");
        iframe?.contentWindow?.postMessage(message, "*");
    }
      else {
      message+=c;
      const iframe = document.querySelector("iframe");
      iframe?.contentWindow?.postMessage(message, "*");  
    }
      }}
      window.addEventListener('message', function(event) {
      try{
      var x=JSON.parse(event.data);
      if(x!=null){
      if(Object.keys(x).length===2){
        console.log("Message received from the child: " + x.Command_Execution_Status+x.Execution_Time);
        st(x.Execution_Time)
        if(x.Command_Execution_Status==='0')
        sclr("green");
    else
        sclr("red");
    }
    }
      }
      catch(err){console.log(err);}});
      
useEffect(()=>{
  sendMessage()
  },[c])
    return(
        <>
        <div>
        </div>
        <iframe id="myFrame" src={url} style={{position:"fixed",bottom:0, width:"100%",height:"25vh"}}/>
        </>
        )
}

