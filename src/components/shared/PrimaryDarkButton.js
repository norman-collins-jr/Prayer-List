import PropTypes from 'prop-types'
function PrimaryDarkButton({ outline, link, children}) {
  const buttonType=outline ? 'outline':'solid';
  return (
    <a href={link} className={`btn btn-primary-dark-${buttonType}`}>
      {children}
    </a>
  )
  
}

PrimaryDarkButton.defaultProps = {
    outline: false,
    link: '#',
  }
export default PrimaryDarkButton
