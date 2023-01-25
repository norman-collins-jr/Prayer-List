import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPray } from "@fortawesome/free-solid-svg-icons";

function NavMenu({ navigation}) {
  return (
    <div className='home-nav'>
      <section className='logo'>
        <a href="/">
            <FontAwesomeIcon icon={faPray} color='#324777'/>
        </a>
        <h1>Prayer List Manager</h1>
      </section>
      <nav>
        <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavMenu
