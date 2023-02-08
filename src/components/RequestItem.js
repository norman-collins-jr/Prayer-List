import { faPen, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link,NavLink } from 'react-router-dom';
function RequestItem({ id, user, title, desc, answered, date }) {
    
  return (
    <article className="request-item">
        <div className="title">
            <div className="info">
                <h3>{title} by {user} on {date}</h3>
            </div>
            <div className="action">
                <ul>
                    <li><Link to={`/request/edit/${id}`}><FontAwesomeIcon icon={faPen} color='#324777'/></Link></li>
                    <li><FontAwesomeIcon icon={faXmark} color='#324777'/></li>
                </ul>
            </div>
        </div>
        <p>{desc}</p>
        <div>
            Answered : {answered ? 'answered' : 'Not Answered'}
        </div>
    </article>
  )
}

export default RequestItem
