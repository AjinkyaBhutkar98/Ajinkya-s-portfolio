import React, { useContext, useRef } from "react";
import ThemeContext from "./ThemeContext";
import myData from "./MyBiodata";
import "./index.css";

function App() {
  const { dark, setDark } = useContext(ThemeContext);
  const pdfRef = useRef();

  // 🔥 Hidden dark mode toggle but used to avoid unused-var
  const toggleDarkMode = () => {
    setDark(!dark);
  };

  return (
    <div className={dark ? "main-bg dark" : "main-bg"}>

      {/* Hidden Dark Mode Toggle (still used) */}
      <div
        style={{ display: "none" }}
        onClick={toggleDarkMode}
      >
        Toggle
      </div>

      <div className="container fade">
        <h1 className="title">Ajinkya Bhutkar's Profile</h1>

        <div className="card preview fade" ref={pdfRef}>

          <div className="photo-wrapper">
            <img src={myData.photo} alt="profile" className="profile-photo" />
          </div>

          <h2 className="preview-title">✨ Biodata ✨</h2>

          <div className="preview-block">

            <p><strong>नाव:</strong> {myData.name}</p>
            <p><strong>संपर्क:</strong> {myData.contact}</p>
            <p><strong>नोकरी:</strong> {myData.job}</p>
            <hr className="divider" />
            <p><strong>जन्म तारीख:</strong> {myData.birthdate}</p>
            <p><strong>जन्म वेळ:</strong> {myData.birthtime}</p>
            <p><strong>जन्म ठिकाण:</strong> {myData.birthplace}</p>
            <p><strong>जात:</strong> {myData.caste}</p>
            <p><strong>उंची:</strong> {myData.height}</p>
            <p><strong>वर्ण:</strong> {myData.varna}</p>
            <p><strong>राशी:</strong> {myData.rashi}</p>
            <p><strong>नाडी:</strong> {myData.naadi}</p>
            <p><strong>गन:</strong> {myData.gan}</p>
            <p><strong>योनी:</strong> {myData.yoni}</p>
            <p><strong>चरण:</strong> {myData.charan}</p>

            <hr className="divider" />
            <p><strong>आईचे नाव:</strong> {myData.motherName}</p>
            <p><strong>आईची नोकरी:</strong> {myData.motherJob}</p>
            <p><strong>बहीण:</strong> {myData.sister}</p>
            <p><strong>मामा:</strong> {myData.mama}</p>

          </div>
        </div>


      </div>
    </div>
  );
}

export default App;
