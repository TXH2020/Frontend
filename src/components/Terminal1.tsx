import React, { useEffect } from 'react';
import data from './credentials.json'
var url:any;
if(data.hostname!='' && data.username!='' && data.password!='')
         url="http://localhost:8888/index?"+"hostname="+data.hostname+"&username="+data.username+"&password="+btoa(data.password)+"&command=tmux"
else
	 url="http://localhost:8888/index?command=tmux"
export default function Terminal({c,sclr,st}:any){
  let i:number=0;
  function sendMessage() {
		var special_comm_flag=0;
		//special commands list
		var spec_commands=['script','exit']
        var id=''
		for(var i=0;i<13;i++)
			id+=Math.floor(Math.random()*10);
		for(var i=0;i<spec_commands.length;i++)
			if(c.trim().split()[0]===spec_commands[i])
				special_comm_flag=1;
		var message:any='';
		 if(special_comm_flag!==1)
			message="!@#a1"+c+"!#@;echo "+id+":Command_Execution_Status=$?\r";
		else{
			message="!@#a1"+c+"\r";
			special_comm_flag=0;}
        const iframe = document.querySelector("iframe");
        iframe?.contentWindow?.postMessage(message, "*");
      }
      window.addEventListener('message', function(event) {
      try{
      var x=JSON.parse(event.data);
      if(x!=null){
      if(Object.keys(x).length===2){
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

