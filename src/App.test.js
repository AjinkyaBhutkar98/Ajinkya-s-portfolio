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
    const element = pdfRef.current;
    const canvas = await html2canvas(element);
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
          <h2 className="preview-title">✨ Biodata ✨</h2>

          <div className="preview-block">
            <p><strong>नाव:</strong> {myData.name}</p>
            <p><strong>जन्मतारीख:</strong> {myData.birthdate}</p>
            <p><strong>उंची:</strong> {myData.height}</p>
            <p><strong>शिक्षण:</strong> {myData.education}</p>
            <p><strong>नोकरी:</strong> {myData.job}</p>
            <p><strong>छंद:</strong> {myData.hobbies}</p>
            <p><strong>पत्ता:</strong> {myData.address}</p>
            <p><strong>कौटुंबिक माहिती:</strong> {myData.family}</p>
            <p><strong>संपर्क:</strong> {myData.contact}</p>
          </div>
        </div>

        <button className="btn" onClick={downloadPDF}>PDF डाउनलोड</button>
      </div>
    </div>
  );
}

export default App;
