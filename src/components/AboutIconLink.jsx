import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AboutIconLink() {
  return (
    <div className="about-link">
      {/* Adding query parameters to Link
      <Link to={{
        pathname: "/about",
        search: "?sort=name",
        hash: "#help"
      }}> */}
      <Link to="/about">
        <FaQuestion size={30} />
      </Link>
    </div>
  )
}

export default AboutIconLink
