import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

  // State
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

  // State
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  // Update feedback item
  const updateFeedback = (id, updItem) => {
    /* Loops through feedback array, checks to see if id is equal to the id that 
    is being passed in.  If so, updates item with contents of updItem */
    setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updItem } : item))
  }

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  // Delete feedback function
  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  // Add feedback function
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    /* Spread operator adds existing feedback to global feedback state,
    newFeedback object is appended to existing feedback */
    setFeedback([newFeedback, ...feedback])
  }

  return <FeedbackContext.Provider value={{
    feedback, // state
    feedbackEdit,
    deleteFeedback, // function
    addFeedback, 
    editFeedback, 
    updateFeedback
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext