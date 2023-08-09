import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as style1 from 'react-syntax-highlighter/dist/esm/styles/prism';
// import * as style2 from "react-syntax-highlighter/dist/esm/styles/hljs"
import {AiOutlineCheckCircle, AiFillPlayCircle} from 'react-icons/ai'
import * as FiIcons from "react-icons/fi"
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import "../styles/Markdown.css"
import { useEffect, useState , useReducer} from 'react';
// import {GiBackwardTime} from "react-icons/gi"
import "../styles/Codenew.css"
// import ReactMarkdown from "react-markdown"
import Markdown from "markdown-to-jsx";
import ReactMarkdown from 'react-markdown';

import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash'
import * as Suite from '@rsuite/icons';
// import { color } from '@mui/system';
// import Code2 from './Code2';
import '../styles/sidebar.css'
// import { SidebarData } from './SidebarData';

import { HiArrowLongRight } from "react-icons/hi2";
import {TiTickOutline} from 'react-icons/ti'
import {RxCrossCircled} from 'react-icons/rx'
import { ChildProcess } from 'child_process';

var ct:any;
var id_event:any;
var cmd1:any;
var c:any;
var clr1:any;
var time:any=0;
var svg:any
SyntaxHighlighter.registerLanguage('bash', bash)
var myString:String;
var classreg:string;
//const reguarExp = new RegExp('```text[?/.,a-zA-Z0-9!@#$%^&()+=":;{}[]]*```');
var Children_li: any[] = []
var Complete_li:boolean[] = []
var Children_h2:any[] = []
// var Complete_h2:any[] = [] 
var comp:any[]=[]
var chi=0,ch=0,h22=0;
var num_li=0;
var count_h2 = 0
var count_li = 0
var li_point = 0;
var pointer = -1;
var h_next:any;
var flag = false;
var cmd1:any;
var head = 0;
var h_point = 0;
var dict_head:any;
var s ='';


// if(Children_li.length ! = 0){
//   var j = 0;
//   var m , x=0;
//   while(j<Children_li.length){
//     head = 0;
    
//     if(Children_li[j] == "h2"){
//       m = j+1;
//       console.log("Value of m:" + m);
      
//       if(Children_li[m] == "h2"){
//         s = "h2" + String(x);
//         dict_head[s] = head;
//         j = m;
//         x = x + 1;
//         continue;
//       }
//       if(Children_li[m] == "li"){
//         m = m+1;
//       }
//       if(Children_li[m] == "code"){
//         head = head + 1;
//         m = m+1;
//       }
//     }

//   }
// }

// var Children_li: any[] = []
// var Complete_li:boolean[] = []
// var Children_h2:any[] = []
// // var Complete_h2:any[] = [] 
// var comp:any[]=[]
// var chi=0,ch=0,h22=0;
// var num_li=0;
// var count_h2 = 0
// var count_li = 0
// var li_point = 0;
// var pointer = -1;
// var h_next:any;
// var flag = false;
// var cmd1:any;
// const NewPage = () =>{
//   return(
//     <div>
//        <Code2 content={''}></Code2>
//     </div>
//   )
// }
// const IconChange = [
//   {
//     title:'redcheck',
//     icon: <AiOutlineCheckCircle color='red'></AiOutlineCheckCircle>
//   },
//   {
//     title: 'greencheck',
//     icon: <AiOutlineCheckCircle color='green'></AiOutlineCheckCircle>
//   }
// ]
// let countOL = 0;

//const [idnored, forceupdate] = useReducer(x=>x+1 , 0);

function handleClick(){
  //forceupdate();
}
// function dictionary_init(Array_li:any[]){
//   const dict_arr: { [key: number]: any } = {};
//   var executed = false;
//   var j,i=0;
//   return function() {
//       if (!executed) {
//           executed = true;
//           while(i<Array_li.length){
//             if(Array_li[i] == "h2"){
//               var cnt_code = 0;
//               for(j=i;j<Array_li.length;j++){
//                 if(Array_li[j] == "code"){
//                   cnt_code = cnt_code +1;
//                 }
//                 else if(Array_li[j] == "h2"){
//                   i = j;
//                   break;
//                 }
//               }
//               dict_arr[j]= cnt_code;
//               console.log(dict_arr);

