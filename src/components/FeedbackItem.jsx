import card from "./shared/card"


//item are passed in from FeedbackList.jsx. 
function FeedbackItem({ item }) {
    return (
        <div className='card'>
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}</div>
        </div>
    )
}

export default FeedbackItem
