import { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
  // State
  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  useEffect(() => {
    fetchFeedback()
  }, [])

  // Fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch("http://localhost:5000/feedback?_sort=id&_order=desc")
    const data = await response.json()

    setFeedback(data)
    setIsLoading(false)
  }

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
    isLoading, // function
    deleteFeedback, 
    addFeedback, 
    editFeedback, 
    updateFeedback
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext