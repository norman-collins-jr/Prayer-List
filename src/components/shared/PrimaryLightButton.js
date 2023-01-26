import PropTypes from 'prop-types'
function PrimaryLightButton({ outline, link, children}) {
  const buttonType=outline ? 'outline':'solid';
  return (
    <a href={link} className={`btn btn-primary-light-${buttonType}`}>
      {children}
    </a>
  )
  
}

PrimaryLightButton.defaultProps = {
    outline: false,
    link: '#',
  }
export default PrimaryLightButton
