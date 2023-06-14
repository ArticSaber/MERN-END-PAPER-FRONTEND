import { useEffect, useState } from "react";
import Navbar from "./components/navbar/navbar";

import "./App.css";

const JobDetails = () => {
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await fetch("http://localhost:3500/api/v1/jobdesc");
        const data = await response.json();
        setJobData(data);
      } catch (error) {
        console.log("Error fetching job details:", error);
      }
    };

    fetchJobDetails();
  }, []);

  return (
    <div className="app">
      <Navbar />
      <h1>Job Details</h1>
      <div className="mapping">
        {jobData && jobData.length > 0 ? (
          jobData.map((job) => (
            <div className="card" key={job._id}>
              <div className="container">
                <h2>{job.title}</h2>
                <p>{job.description}</p>
                <p>Salary: {job.salary}</p>
                <p>Location: {job.location}</p>
                <button className="button">Apply</button>
              </div>
            </div>
          ))
        ) : (
          <p>No job details available</p>
        )}
      </div>
    </div>
  );
};

export default JobDetails;
