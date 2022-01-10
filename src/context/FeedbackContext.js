import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

  /* State */
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This is feedback item 1',
      rating: 10
    },
    {
      id: 2,
      text: 'This is feedback item 2',
      rating: 9
    },
    {
      id: 3,
      text: 'This is feedback item 3',
      rating: 7
    }
  ])

  /* Delete feedback function */
  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  /* Add feedback function */
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    /* Spread operator adds existing feedback to global feedback state,
    newFeedback object is appended to existing feedback */
    setFeedback([newFeedback, ...feedback])
  }

  return <FeedbackContext.Provider value={{
    feedback,
    deleteFeedback,
    addFeedback
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext