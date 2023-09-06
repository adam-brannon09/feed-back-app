import PropTypes from 'prop-types'

function FeedbackStats({ feedback }) {
    //Calculate the average rating
    //acc is the accumulator and cur is the current value
    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length
    //toFixed() method formats a number using fixed-point notation.
    average = average.toFixed(1).replace(/\.0$/, '')



    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            {/* below the ternary operator disables the default of NaN if the rating is zero and replaces NaN with 0. */}
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>

    )
}

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired
}
export default FeedbackStats

