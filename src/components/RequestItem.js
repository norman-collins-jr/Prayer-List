import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function RequestItem({ id, user, title, desc, answered, date }) {
  return (
    <article key={id} className="request-item">
        <div className="title">
            <div className="info">
                <h3>{title} by {user} on {date}</h3>
            </div>
            <div className="action">
                <ul>
                    <li></li>
                    <li></li>
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
