import { Link, NavLink } from "react-router-dom"
function NotFound() {
  return (
    <div className="full-screen">
        <h2>404</h2>
        <p>Page Not Found</p>
        <Link to="/" className='btn btn-primary-dark-solid'>Go back Home</Link>
    </div>
  )
}

export default NotFound
