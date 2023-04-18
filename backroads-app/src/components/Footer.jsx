import { pageLinks,socialLinks } from "./Data"
const Footer = () => {
  return (
    <footer className='section footer'>
      <ul className='footer-links'>
        {pageLinks.map(({id,href,description})=>{
          return (
            <li key={id}>
              <a href={href} className='footer-link'>
                {description}
              </a>
            </li>
          )
        })}     
      </ul>
      <ul className='footer-icons'>
        {socialLinks.map(({id,href,icon})=>{
          return (
            <li key={id}>
              <a
                href={href}
                target='_blank'
                className='footer-icon'
              >
                <i className={icon}></i>
              </a>
            </li>
          )
        })}        
      </ul>
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'>{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}
export default Footer