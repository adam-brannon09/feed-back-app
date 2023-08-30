import React from 'react'
import FeedbackItem from './FeedbackItem'


function FeedbackList({ feedback }) {

    if (!feedback || feedback.length === 0) {
        return <p>No feedback yet</p>
    }
    //map through the feedback array and return a FeedbackItem component for each item in the array. Item is the assigned parameter that refers to each item in the array. Feedback is the prop passed from app.js that refers to the array of objects in FeedbackData.js. 
    return (
        <div className='feedback-list'>
            {feedback.map((item) => (
                <FeedbackItem key={item.id} item={item} />
            ))}
        </div>
    )
}

export default FeedbackList