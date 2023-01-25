import React from 'react'


function HomeHeader({ title, lead}) {
  return (
    <header className='home'>
        <h2>{title}</h2>
        <p>{lead}</p>
    </header>
  )
}
HomeHeader.defaultProps = {
    title: 'Page Title',
    lead: 'Lead message to users'
}
export default HomeHeader
