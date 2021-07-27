import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRef,useState } from 'react'


export default function Home() {
  const[feedbackItem,SetFeedBackItem]=useState([]);
  const EmailRefHeandler=useRef()
  const FeedRefHeanler=useRef()
  function onSubmitHenaler(e)
  {
    e.preventDefault();
    const Enteremail=EmailRefHeandler.current.value
    const EnterFeedBack=FeedRefHeanler.current.value
    const reqBody={
      email:Enteremail,
      text:EnterFeedBack
      
    }
    fetch('/api/feedback',{
      method:'POST',
      body:JSON.stringify(reqBody),
      headers:{
        'Content-Type':'application/json' 
      },
      }).then((response)=>response.json())
      .then((data)=>console.log(data))
    }
  function LoadFeedbackdata(){
    fetch('/api/feedback')
    .then((response)=>response.json())
      .then((data)=>{
        SetFeedBackItem(data.feedback)
      })
      console.log('feed',feedbackItem)
    }




  

  return (
    <div className={styles.container}>
      <Head>
      </Head>

      <form onSubmit={onSubmitHenaler}>
  <div className="form-group">
    <label htmlFor='email' >Email address</label>
    <input type="email" className="form-control" id="email" placeholder="Enter email" ref={EmailRefHeandler}/>
  </div>
  <div className="form-group">
    <label htmlFor='feedback'>Your FeedBack</label>
    <textarea rows='5'  placeholder="FeedBack" id='feedback' ref={FeedRefHeanler}></textarea>
  </div>
  
  <button>Submit FeedBack</button>
</form>
<hr/>
<button onClick={LoadFeedbackdata}>Loding the from</button>
<ul>
  {feedbackItem.map((item)=>(
    <li key={item.id}>{item.text}</li>
))}
</ul>
      
    </div>
  )
}
