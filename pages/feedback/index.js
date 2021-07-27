import React, { Fragment } from 'react'
import {buildFeedbackPath,ExtratigRedFile} from './../api/feedback'
import { useState } from 'react';
//Pre-render the code 
function feedback(props) {
    const[feedbackData,SetFeedBackItem]=useState([]);

    function onclickbuttonhenadler(id){
        fetch(`/api/${id}`).then(response=>response.json()).then(data=>{
            SetFeedBackItem(data.feedback)

        });//api/some/feedback like dynamic id excess hear

    }
    return (
        <Fragment>
        {feedbackData && <p>{feedbackData.email}</p>}

        <ul>
           {props.feedbackItem.map((item)=>
           <li key={item.id}>{item.text}{''}<button onClick={onclickbuttonhenadler.bind(null,item.id)}>Show-button</button>

           </li>
           
           )}
        </ul>
        </Fragment>
    )
}

export async function getStaticProps(){
   const Filepath = buildFeedbackPath()
   const data=ExtratigRedFile(Filepath)
   return{
       props:{
           feedbackItem:data
       }
   }

}
export default feedback
