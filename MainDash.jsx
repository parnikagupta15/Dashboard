import React, { useRef } from "react";
import Cards from "../Cards/Cards";
import { UilUpload } from "@iconscout/react-unicons";
import { UilShieldCheck, UilCheckCircle, UilExclamationTriangle, UilChartLine } from "@iconscout/react-unicons";
import "./MainDash.css";

const statsData = [
  {
    icon: <UilShieldCheck size="40" color="#007bff" />,
    title: "Total Scans",
    value: "1,247",
    bgColor: "#E8F0FF",
  },
  {
    icon: <UilCheckCircle size="40" color="#28a745" />,
    title: "Safe Content",
    value: "1,089",
    bgColor: "#E9F9EE",
  },
  {
    icon: <UilExclamationTriangle size="40" color="#dc3545" />,
    title: "Threats Blocked",
    value: "158",
    bgColor: "#FDEDED",
  },
  {
    icon: <UilChartLine size="40" color="#6f42c1" />,
    title: "This Week",
    value: "42",
    bgColor: "#F3E8FF",
  },
];


const MainDash = () => {
    const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click(); // opens the file picker
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      alert(
        `${files.length} file(s) selected:\n` +
          Array.from(files)
            .map((f) => f.name)
            .join("\n")
      );
    }
  };
  return (
    <div className="MainDash">
         <h1>Dashboard</h1>
         <div className="main-dash">
      <div className="stats-container">
        {statsData.map((item, index) => (
          <div
            key={index}
            className="stat-card"
            style={{ backgroundColor: item.bgColor }}
          >
            <div className="icon">{item.icon}</div>
            <div className="details">
              <h3>{item.title}</h3>
              <h1>{item.value}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
        <div className="Dashboard">
            <h2>Welcome back!!</h2>
            <p>Stay protected with real time content verification and threat detection</p>
            <button className="analyze-btn" onClick={handleButtonClick}>
          <UilUpload size="20" />
            Analyze New Content
        </button>
        <input
          type="file"
          ref={fileInputRef}
          multiple
          accept="image/*,video/*,.pdf,.txt,.docx"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
            </div>
             <Cards />
    </div>
  );
};

export default MainDash;