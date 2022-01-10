import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {
  /* react-router-dom version 6 requires <Route> be wrapped in <Routes> parent
  component prop replaced with element */
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
              </>
            }>
            </Route>

            <Route exact path="/about" element={<AboutPage />} />
          </Routes>
          
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App