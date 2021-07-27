import React from 'react'
import fs from 'fs'
import path from 'path'

 export  function buildFeedbackPath(){
   return path.join(process.cwd(),'data','feedback.json')
}
 export  function ExtratigRedFile(Filepath){
   const Filedata=fs.readFileSync(Filepath)
    const data=JSON.parse(Filedata)
    return data

}
function heandler(req,res) { 
   //Automaticliy call by next js
   if(req.method ==='POST'){ //method property will check wich method is calling
      const email =req.body.email;
      const feedbackText =req.body.text;
      const newFeedBack={
         id:new Date().toISOString(),
         email:email,
         text:feedbackText
      }
      
      //Storing the data in a file
     const Filepath=buildFeedbackPath()
     const data=ExtratigRedFile(Filepath)
     data.push(newFeedBack)
     fs.writeFileSync(Filepath,JSON.stringify(data))
     res.status(201).json({message:'Sucess!',feedback:newFeedBack})


   } else{ 
      const Filepath=buildFeedbackPath()
      const data=ExtratigRedFile(Filepath)

      res.status(200).json({feedback:data})
   }
}

export default heandler
