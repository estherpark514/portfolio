import React from "react";

const Projects = () => {
  return (
    <div className="py-6 px-20">
      <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">
        My Projects
      </h1>

      {/* Cybersecurity Section */}
      <section className="mb-16" id="cybersecurity">
        <h2 className="text-4xl font-bold text-green-600 mb-6">
          Cybersecurity
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          My work in cybersecurity emphasizes research, risk management, and
          system security. Here are some highlights:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-green-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-black mb-4">
              Risk Dashboard
            </h3>
            <p className="text-gray-700 mb-6" style={{ minHeight: "100px" }}>
              Developed a{" "}
              <strong className="text-black-800 underline">Power BI</strong>{" "}
              dashboard for Humana, Inc., tracking vendor risk levels (high,
              medium, low) for 8000+ vendors.
            </p>
            <p className="text-black font-semibold mb-2">What I Did:</p>
            <p className="text-gray-700">
              Learned{" "}
              <strong className="text-black-800 underline">
                Governance, Risk, and Management (GRC)
              </strong>{" "}
              and{" "}
              <strong className="text-black-800 underline">
                Risk Management
              </strong>{" "}
              skills, utilizing tools like{" "}
              <strong className="text-black-800 underline">OneTrust</strong> to
              analyze vendor risks. Conducted interviews with various
              stakeholders within the organization to gather insights and align
              the dashboard with their needs.
            </p>
          </div>

          <div className="bg-green-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-black mb-4">
              Password Behavior Research
            </h3>
            <p className="text-gray-700 mb-6" style={{ minHeight: "100px" }}>
              Conducted a research study examining the impact of blocking
              commonly used passwords on user authentication behavior, focusing
              on how restrictions influence password patterns and security
              practices.
            </p>
            <p className="text-black font-semibold mb-2">What I Did:</p>
            <p className="text-gray-700">
              Collaborated with a team comprising a professor, a PhD student,
              and a master’s student to design and implement user experiments on
              password selection. Built a secure backend using{" "}
              <strong className="text-black-800 underline">
                Django REST Framework
              </strong>{" "}
              to collect and safely handle participant data from over 1,000
              users. Developed a web-based platform to track and analyze user
              password choices and behavioral adaptations to common password
              restrictions, providing critical insights for advancing
              authentication security research.
            </p>
          </div>

          <div className="bg-green-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-black mb-4">
              Certification
            </h3>
            <p className="text-gray-700" style={{ minHeight: "100px" }}>
              <span>
                Earned the{" "}
                <strong className="text-black underline">
                  Cisco Certified Network Associate (CCNA)
                </strong>{" "}
                certification in July 2023, focusing on network security
                concepts.
              </span>
              <div className="my-4" />
              <span>
                Earned the{" "}
                <strong className="text-black underline">
                  Intro to Splunk
                </strong>{" "}
                certification in December 2024, focusing on Splunk software for
                data analysis and monitoring.
              </span>
              <div className="my-4" />
              <span>
                Currently preparing for the{" "}
                <strong className="text-black underline">CompTIA CySA+</strong>{" "}
                certification, which emphasizes blue team strategies and is
                planned for May 2025.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Web Development Section */}
      <section className="mb-16" id="web-development">
        <h2 className="text-4xl font-bold text-red-600 mb-6">
          Web Development
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          From creating dynamic websites to integrating React and Django, I have
          built user-friendly, responsive platforms that emphasize performance
          and accessibility.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-red-100 p-6 rounded-lg shadow-md flex flex-col">
            <h3 className="text-2xl font-semibold text-black mb-4">
              Spotify Wrapped
            </h3>
            <p className="text-gray-700 mb-6" style={{ minHeight: "100px" }}>
              Designed and developed a Spotify Wrapped-inspired web application
              using <strong className="text-black underline">Django</strong> and
              the <strong className="text-black underline">Spotify API</strong>,
              collaborating with a team of five developers.
            </p>
            <p className="text-black font-semibold mb-2">What I Did:</p>
            <p className="text-gray-700 mb-6" style={{ minHeight: "100px" }}>
              Served as a full-stack developer with a focus on software
              architecture and backend functionality. Implemented user
              authentication and backend services to fetch top songs, artists,
              and genres. Designed the user profile page, including its layout
              and functionality. Developed interactive carousels for showcasing
              top songs, artists, genres, and wraps.
            </p>
            <a
              href="https://cs2340project2-83cfa3290fbe.herokuapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-4 bg-gray-100 text-black rounded-lg hover:bg-gray-200 text-center mt-auto w-32"
            >
              View Website
            </a>
          </div>

          <div className="bg-red-100 p-6 rounded-lg shadow-md flex flex-col">
            <h3 className="text-2xl font-semibold text-black mb-4">
              GTKCS Club Website
            </h3>
            <p className="text-gray-700 mb-6" style={{ minHeight: "100px" }}>
              Designed and developed the first official website for the Georgia
              Tech Korean Computer Scientist (GTKCS) club with a group of ten
              developers
            </p>
            <p className="text-black font-semibold mb-2">What I Did:</p>
            <p className="text-gray-700 mb-6" style={{ minHeight: "100px" }}>
              Served as the software architect, collaborating closely with club
              executives to define the website’s content and requirements. Built
              the backend using{" "}
              <strong className="text-black underline">
                Django REST Framework
              </strong>
              , developed the frontend with{" "}
              <strong className="text-black underline">React JS</strong>, and
              created the initial prototype in{" "}
              <strong className="text-black underline">Figma</strong>. Ensured
              the final product aligned with the club’s vision and needs through
              iterative feedback and teamwork.
            </p>

            <a
              href="https://gtkcs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-4 bg-gray-100 text-black rounded-lg hover:bg-gray-200 text-center mt-auto w-32"
            >
              View Website
            </a>
          </div>

          <div className="bg-red-100 p-6 rounded-lg shadow-md flex flex-col">
            <h3 className="text-2xl font-semibold text-black mb-4">
              Georgia Tech Web Developer
            </h3>
            <p className="text-gray-700 mb-6" style={{ minHeight: "100px" }}>
              Since September 2024, served as a web developer for Georgia Tech
              Academic and Research Computing Services. Collaborated closely
              with clients to identify their needs and preferences,
              incorporating feedback into the redesign and migration of multiple
              Georgia Tech websites. Developed websites using{" "}
              <strong className="text-black underline">Drupal</strong> and{" "}
              <strong className="text-black underline">WordPress</strong> to
              enhance the digitalization of on-campus activities, labs, and
              student organizations. Streamlined the web development team’s
              workflow by effectively dividing tasks and prioritizing client
              requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16" id="ml">
        <h2 className="text-4xl font-bold text-purple-600 mb-6">
          Machine Learning
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Harnessing the power of data to build intelligent models and drive
          innovative solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-purple-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Anomaly Detection
            </h3>
            <p className="text-gray-700 mb-4" style={{ minHeight: "300px" }}>
              Configured LabVIEW for real-time audio acquisition and data
              logging, conducting tests on Al 6061, Al 7075, and Steel 1018 to
              capture baseline acoustic signatures. Performed experiments with
              varying parameters such as speed, feed rates, and blade quality,
              ensuring experimental consistency, safety protocols, and
              controlled environmental conditions. Converted sound waves into
              spectrograms and FFT results for analysis using{" "}
              <strong className="text-black underline">
                anomaly detection machine learning models
              </strong>
              . Successfully identified acoustic deviations caused by speed and
              alignment anomalies.
            </p>
            <a
              href="https://drive.google.com/file/d/1ieVeowX03GeVqx0S6eYB8pD8wDj18BoY/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-4 bg-gray-100 text-black rounded-lg hover:bg-gray-200 text-center mt-auto w-32"
            >
              View Paper
            </a>
          </div>

          <div className="bg-purple-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Credit Card Default Data
            </h3>
            <p className="text-gray-700 mb-4" style={{ minHeight: "300px" }}>
              Collaborated with a team of five developers to build machine
              learning models predicting creditworthiness using the UCI Default
              of Credit Card Clients dataset. Preprocessed data by addressing
              missing values, handling outliers, and resolving class imbalance
              with SMOTE, resulting in improved model accuracy. Implemented{" "}
              <strong className="text-black underline">
                logistic regression
              </strong>
              ,{" "}
              <strong className="text-black underline">
                gradient boosting
              </strong>
              , and{" "}
              <strong className="text-black underline">random forest</strong>{" "}
              algorithms, leveraging their ability to manage imbalanced data and
              capture non-linear relationships effectively.
            </p>
            <a
              href="https://mahibahsaleh03.github.io/machine-learning-project/"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-4 bg-gray-100 text-black rounded-lg hover:bg-gray-200 text-center mt-auto w-32"
            >
              View Paper
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
