
import PrimaryLightButton from "./shared/PrimaryLightButton"
function HomeHeader({ title, lead}) {
  return (
    <header className='home'>
        <h2>{title}</h2>
        <p>{lead}</p>
        <PrimaryLightButton link='#'>Submit request</PrimaryLightButton>
    </header>
  )
}
HomeHeader.defaultProps = {
    title: 'Page Title',
    lead: 'Lead message to users'
}
export default HomeHeader
