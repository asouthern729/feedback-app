import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

function FeedbackList( {feedback} ) {
  if(!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  )
}

FeedbackList.propTypes = {
  feedback: PropTypes.array.isRequired,
  item: PropTypes.object.isRequired
}

export default FeedbackList
