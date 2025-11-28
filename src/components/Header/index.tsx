import resumeUrl from '../../assets/TonNuNgocKhanh-resume.pdf'

const Header = () => {
  return (
    <nav className="w-full p-4 flex items-center justify-between">
      <a href="https://www.linkedin.com/in/tonnungockhanh0706/" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-linkedin text-2xl rounded-lg text-dark-blue"></i>
      </a>
      {/* <div>
        <ul className="flex space-x-4">
          <li className="text-gray-700">Profile</li>
          <li className="text-gray-700">Projects</li>
          <li className="text-gray-700">Contact</li>
        </ul>
      </div> */}

      <div className='font-cursive  text-dark-blue text-lg sm:text-xl md:text-3xl'></div>
 
      <a
        href={resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-3 text-dark-blue border border-dark-blue rounded-4xl hover:text-white hover:bg-dark-blue transition duration-300 font-semibold text-sm"
      >
        Resume
      </a>
    </nav>
  )
}

export default Header
