import React from 'react'
import {buildFeedbackPath,ExtratigRedFile} from './../api/feedback'

function heandler(req,res) {
    // if(req.method=='Delelt'){}//just Exmaple
    const feedbackId=req.query.feedbackId
    const Filepath=buildFeedbackPath();
    const feedbackdata=ExtratigRedFile(Filepath);
    const SelectFeedbackid= feedbackdata.find((model)=>model.id===feedbackId)
    res.status(200).json({feedback:SelectFeedbackid})
    return (
        <div>
            
        </div>
    )
}

export default heandler