//             }
//           }
//       }
//       return dict_arr;
//   };
// };
    
  const IconControlRed = (n:any, Array_li:any[]) =>{
  
  // Array_li.pop()
  // console.log("After popping: " + {Array_li})
  // var dict_extract = dictionary_init(Array_li);
  // var dict_arr = dict_extract();
  //var lengthy = 1;

  var dict_clr=JSON.parse(localStorage.getItem("clr")||"{}")
  let i:number, j:number ;
  let m:number
  let svgNum=0;
  var x = 1;
 
  //Children_li.splice(-1)
  //console.log("After popping: " + {Children_li})
  var y = document.getElementsByClassName('icon_everything') as HTMLCollectionOf<HTMLDivElement>;
  // while(h_point<Children_li.length){
  //   if(Children_li[h_point]=="h2")
  //   {
  //     if(pointer==-1){
  //       Children_li[pointer]="x";
  //       y[pointer].style.color = "green";

  //     }
  //     pointer = h_point;
  //     flag = true;
  //   }
  //   else if(Children_li[h_point] == "pre"){
  //     flag = false;
  //   }
  //   else{
  //     if(flag){
  //       Children_li[h_point] = "x";
  //       y[pointer].style.color = "green";
  //     }
  //   }
  //   h_point++;
  // }
  // while(h_point!=Children_li.length){
  //   if(Children_li[h_point] == "li")
  //   continue;
  //   if(Children_li[h_point] == "h2"){
  //     h_next=h_point+1;
  //     while(Children_li[h_next+1]!="h2"){
  //       if(Children_li[h_next]=="pre"){
  //         for(j=h_point+1;j<=h_next;j++){
  //           Children_li[j]='x';
  //           y[j].style.color = "green";
  //         }
  //       }
  //     }

  //   }
  // }
  var y = document.getElementsByClassName('icon_everything') as HTMLCollectionOf<HTMLDivElement>;
  console.log({y})
  console.log({n})

  console.log(Array_li)
  for(i=0;i<Array_li.length;i++){
  if(Array_li[i]==true){
  svgNum = svgNum + 1;
  }
  
  }
  console.log(Array_li)
  console.log({svgNum})
  svg=svgNum
  y[n-1].style.color = clr1;
  console.log("ICR  ",Array_li)
  localStorage.setItem("c",JSON.stringify(Array_li))
var dict_arr= JSON.parse(localStorage.getItem("dict")||"{}")


var keys_only = Object.keys(dict_arr);
  var length1 = Object.keys(dict_arr).length;
  for( n of keys_only){
    // if(keys_only.indexOf(n) != length1-1){
    //   var p1:number = n;
    //   var p2:number = n+1;
    //   var arr_new_li = Array_li.slice(p1,p2);
    //   if(arr_new_li.includes("code")){
    //     break;
    //   }
    //   else{
    //     y[p1].style.color= "pink";
    //   }
        
    //   }
console.log("         "+keys_only)
// const index = D.findIndex(item => item.name === 'John');

    if(keys_only.indexOf(n)==0)
    {
      console.log("if1      "+keys_only.indexOf(n))
    if(svgNum==dict_arr[n])
    {
      if(clr1=="green")
          dict_clr[n]+=0
          else
          dict_clr[n]+=1

  localStorage.setItem("clr",JSON.stringify(dict_clr))
          if(dict_clr[n]==0)
      y[parseInt(n)].style.color="green"
      else
      y[parseInt(n)].style.color="red"
      // y[parseInt(n)].style.color="violet"
      console.log("Testing   if1  "+svgNum)
      break;            
    }
    }
    else{ 
    if(svgNum==(parseInt(dict_arr[n])+parseInt(dict_arr[keys_only[(keys_only.indexOf(n))-1]]))){
      console.log("Testing if2    "+svgNum+"  "+(parseInt(dict_arr[n])+parseInt(dict_arr[keys_only[keys_only.indexOf(n)-1]])))
      if(clr1=="green")
      dict_clr[n]+=0
      else
      dict_clr[n]+=1

      localStorage.setItem("clr",JSON.stringify(dict_clr))

      if(dict_clr[n]==0)
  y[parseInt(n)].style.color="green"
  else
  y[parseInt(n)].style.color="red"
      // y[parseInt(n)-1].style.color="violet"
    break;
    }

    else{
      console.log("Testing else    "+svgNum+"    "+(parseInt(dict_arr[n])+parseInt(dict_arr[keys_only[keys_only.indexOf(n)-1]])))
    break;
    }
  }

    }
  // for(i=0;i<Array_li;i++){
  //   if(svgNum == dict_arr[i]){
  //     console.log(svgNum + " dict head value: " + dict_head[i]);
  //     for(j=0;j<Array_li.length;j++){
  //       if(Array_li[j] == "h2"){
  //         console.log(j);
  //         Array_li[j] = "complete";
  //         console.log(Array_li);
  //         y[j].style.color = "orange";
  //         break;
  //       }
  //     }
  //   }
  // }

  // var keys_only = Object.keys(dict_arr);
  // var length1 = Object.keys(dict_arr).length;
  // for( n in keys_only){
  //   if(keys_only.indexOf(n) != length1-1){
  //     var p1:number = n;
  //     var p2:number = n+1;
  //     var arr_new_li = Array_li.slice(p1,p2);
  //     if(arr_new_li.includes("code")){
  //       break;
  //     }
  //     else{
  //       y[p1].style.color= "pink";
  //     }
  
  //     }
  //   }
  
    

  
  // while(h_point!=Array_li.length-svgNum){
  //     if(Array_li[h_point] == "li")
  //     continue;
  //     if(Array_li[h_point] == "h2"){
  //       head = h_point;
  //       h_next=h_point+1;
  //       while(Array_li[h_next+1]!="h2"){
  //         if(Array_li[h_next]!="code"){
  //           continue;
  //         }
  //       }
  //       y[head].style.color = "red";
  //     }
  //     h_point++;
  //   }
  // Array_li.pop()
  // console.log("After popping: " + {Array_li})
  // for(i=0;i<Children_li.length-1;i++){
  
  // if(Children_li[i] == "code" && Children_li[i]=="true"){
  // y[i-1].style.color = "green";
  // }
// }

   
  
 // var y = document.getElementsByClassName('icon_everything') as HTMLCollectionOf<HTMLDivElement>;
  // var sidey = document.getElementsByClassName('side_icons') as HTMLCollectionOf<HTMLDivElement>;
  // for(i=0;i<count_li;i++){
  //   if(y[i])
  //   y[i].style.color = 'red';
  //   }
  // for(i=0;i<lengthy;i++){
  // if(sidey[i])
  //  sidey[i].style.color = 'red';
  // }
}
  



   
  
