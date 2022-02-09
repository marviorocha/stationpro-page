import 'fontawesome-free/css/all.min.css'


const Footer = () => {

  return (
    <footer className="mt-72 text-center">
      <div className="flex flex-row space-x-5 items-center justify-center">
        <i className='fas fa-twitter fa-2x  text-blue-400 hover:text-blue-300'></i>
        <i className='fas fa-facebook fa-2x  text-blue-300 hover:text-blue-500'></i>
        <i className='fas fa-twitter fa-2x  text-blue-400 hover:text-blue-300'></i>
        <i className='fas fa-twitter fa-2x  text-blue-400 hover:text-blue-300'></i>
        <i className='fas fa-twitter fa-2x  text-blue-400 hover:text-blue-300'></i>
      </div>
      <a
        href="https://www.marviorocha.com"
        target="_blank"
        title='Marvio Rocha - Developer'
        className='text-sm'
      >
        Powered by {'2022'} Station Pro - Internet Radio Broadcast
        <br />
        Developer by Marvio Rocha - www.marviorocha.com

      </a>
    </footer>
  )
}

export default Footer;