const ShowcaseSection = () => {
  return (
    <div id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div className="first-project-wrapper">
            <div className="image-wrapper bg-[#9ef2ff]">
              <img src="/public/images/project4.jpg" />
            </div>
          </div>
          <div className="text-content">
            <h2>
              It has become easier for companies to submit a job offer and
              provides opportunities for workers to obtain job offers{" "}
            </h2>
            <p className="text-white-50 md:text-xl">
              An app built eith React , TailwindCSS for a fast ,user-friendly
              experience.
            </p>
          </div>
        </div>
        {/* {right} */}
        <div className="project-list-wrapper overflow-hidden">
          <div className="project">
            <div className="image-wrapper bg-[#165d7d]">
              <img
                src="/public/images/project5.jpg"
                alt="Library Management platform"
              />
            </div>
            <h2>Website for a medical clinic</h2>
          </div>
        </div>
        <div className="project-list-wrapper overflow-hidden">
          <div className="project">
            <div className="image-wrapper bg-[#414647]">
              <img
                src="/public/images/project6.jpg"
                alt="Library Management platform"
              />
            </div>
            <h2>Phones website</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
