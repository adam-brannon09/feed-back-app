import Card from "./shared/Card"
import Proptypes from "prop-types"


//item are passed in from FeedbackList.jsx. 
function FeedbackItem({ item }) {
    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: Proptypes.object.isRequired,
}

export default FeedbackItem