const IconControlGreen = () =>{
  let i:number
  var y = document.getElementsByClassName('icon_everything') as HTMLCollectionOf<HTMLDivElement>;
  var sidey = document.getElementsByClassName('side_icons') as HTMLCollectionOf<HTMLDivElement>;
 for(i=0;i<count_li;i++){
    y[i].style.color = 'green';
    
 }
  for(i=0;i<y.length;i++){
  if(sidey[i])
  sidey[i].style.color = 'green';
  }
}
function LinkRenderer(props: any) {
  return (
    <a target={props.href} >

      {props.children}
    </a>
  );
}

const TextHead = ({ children }:any ) => {
  
  return (
    <div className="h1">
      {/* <AiOutlineCheckCircle/> */}
      
      {children}
    </div>
  );
  
};
const TextHead2 = ({ children }:any ) => {
    Children_li[count_li] = "h2"
  //Children_h2[count_h2] = count_li;
  //console.log("h2       "+{Children_h2}+"    "+ count_h2)
  count_li++;
  // console.log({Children_li})

// comp[count_h2]=chi;
// Children_h2[count_h2] = {children}
// count_h2++;
  
chi=0;
  // console.log({children}+" "+count_h2+" "+comp)
  return (
    <div className="h2Cont">
      
      <AiOutlineCheckCircle className = 'icon_everything' style={{ fontSize: '1.2rem', color: "lightgrey", fontWeight: "bold" , alignContent:"center" }}/>
      <div className='h2'>{children}</div>
    </div>
  );
};
const TextHead3 = ({ children }:any) => {
  return (
    <div className="h3">
      {children}
    </div>
  );
};
const TextBlock = ({children }:any) => {
  const[IsActive2, setIsActive2] = useState(false);
 Children_li[count_li] = "li"
  count_li++;
  // console.log({Children_li})
  // Children_li[count_li] = "li"
  // Complete_li[count_li] = false;
  // count_li++;
  
  
  
  return(
   <div className="everything">
  <div className='contents'>
  
    { !IsActive2? <><AiOutlineCheckCircle className='icon_everything' onClick={() => {
            setIsActive2(!IsActive2); 
          } } style={{ fontSize: '1.2rem', color: "lightgrey", fontWeight: "bold" , alignContent:"center" }} /></>:<><AiOutlineCheckCircle className='icon_everything'
          style={{ fontSize: '1.2rem' }} 
          color="green"  /></>}
  
  
  {children}
  </div>
  </div>
  )
}

