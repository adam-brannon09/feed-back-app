import React from 'react'
import PropTypes from 'prop-types'

function Card({ children, reverse }) {
    return (
        // Style will change depending on reverse prop being true or false. basically in FeedbackItem.jsx, we pass in reverse={false} and reverse={true} to change the style of the card component. This is by using the ternary operator in the style attribute, on lines 8 and 9.
        <div className='card'
            style={{
                backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : "#fff",
                color: reverse ? "#fff" : "#000"
            }}
        >{children}</div>
    )
}

Card.defaultProps = {
    reverse: true,
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}


export default Card