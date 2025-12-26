import React from "react";

export default function BiodataPreview({ data, goBack }) {
  const printPage = () => window.print();

  return (
    <div className="card preview fade">
      <h2 className="preview-title">✨ Sujeet Shinde's Profile ✨</h2>

      <div className="preview-block">
        <p><strong>नाव:</strong> {data.name}</p>
        <p><strong>जन्मतारीख:</strong> {data.birthdate}</p>
        <p><strong>उंची:</strong> {data.height}</p>
        <p><strong>शिक्षण:</strong> {data.education}</p>
        <p><strong>नोकरी:</strong> {data.job}</p>
        <p><strong>छंद:</strong> {data.hobbies}</p>
        <p><strong>पत्ता:</strong> {data.address}</p>
        <p><strong>कौटुंबिक माहिती:</strong> {data.family}</p>
        <p><strong>संपर्क:</strong> {data.contact}</p>
      </div>

      <div className="btn-row">
        <button onClick={printPage} className="btn">प्रिंट / PDF</button>
        <button onClick={goBack} className="btn btn-secondary">मागे जा</button>
      </div>
    </div>
  );
}