const Blocky = ({children}:any) => {
  let lang = 'text';
  
  
  
  return (
    
    
    <div className='blockpart'>
    
    
    <SyntaxHighlighter language = {lang} style={materialDark }>
      
      {children}
    </SyntaxHighlighter>
    
  
    </div>
  )
}

function dictionary_init(Array_li:any[]){
  const dict_arr: { [key: number]: any } = {};
  const dict_clr:{[key:number]:any}={}
 console.log("dict   ",Children_li)
  var j,i=0;
  var x=0;
  var cnt_code = 0;
        while(i<Array_li.length){
          var f=true
          console.log({Array_li})
            if(Array_li[i] == "h2"){
              
              cnt_code = 0;
              for(j=i+1;j<Array_li.length;j++){
                if(Array_li[j] == "code"){
                  cnt_code = cnt_code +1;     
                }
                else if(Array_li[j] == "h2"){
                  dict_arr[i]= cnt_code;
                  dict_clr[i]=0;
                  i = j;
                  f=false
                  x=j;
                  break;
                }
                else
                continue
              } 
              console.log(cnt_code+"   "+j)
              if(f==true)
              i++;
              // dict_arr[j]= cnt_code;
              console.log(dict_arr);
              console.log("Dict      "+x)

            }
           else
           i++;
            
          }
          dict_arr[x]= cnt_code;
          dict_clr[x]=0;
          localStorage.setItem("dict",JSON.stringify(dict_arr));
          localStorage.setItem("clr",JSON.stringify(dict_clr));

      }


  const MyLink = ({children }:any) => {
        var ids = '';
        // var arrnew = ['',''];
        // var s = children.toString().split(' ')
        // for(var x=0;x<s.length;x++){
        //   arrnew[x] = s[x].toString()
      
        // }
      console.log(children)
      var s = children;
      const arrnew = [];
      var arrnew1 = ['',''];
      
      for (let x = 0; x < s.length; x++) {
        const element = s[x];
      
        if (typeof element === 'string') {
          arrnew[x] = element;
        } else if (element.type === 'code') {
          arrnew[x] = element.props.children;
        } else {
          arrnew[x] = String(element);
        }
      }
        console.log("Array new:" ,arrnew)
        var str = '';
        //var str = arrnew.concat().toString()
        for(var x = 0;x<arrnew.length;x++){
          str = str + arrnew[x]; 
        }
        arrnew1  = str.split(' ');
          
        
        console.log(arrnew1)
        for(var i=0;i<arrnew1.length-1;i++){
          if(arrnew1[i].includes('.')){
            ids = ids + arrnew1[i].replace('.', '').toString()+'-';
          }
          // else if(arrnew1[i].includes(' - ')){
          // ids = ids + arrnew1[i].replace(' - ','---').toString()+"-";
          //  }
          else if(arrnew1[i].includes(',')){
            ids  = ids + arrnew1[i].replace(',','').toString();
           }
          else{
          ids = ids+ arrnew1[i].toString()+"-";
          }
        }
        ids = ids+ arrnew1[i].toString();
        //var newids = s.join("-")
        console.log( "ids:" , ids)
        Children_li[count_li] = "h2"
        //Children_h2[count_h2] = count_li;
        //console.log("h2       "+{Children_h2}+"    "+ count_h2)
        count_li++;
        console.log({Children_li})
        
        // comp[count_h2]=chi;
        // Children_h2[count_h2] = {children}
        // count_h2++;
        
      chi=0;
      console.log(ids.toLowerCase())
        console.log({children}+" "+count_h2+" "+comp)
        return (
          <div id= {ids.toLowerCase()} className="h2">
            
            <AiOutlineCheckCircle className = 'icon_everything' style={{ fontSize: '1.2rem', color: "lightgrey", fontWeight: "bold" , alignContent:"center" }}/>
            {children}
          </div>
        );
          
        
        
      };
      
  

