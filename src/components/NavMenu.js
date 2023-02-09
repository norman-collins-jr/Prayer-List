import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPray } from "@fortawesome/free-solid-svg-icons";
import {Link, NavLink} from 'react-router-dom';

function NavMenu() {
  return (
    <div className='home-nav'>
      <section className='logo'>
        <Link to="/">
            <FontAwesomeIcon icon={faPray} color='#324777'/>
        </Link>
        <h1>Prayer List Manager</h1>
      </section>
      <nav>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/requests">Prayer Requests</NavLink></li>
            <li><NavLink to="/request/new">New Request</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavMenu
