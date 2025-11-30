import React, { useState } from "react";

export default function BiodataForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    birthdate: "",
    height: "",
    education: "",
    job: "",
    hobbies: "",
    address: "",
    family: "",
    contact: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
      className="card fade"
    >
      <h2 className="section-title">माहिती भरा</h2>

      {[
        { label: "नाव", name: "name" },
        { label: "जन्मतारीख", name: "birthdate" },
        { label: "उंची", name: "height" },
        { label: "शिक्षण", name: "education" },
        { label: "नोकरी ", name: "job" },
        { label: "छंद", name: "hobbies" },
        { label: "संपर्क क्रमांक", name: "contact" },
      ].map((field) => (
        <div key={field.name}>
          <label>{field.label}</label>
          <input name={field.name} value={form[field.name]} onChange={handleChange} />
        </div>
      ))}

      <label>पत्ता:</label>
      <textarea name="address" value={form.address} onChange={handleChange} />

      <label>कौटुंबिक माहिती:</label>
      <textarea name="family" value={form.family} onChange={handleChange} />

      <button className="btn">बायोडाटा तयार करा</button>
    </form>
  );
}
