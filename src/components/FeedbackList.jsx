import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import Spinner from './shared/Spinner'
import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext)

  if(!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback Yet</p>
  }

  return isLoading ? <Spinner /> : 
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
              <FeedbackItem 
              key={item.id} 
              item={item}
              />
            </motion.div>
        ))}
      </AnimatePresence>
    </div>

  // Same as return above but without animation
  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item) => (
  //       <FeedbackItem 
  //       key={item.id} 
  //       item={item} 
  //       handleDelete={handleDelete} 
  //       />
  //     ))}
  //   </div>
  // )
}

FeedbackList.propTypes = {
  item: PropTypes.object
}

export default FeedbackList
