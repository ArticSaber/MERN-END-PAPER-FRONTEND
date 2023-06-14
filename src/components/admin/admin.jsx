import { useState } from "react";
import Navbar from "../navbar/navbar";
import "./admin.css";

const AdminPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    salary: "",
    location: "",
    jobtype: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3500/api/v1/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Data submitted successfully");
        setFormData({
          title: "",
          description: "",
          salary: "",
          location: "",
          jobtype: "",
        });
      } else {
        console.log("Error submitting data:", response.statusText);
      }
    } catch (error) {
      console.log("Error submitting data:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Admin Backend Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
          <label htmlFor="salary">Salary:</label>
          <input
            type="text"
            id="salary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
          />
          <label htmlFor="jobtype">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
          <label htmlFor="location">Job Type</label>
          <input
            type="text"
            id="jobtype"
            name="jobtype"
            value={formData.jobtype}
            onChange={handleChange}
          />
          <div className="order">
            <button type="submit" className="button">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminPage;
