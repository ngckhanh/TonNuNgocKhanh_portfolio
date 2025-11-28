const Footer = () => {
  return (
    <footer className="flex justify-center py-4 px-4 sm:px-6 lg:px-8 border-t border-dark-gray text-dark-blue">
      <div className="flex flex-col items-center max-w-4xl w-full px-6 md:px-10 py-5">
        <h1 className="font-body text-center text-dark-blue text-3xl font-bold mb-6 w-full max-w-5xl underlined">
          CONTACT
        </h1>

        <div className="flex items-center">
          <a
            href="https://www.linkedin.com/in/tonnungockhanh0706/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin text-2xl text-dark-blue"></i>
          </a>

          <div className="h-6 border-l border-dark-blue mx-4"></div>

          <a
            href="https://github.com/ngckhanh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github text-2xl text-gray-700 hover:text-black transition"></i>
          </a>
        </div>

        <p className="mt-4 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Ton Nu Ngoc Khanh. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
