import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:w-3/4">
          <h1 className="text-3xl font-bold mb-4">Hi, I am Esther.</h1>
          <p className="text-3xl font-bold">
            A second-year undergraduate student at Georgia Tech, specializing in
            Cybersecurity and Intelligence.
          </p>
        </div>

        <div className="md:w-5/4">
          <p className="text-lg mb-4">
            <strong>Personally,</strong> I have lived in three countries: the
            United States, South Korea, and Egypt. My journey has taken me
            through six major cities: Detroit, MI; Seoul, Korea; Cairo, Egypt;
            Songdo, Korea; Atlanta, GA; and Louisville, KY. Each place has
            shaped my global perspective and enriched my understanding of
            diverse cultures.
          </p>
          <p className="text-lg">
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
        </div>
      </div>
      <div className="flex justify-between items-center text-2xl text-left font-bold mt-8 mb-4">
        <span>"Securing, Building, and Innovating the Digital World"</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-green-100 rounded-lg p-6 shadow-md flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-4">Cybersecurity</h2>
            <p className="text-lg">
              Relevant skill sets:
              <ul className="list-disc list-inside mt-2">
                <li>Risk Management</li>
                <li>Governance, Risk, and Compliance (GRC)</li>
                <li>Password Behavior Analysis</li>
                <li>Network Security</li>
              </ul>
            </p>
          </div>
          {/* <Link
            to="/projects#cybersecurity"
            className="py-2 px-4 bg-gray-100 rounded-lg hover:bg-gray-200 flex justify-center items-center mt-4 w-28"
          >
            Learn More
          </Link> */}
        </div>

        <div className="bg-red-100 rounded-lg p-6 shadow-md flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-4">Web Development</h2>
            <p className="text-lg">
              Relevant skill sets:
              <ul className="list-disc list-inside mt-2">
                <li>Django REST framework</li>
                <li>MongoDB</li>
                <li>Express</li>
                <li>React</li>
                <li>Node.js</li>
              </ul>
            </p>
          </div>
          {/* <Link
            to="/projects#web-development"
            className="py-2 px-4 bg-gray-100 rounded-lg hover:bg-gray-200 flex justify-center items-center mt-4 w-28"
          >
            Learn More
          </Link> */}
        </div>

        <div className="bg-purple-100 rounded-lg p-6 shadow-md flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-4">Machine Learning</h2>
            <p className="text-lg">
              Relevant skill sets:
              <ul className="list-disc list-inside mt-2">
                <li>Anomaly Detection</li>
                <li>Supervised Learning</li>
              </ul>
            </p>
          </div>
          {/* <Link
            to="/projects#ml"
            className="py-2 px-4 bg-gray-100 rounded-lg hover:bg-gray-200 flex justify-center items-center mt-4 w-28"
          >
            Learn More
          </Link> */}
        </div>
      </div>
      <div className="flex justify-end mt-8">
        <button
          onClick={() => navigate("/projects")}
          className="flex items-center gap-2 text-lg font-medium text-gray-600 hover:text-gray-800 transition-all duration-300 transform hover:translate-x-2"
        >
          >> View More
        </button>
      </div>
      <div className="text-2xl text-left font-bold mt-8 mb-4">
        "Driven by Heart, Proven by Action"
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-8">
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
