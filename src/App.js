import React, { useContext, useRef } from "react";
import ThemeContext from "./ThemeContext";
import myData from "./MyBiodata";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./index.css";

function App() {
  const { dark, setDark } = useContext(ThemeContext);
  const pdfRef = useRef();

  const downloadPDF = async () => {
  if (!pdfRef.current) return;

  // temporarily remove blur & transparency for perfect capture
  const card = pdfRef.current;
  const prevStyle = card.style.backdropFilter;
  const prevBg = card.style.background;

  card.style.backdropFilter = "none";
  card.style.background = dark ? "#111" : "#fff";   // solid background for clean PDF

  const canvas = await html2canvas(card, {
    scale: 2,
    backgroundColor: null,
    useCORS: true,            // Fix image issues
    logging: false
  });

  // restore original style
  card.style.backdropFilter = prevStyle;
  card.style.background = prevBg;

  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF("p", "mm", "a4");
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const imgHeight = (canvas.height * pdfWidth) / canvas.width;

  pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, imgHeight);
  pdf.save("MyBiodata.pdf");
};


  return (
    <div className={dark ? "main-bg dark" : "main-bg"}>


      <div className="container fade">
        <h1 className="title">Ajinkya Bhutkar's Profile</h1>

        <div className="card preview fade" ref={pdfRef}>
          {/* Photo */}
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

            <p><strong>डाएट:</strong> {myData.diet}</p>

            <hr className="divider" />

            <p><strong>आईचे नाव:</strong> {myData.motherName}</p>
            <p><strong>आईची नोकरी:</strong> {myData.motherJob}</p>
            <p><strong>बहीण:</strong> {myData.sister}</p>
            <p><strong>मामा:</strong> {myData.mama}</p>
            <p><strong>नातेवाईक:</strong> {myData.relatives}</p>

            <hr className="divider" />

          </div>
        </div>


      </div>
    </div>
  );
}

export default App;
