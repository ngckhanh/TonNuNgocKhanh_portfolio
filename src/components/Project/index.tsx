import ProjectItem from "../ProjectItem";

const Project = () => {
  return (
    <section className="flex justify-center py-4 px-4 sm:px-6 lg:px-8">
      <section className="flex flex-col items-center max-w-4xl w-full px-6 md:px-10 py-5">
        <h1 className="font-body text-center text-dark-blue text-3xl font-bold mb-6 w-full max-w-5xl underlined">
          PROJECTS
        </h1>
        <ProjectItem
          name="NomNom | Food Recipe App"
          description="NomNom is a dedicated mobile application designed to simplify the culinary journey. It empowers users to discover, save, and effortlessly cook their favorite dishes. This project was developed in collaboration with my team at NAB (National Australia Bank) as part of the weCamp Batch 8 program."
          image="/assets/NomNom.png"
          github_src="https://github.com/NomNomNAB/NomNom_frontend"
          web_src="https://nomnom-nab.vercel.app/"
          type="Project"
        />
        <ProjectItem
          name="Origity | e-Commerce Platform for Digital Watermarking Images"
          description="Origity is an innovative e-commerce platform where every product image is securely protected with invisible watermarking technology, ensuring authenticity and preventing unauthorized use. This was my capstone project, which proudly secured the third prize in the final competition."
          image="/assets/origity.png"
          github_src="https://github.com/TTechT-Capstone/TTechT-frontend"
          web_src="https://www.origity.store/"
          type="Capstone Project"
        />
        <ProjectItem
          name="BachDuong | IELTS Speaking Practice Website"
          description="Bach Duong App is a dedicated web platform designed to significantly enhance your English language proficiency, specifically focusing on IELTS Speaking and Writing skills."
          image="/assets/bachduong.png"
          github_src="https://github.com/ngckhanh/bd-frontend"
          web_src="https://bd-frontend.vercel.app/"
          type="Project"
        />
        <ProjectItem
          name="TEDxHoChiMinhCity | Tỏ Tường 2024"
          description="This was a professional collaboration project with TEDxHoChiMinhCity for the promotion of their inaugural season of 'Tỏ Tường' event in 2024."
          image="/assets/totuong.png"
          github_src="https://github.com/TEDxHCMC/frontend"
          web_src="https://www.tedxhochiminhcity.com/"
          type="Professional Project"
        />
      </section>
    </section>
  );
};

export default Project;
