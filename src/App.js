import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'
import AboutPage from './pages/AboutPage'

import FeedbackData from './data/FeedbackData'


function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    /* Spread operator adds existing feedback to global feedback state,
    newFeedback object is appended to existing feedback */
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  /* react-router-dom version 6 requires <Route> be wrapped in <Routes> parent
  component prop replaced with element */
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route exact path="/" element={
            <>
              <FeedbackForm handleAdd={addFeedback} />
              <FeedbackStats feedback={feedback} />
              <FeedbackList 
              feedback={feedback}
              handleDelete={deleteFeedback} />
            </>
          }>
          </Route>

          <Route exact path="/about" element={<AboutPage />} />
        </Routes>
        
        <AboutIconLink />
      </div>
    </Router>
  )
}

export default App