import resumeUrl from "/assets/TonNuNgocKhanh-resume.pdf";
import profileImage from "/assets/TonNuNgocKhanh.jpg";

const Profile = () => {
  return (
    <section className="flex justify-center py-4 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-start max-w-4xl w-full p-6 md:p-10">
        {/* === LEFT SECTION: IMAGE === */}
        <div className="relative w-full sm:w-1/3 mb-6 md:mb-0 md:mr-10">
          <div className="relative overflow-hidden rounded-[0.5rem] shadow-xl">
            <img
              src={profileImage}
              alt="Khanh Ton's profile image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* === RIGHT SECTION: TEXT CONTENT === */}
        <div className="h-full justify-center flex flex-col w-full md:w-2/3">
          {/* Name and Introduction */}
          <h1 className="font-heading text-4xl font-extrabold mb-2">
            I'm{" "}
            <span className="underline decoration-light-blue decoration-4 underline-offset-4">
              Khanh Ton,
            </span>
          </h1>
          <p className="text-gray-700 mb-6 text-justify">
            Hello, my name is Ton Nu Ngoc Khanh.
            <br />I specialize in frontend development and have a strong passion
            for UI design. I am currently seeking a position where I can apply
            the knowledge I’ve gained and continue learning in a real-world
            environment.
            <br/>
            <br/> With 3+ years of experience, I possess strong capabilities in core front-end technologies, including HTML, CSS, JavaScript, and multiple frameworks.
          </p>

          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-max px-6 py-3 mt-2 text-dark-blue border border-dark-blue bg-light-gray rounded-full hover:bg-dark-blue hover:text-white transition duration-300 font-semibold text-sm shadow-md"
          >
            {/* <span className="mr-2 text-red-500">❖</span> */}
            Check out my resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile;
