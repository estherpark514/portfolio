import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import HumanaLogo from "../assets/humana-logo.png";
import TargetLogo from "../assets/Target-Logo.png";
import Typewriter from "typewriter-effect";

const Home = () => {
  const [activeTab, setActiveTab] = useState("English");

  const renderContent = () => {
    switch (activeTab) {
      case "English":
        return (
          <p className="text-lg">
            I revitalized local small businesses in Egypt during the pandemic by
            designing posters to attract Arabic, English, and Korean speakers.
            In translation, I adapted ten popular Korean folktales into Arabic
            and English, donating the books to an international school in Egypt
            and Arabic-speaking communities in Korea. To ensure accuracy, I
            collaborated with Arabic-speaking residents in Korea. Additionally,
            I translated a Korean phrasebook into Arabic to assist a Libyan
            family transitioning to life in Korea, supporting them with daily
            tasks and serving as an Arabic-Korean interpreter.
          </p>
        );
      case "Korean":
        return (
          <p className="text-lg text-sm leading-loose">
            저는 아랍어, 영어, 한국어 사용자를 끌어모으기 위해 포스터를
            디자인하여 팬데믹 기간 동안 이집트의 지역 시장을 활성화했습니다.
            또한, 유명한 한국 전래동화 10편을 아랍어와 영어로 번역하여 이집트의
            국제 학교와 한국의 아랍어 커뮤니티에 책을 기부했습니다. 정확성을
            보장하기 위해 한국의 아랍어 사용자와 협업했습니다. 마지막으로, 한국
            생활에 적응하는 리비아 가족을 돕기 위해 한국어 기초회화 책을
            아랍어로 번역하여 일상 생활을 도와주고 리비아 가족과 한국인들
            사이에서 아랍어와 한국어를 통역해주었습니다
          </p>
        );
      case "Arabic":
        return (
          <p className="text-lg text-right">
            لقد قمت بإحياء الشركات الصغيرة المحلية في مصر أثناء الجائحة من خلال
            تصميم ملصقات لجذب المتحدثين باللغة العربية والإنجليزية والكورية. وفي
            الترجمة، قمت بتكييف عشر حكايات شعبية كورية إلى اللغة العربية،
            والتبرع بالكتب لمدرسة دولية في مصر والمجتمعات الناطقة بالعربية في
            كوريا. ولضمان الدقة، تعاونت مع المقيمين الناطقين بالعربية في كوريا.
            بالإضافة إلى ذلك، قمت بترجمة كتاب تفسير العبارات الكورية إلى اللغة
            العربية لمساعدة أسرة ليبية في الانتقال إلى الحياة في كوريا، ودعمهم
            في المهام اليومية والعمل كمترجم من العربية إلى الكورية
          </p>
        );
      default:
        return null;
    }
  };
  const navigate = useNavigate();
  return (
    <div className="py-6 px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="md:w-3/4">
          <div className="text-3xl mb-8 leading-relaxed">
            <Typewriter
              options={{
                delay: 40,
                cursor: "|",
                autoStart: true,
                loop: false,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hi, I am Esther.")
                  .pauseFor(1000)
                  .typeString(
                    "<br/>A third-year undergraduate student at <strong>Georgia Tech</strong>, specializing in <strong>Cybersecurity</strong> and <strong>Artificial Intelligence</strong>."
                  )
                  .pauseFor(4000)
                  .start();
              }}
            />
          </div>
        </div>

        <div className="md:w-5/4">
          <p className="text-lg mb-4">
            <strong>Personally,</strong> I have lived in three countries: the
            United States, South Korea, and Egypt. My journey has taken me
            through five major cities: Detroit, MI; Seoul, Korea; Cairo, Egypt;
            Songdo, Korea; and Atlanta, GA. Each place has shaped my global
            perspective and enriched my understanding of diverse cultures.
          </p>
          <p className="text-lg mb-8">
            <strong>Professionally,</strong> my passion for cybersecurity stems
            from my unique experiences across different countries and my
            exposure to global events. These experiences have shown me the
            critical importance of security in safeguarding nations,
            corporations, and individuals. I take immense pride in protecting
            against external threats and continuously strive to expand my skill
            set. My aspiration is to{" "}
            <span className="font-bold">
              create impactful, safe solutions that contribute to a more secure
              world
            </span>
            .
          </p>
          <a
            href="https://drive.google.com/file/d/1zdaB-2gAOg1_JJ3H0AXgD1JblsBpacAV/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-4 bg-gray-100 text-black text-xl rounded-lg hover:bg-gray-200 text-center mt-auto w-32"
          >
            Resume
          </a>
        </div>
      </div>

      <div className="flex justify-between items-center text-3xl italic text-left font-bold mt-20 mb-5">
        <span>"Securing, Building, and Innovating the Digital World"</span>
      </div>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-green-600 mb-6">
          1. Internship
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20">
          <div className="bg-transparent border border-green-500 p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold text-black">
                Smart Lock Monitoring & Security Analytics
              </h3>
              <img
                src={TargetLogo}
                alt="Target Logo"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="italic mb-1">Target Corporation</p>
            <p className="mb-8">Jun 2025 - Aug 2025</p>

            <p className="text-gray-700 mb-4" style={{ minHeight: "300px" }}>
              Developed backend services and observability dashboards for
              Target’s enterprise smart lock initiative, supporting physical
              access control and infrastructure security monitoring across
              retail locations.
              <br />
              <br />
              <strong>Key Contributions:</strong>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>
                  Built secure, production-grade <strong>RESTful APIs</strong>{" "}
                  in <strong>Kotlin</strong> to collect and transmit real-time
                  smart lock activity, contributing to Target's broader{" "}
                  <strong>physical cybersecurity posture</strong>.
                </li>
                <li>
                  Designed and configured{" "}
                  <strong>PostgreSQL-backed data pipelines</strong> and{" "}
                  <strong>Grafana dashboards</strong> to monitor access trends,
                  lock health, and suspicious usage patterns.
                </li>
                <li>
                  Conducted on-site assessments to understand operational risks
                  and curated a scalable data model to support the initiative’s{" "}
                  <strong>first centralized monitoring system</strong> for
                  physical security analytics.
                </li>
              </ul>
            </p>
          </div>

          <div className="bg-transparent border border-green-500 p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold text-black">
                Vendor Cyber Risk Management Dashboard
              </h3>
              <img
                src={HumanaLogo}
                alt="Humana Logo"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="italic mb-1">Humana, Inc.</p>
            <p className="mb-8">May 2024 - Dec 2024</p>
            <p className="text-gray-700 mb-4" style={{ minHeight: "350px" }}>
              Designed an enterprise dashboard to help senior leadership assess
              third-party risk and make informed vendor decisions by visualizing
              security posture and organizational alignment.
              <br />
              <br />
              <strong>Key Contributions:</strong>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>
                  Built a full-stack dashboard interface using{" "}
                  <strong>React.js</strong>, styled with{" "}
                  <strong>Tailwind CSS</strong>, and visualized risk levels
                  using <strong>Recharts</strong> for over{" "}
                  <strong>8,000 vendors</strong>.
                </li>
                <li>
                  Translated complex{" "}
                  <strong>Governance, Risk, and Compliance (GRC)</strong>{" "}
                  frameworks into actionable and digestible data visualizations
                  for leadership decision-making.
                </li>
                <li>
                  Collaborated cross-functionally with{" "}
                  <strong>Information Security</strong>,{" "}
                  <strong>Procurement</strong>, and{" "}
                  <strong>Business Leadership</strong> to gather requirements
                  and implement dynamic filtering by{" "}
                  <strong>business segment</strong> and{" "}
                  <strong>relationship manager</strong>.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-red-600 mb-6">
          2. Work at Georgia Tech
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20">
          <div className="bg-transparent border border-red-500 p-6 rounded-lg shadow-md">
            <div className="flex flex-col items-start mb-1">
              <h3
                className="text-2xl font-semibold text-black"
                style={{ minHeight: "70px" }}
              >
                Undergraduate Teaching Assistant <br />
                CS2200: Computer Systems and Network <br />
              </h3>
              {/* <img
                src={CoCLogo}
                alt="CoC Logo"
                className="h-16 w-auto mb-2 object-contain"
              /> */}
            </div>

            <p className="italic mb-1">
              Georgia Institute of Technology College of Computing
            </p>
            <p className="mb-4">Aug 2025 - Present</p>

            <p className="text-gray-700 mb-4">
              Supported instruction for a 150+ student foundational systems
              course covering:
              <strong> Multithreading</strong>, <strong>Virtual Memory</strong>,{" "}
              <strong>OS Scheduling</strong>,{" "}
              <strong>Instruction Set Architecture</strong>,{" "}
              <strong>Pipelining</strong>, <strong>Caching</strong>, and the{" "}
              <strong>OSI Model</strong>.
            </p>
            <p className="text-black font-semibold mb-2">Key Contributions:</p>
            <ul className="text-gray-700 list-disc list-inside space-y-2">
              <li>
                Led weekly lab sessions and provided 1:1 technical support on
                low-level projects involving <strong>Assembly</strong> and{" "}
                <strong>C programming</strong>.
              </li>
              <li>
                Helped students debug race conditions, segmentation faults, and
                pointer errors using tools like <strong>GDB</strong>.
              </li>
              <li>
                Collaborated with course faculty to refine instructional
                materials and implemented new office hour strategies that
                improved student engagement and support outcomes.
              </li>
            </ul>
          </div>

          <div className="bg-transparent border border-red-500 p-6 rounded-lg shadow-md">
            <div className="flex flex-col items-start mb-1">
              <h3
                className="text-2xl font-semibold text-black flex items-center"
                style={{ minHeight: "70px" }}
              >
                Cybersecurity-Aware Website Developer
              </h3>
              {/* <img
                src={CoCLogo}
                alt="CoC Logo"
                className="h-16 w-auto mb-2 object-contain"
              /> */}
            </div>
            <p className="italic mb-1">
              Georgia Institute of Technology College of Science
            </p>
            <p className="mb-4">Aug 2024 - Present</p>

            <p className="text-gray-700 mb-4">
              Redesigned and maintained department websites with a focus on
              security-conscious design, improving digital accessibility while
              ensuring proper handling of sensitive research and institutional
              data.
            </p>

            <p className="text-black font-semibold mb-2">Key Contributions:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Collaborated with faculty and administrators to implement
                access-aware content structures and reduce visibility of
                outdated or sensitive information.
              </li>
              <li>
                Built and maintained responsive websites using Drupal and
                WordPress, following university security guidelines and applying
                secure content management practices.
              </li>
              <li>
                Streamlined development using <strong>GitHub</strong> for
                version control, ensuring proper audit trails, task ownership,
                and minimal exposure to misconfigured content.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-purple-600">3. Research</h2>

        <div className="p-6 mb-6">
          <p className="text-gray-800 text-lg leading-relaxed">
            Honored with the{" "}
            <strong className="text-xl font-semibold underline">
              Presidential Undergraduate Research Award
            </strong>{" "}
            for my contributions to{" "}
            <strong className="text-xl font-semibold underline">
              machine learning research
            </strong>{" "}
            at{" "}
            <strong className="text-xl font-semibold underline">
              Georgia Tech Makerspace
            </strong>
            . <br />
            This award supports my upcoming initiative to develop an AI model
            that estimates energy consumption during fabrication tasks,
            empowering more efficient and sustainable design decisions in
            makerspace environments.
            <br />
            <br />
            Scroll below to explore the two research projects that contributed
            to this recognition, followed by additional independent research
            efforts!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 mb-6">
          <div className="bg-transparent border border-purple-500 p-6 rounded-lg shadow-md">
            <h3
              className="flex items-center text-2xl font-semibold text-gray-800 mb-4"
              style={{ minHeight: "70px" }}
            >
              Vision-Based Safety Compliance System
            </h3>
            <p className="text-gray-700 mb-4" style={{ minHeight: "350px" }}>
              Developed a real-time safety monitoring system using Raspberry Pi
              and YOLOv8 object detection to enforce PPE compliance in
              makerspace environments.
              <br />
              <br />
              <strong>Key Contributions:</strong>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>
                  Collaborated in a team of six to build an embedded computer
                  vision system powered by a{" "}
                  <strong>trained YOLOv8 model</strong> on a{" "}
                  <strong>Raspberry Pi</strong>, enabling real-time detection of
                  safety violations.
                </li>
                <li>
                  Collected, annotated, and preprocessed over{" "}
                  <strong>10,000 images</strong> to train the model on
                  identifying improper sleeve length, missing safety goggles,
                  and dangling accessories.
                </li>
                <li>
                  Achieved <strong>92.74% accuracy</strong> in clothing
                  detection and <strong>90.05%</strong> in PPE detection,
                  triggering live LED alerts to improve lab safety at Georgia
                  Tech’s Invention Studio.
                </li>
              </ul>
            </p>
            <a
              href="https://drive.google.com/file/d/1O-5hRaGrEAwPMF_ZXavwam6P8lIhPHEf/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-4 bg-gray-100 text-black rounded-lg hover:bg-gray-200 text-center mt-auto w-32"
            >
              View Paper
            </a>
          </div>

          <div className="bg-transparent border border-purple-500 p-6 rounded-lg shadow-md">
            <h3
              className="text-2xl font-semibold text-gray-800 mb-4"
              style={{ minHeight: "70px" }}
            >
              Acoustic Analysis for Optimizing Bandsaw Cutting Parameters in
              Manufacturing Environments
            </h3>
            <p className="text-gray-700 mb-4" style={{ minHeight: "350px" }}>
              Conducted acoustic anomaly detection research using real-time
              audio signal acquisition and machine learning to identify
              deviations in metal cutting processes.
              <br />
              <br />
              <strong>Key Contributions:</strong>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>
                  Configured <strong>LabVIEW</strong> to acquire and log
                  real-time audio data during cutting experiments on Al 6061, Al
                  7075, and Steel 1018 under varying speeds, feed rates, and
                  blade conditions.
                </li>
                <li>
                  Preprocessed sound waves into <strong>spectrograms</strong>{" "}
                  and <strong>FFT outputs</strong> for feature extraction,
                  ensuring controlled environments and reproducible tests.
                </li>
                <li>
                  Trained{" "}
                  <strong>anomaly detection machine learning models</strong> to
                  detect acoustic deviations caused by speed misconfigurations
                  and blade misalignments, improving safety diagnostics in
                  manufacturing.
                </li>
              </ul>
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20">
          <div className="bg-transparent border border-purple-500 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Password Behavior Research
            </h3>
            <p className="text-gray-700 mb-4" style={{ minHeight: "350px" }}>
              Designed and led a research project analyzing how password
              blacklists affect user authentication behavior, with a focus on
              security compliance and behavioral adaptation.
              <br />
              <br />
              <strong>Key Contributions:</strong>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>
                  Collaborated with a research team of a professor, PhD, and
                  master’s student to design large-scale user experiments
                  evaluating password selection strategies.
                </li>
                <li>
                  Developed a secure backend using the{" "}
                  <strong>Django REST Framework</strong> to collect and handle
                  password data from over <strong>1,000+ participants</strong>.
                </li>
                <li>
                  Built a web-based platform to track real-time user input and
                  analyze how individuals adapt to blacklist-based password
                  restrictions, producing insights to inform next-gen
                  authentication policies.
                </li>
              </ul>
            </p>

            {/* <a
              href="https://drive.google.com/file/d/1ieVeowX03GeVqx0S6eYB8pD8wDj18BoY/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-4 bg-gray-100 text-black rounded-lg hover:bg-gray-200 text-center mt-auto w-32"
            >
              View Paper
            </a> */}
          </div>

          <div className="bg-transparent border border-purple-500 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Credit Card Default Data Prediction
            </h3>
            <p className="text-gray-700 mb-4" style={{ minHeight: "350px" }}>
              Built supervised machine learning models to predict credit risk
              using the UCI Default of Credit Card Clients dataset, with a focus
              on class imbalance, feature importance, and model performance on
              financial data.
              <br />
              <br />
              <strong>Key Contributions:</strong>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>
                  Collaborated with a team of five to design a full ML pipeline
                  from preprocessing to model evaluation, addressing missing
                  data, outliers, and class imbalance using{" "}
                  <strong>SMOTE</strong>.
                </li>
                <li>
                  Trained and fine-tuned multiple classifiers including{" "}
                  <strong>logistic regression</strong>,{" "}
                  <strong>random forest</strong>, and{" "}
                  <strong className="text-black underline">
                    gradient boosting
                  </strong>
                  , optimizing for recall and interpretability.
                </li>
                <li>
                  Analyzed model outputs using confusion matrices and feature
                  importance scores, delivering insights into high-risk
                  behavioral patterns and credit default factors.
                </li>
              </ul>
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

      <div className="flex justify-between items-center text-3xl italic text-left font-bold mt-20 mb-5">
        <span>"Driven by Heart, Proven by Action"</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-20">
        <div className="bg-yellow-100 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-bold mb-4">Translation</h2>
          <div className="flex gap-4 mb-4">
            <button
              className={`py-2 px-4 rounded-lg ${
                activeTab === "English" ? "bg-gray-300" : "bg-gray-100"
              }`}
              onClick={() => setActiveTab("English")}
            >
              English
            </button>
            <button
              className={`py-2 px-4 rounded-lg ${
                activeTab === "Korean" ? "bg-gray-300" : "bg-gray-100"
              }`}
              onClick={() => setActiveTab("Korean")}
            >
              Korean
            </button>
            <button
              className={`py-2 px-4 rounded-lg ${
                activeTab === "Arabic" ? "bg-gray-300" : "bg-gray-100"
              }`}
              onClick={() => setActiveTab("Arabic")}
            >
              Arabic
            </button>
          </div>
          {renderContent()}
        </div>

        <div className="grid grid-rows-2 gap-4">
          <div className="bg-blue-100 rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold mb-4">Tutoring</h2>
            <p className="text-lg italic">
              "I had to leave school because of financial struggles, but
              learning C++ and algorithms reignited my passion. Computer science
              has given me hope and a dream—I now aspire to become a computer
              scientist" - Seyeon Lim (Grade 10)
            </p>
          </div>

          <div className="bg-pink-100 rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold mb-4">Service Projects</h2>
            <p className="text-lg">
              From three years with African Hope Donation to two years producing
              Braille books, crowdfunding for Ukrainian refugees, and supporting
              animal care, I’ve actively contributed to diverse service
              projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
