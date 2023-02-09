
import PrimaryLightButton from "./shared/PrimaryLightButton"
import { Link } from 'react-router-dom'
function HomeHeader({ title, lead}) {
  return (
    <header className='home'>
        <h2>{title}</h2>
        <p>{lead}</p>
        <Link to="/request/new" className="btn btn-primary-light-solid">Add a Request</Link>
    </header>
  )
}
HomeHeader.defaultProps = {
    title: 'Page Title',
    lead: 'Lead message to users'
}
export default HomeHeader