const Set_True = () =>{
  
  let m:any;
ct=parseInt(localStorage.getItem("s")|| '')
  if(ct>0){
  CallOnce(Children_li)
  dictionary_init(Children_li)
  localStorage.setItem("s","0")
  }
  Children_li=JSON.parse(localStorage.getItem('c')|| '[]')
  console.log("Set_true    ",Children_li)
  for(m=0;m<Children_li.length;m++){
    if(Children_li[m] == "code" && Children_li[m] !=false && num_li==0 ){
      console.log("Im in if")
    Children_li[m] = true;
    break;
    }
    else if(Children_li[m] == "code" && Children_li[m] !=false){
      console.log("Im in if 2")
      Children_li[m]= true;
      break;
    }            
  }
  
  // CallOnce(Children_li)

    
  
  

  //Children_li[10]="true";
  // console.log("Length of array:"+ Children_li.length+"   "+{Children_li}+"      "+count_li)
  //Complete_li[count_li-1] = true;
  console.log("Check   ", Children_li)
  c=m;
  IconControlRed(m, Children_li);
}

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
  
  Children_li[count_li] = "code"
  count_li++;
  chi++;
  ch++;
  console.log(ch)
  console.log({Children_li})
  
  // var t=dictionary_init(Children_li)
  // console.log(t)
  
  
  // CallOnce(Children_li)
  // myString= JSON.stringify(children)
  // if (myString.startsWith("```text")) 
  // classreg = 'text';
  // else
  // classreg = 'codepart';

  // function fcmd()
  // {
  //   // console.log(children)
  //   cmd1(children);
 
  //   if(c!=children ){
  //     count_li++;
  //     c=children;
  //     h22++;
  //   }
  // if(clr1!=undefined)
  
  function fcmd(event:any)
  {
    // console.log(children)
    cmd1(children);

  }
  return (
    <>
    
    <div className='codepart'>
    <div style={{margin: '2rem'}}>
    <div >{<><FiIcons.FiPlay onClick={(event) => {
            setIsActive(!isActive); setTimeout(Set_True,1000);fcmd(event);id_event=event.currentTarget.parentElement;

          } }className='icon_everything' style={{ fontSize: '1.2rem', color: "grey", fontWeight: "bold"  }} /></>}
          
    </div>
    
    </div>
    
    <SyntaxHighlighter language={lang} style={style1.coy } >
      
      {children}
    </SyntaxHighlighter>
    
  
    </div></>
  )
}

const HyperLink = ({href}:any,{children}:any) =>{
  console.log("Href:"+{href})
  console.log("Children:" + {children})
  return(
    
    <a href={href}>{children}</a>
    
  )
}
const PreBlock = ({cmd,children, ...rest}:any) => {
  
  
    return(
     
      CodeBlock(children['props'])
      
    );
  
  
  
}
// const MyLink = ({ href, children }:any) => {
//   // Customize the rendering of the <a> tag here
//   const handleClick = (event:any) => {
//     // Handle the click event
//   };

//   return (
//     <a href={href} onClick={handleClick}>
//       {children}
//     </a>
//   );
// };
// const TextPreBlock = ({children, ...rest}:any) => {
//   //if (children ['type'] === 'code') 
    
//     return(
     
//       Blocky(children['props'])
      
//     );
  
  
  
// }


// interface PostProps{
//   content:any
//   cmd:any
// }
 function CallOnce(a:any)
{
  localStorage.setItem("c",JSON.stringify(a))
      
  var j:any=JSON.parse(localStorage.getItem("c")|| '[]')
  // console.log(j)
  Children_li = j.filter((element:any) => element !== null);
  localStorage.setItem("c",JSON.stringify(Children_li))
  console.log({Children_li})
}

const Code = ({content,cmd,clr,t}:any) => {
  const [postContent, setPostContent] = useState("");
  
// console.log(postContent)
// Children_li = {Children_li} 
// count_h2={count_h2} 
// count_li={count_li} 
// num_li = {num_li}
ch=0;
count_li=0;
Children_li=[]
  useEffect(() => {
    const set=async()=>{
      let a=await fetch(content)
      // console.log(a)
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
            
            
            
          

          
            
            h1:TextHead,
            h2: MyLink,
            li: TextBlock,
            
            
        
            },
          }}>{postContent}</Markdown></div>
    </>
  )
}

  /*return (
    <div>  
      <AiFillPlayCircle className='play'></AiFillPlayCircle>
      <SyntaxHighlighter
    language={lang}
    style={materialDark}
  >
    {children}
  </SyntaxHighlighter></div>
  )
}*/

export default Code

// function rgba(arg0: number, arg1: number, arg2: number, arg3: number): string {
//   throw new Error('Function not implemented.');
// }
