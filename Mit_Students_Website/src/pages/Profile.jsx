import React, { useState } from "react";
import "../style/Profile.css"; // Link to the plain CSS file

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [userDetails, setUserDetails] = useState({
    name: "Alex Johnson",
    title: "Biology Student",
    location: "San Francisco, CA",
    work: [
      { company: "MIT", position: "Student", address: "77 Massachusetts Ave, Cambridge, MA 02139-4307" },
      { company: "McDonald's", position: "Part-Time", address: "1234 Market St, San Francisco, CA 94103" },
    ],
    skills: ["Biology", "Chemistry", "Lab Techniques", "Cell Biology", "Genetics", "Environmental Science", "Botany", "Microbiology"],
    hobby: ["Gaming", "Treking", "Work-out", "Hang-out", "Bookworm", "Microbiology"],
    contact: { phone: "+1 123 456 7890", address: "1234 Market St, San Francisco, CA 94103", email: "alex.johnson@mit.edu", website: "www.alexjohnson.com" },
    basicInfo: { birthday: "April 10, 2000", gender: "Male" },
    achievements: [
      "Published a research paper on cellular division and its effects on cancer cells.",
      "Created a new method for extracting DNA from soil samples for environmental research."
    ],
    timeline: [
      { year: "2018", event: "Started studying at MIT" },
      { year: "2020", event: "Published first research paper on cellular division" },
      { year: "2021", event: "Started working part-time at McDonald's" },
      { year: "2022", event: "Completed a summer internship at a biological research lab" }
    ],
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (field, value) => {
    setUserDetails({
      ...userDetails,
      [field]: value
    });
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        {/* Left Column */}
        <div className="left-column">
          <img
            src="https://www.usnews.com/object/image/0000017f-2352-df1a-a3ff-b77bab9e0000/gettyimages-1369617365.jpg?update-time=1645565687144&size=responsive640"
            alt="Profile"
            className="profile-image"
          />
          <div className="user-info">
            <h1 className="user-name">
              {isEditing ? <input type="text" value={userDetails.name} onChange={(e) => handleChange('name', e.target.value)} /> : userDetails.name}
            </h1>
            <p className="user-title">
              {isEditing ? <input type="text" value={userDetails.title} onChange={(e) => handleChange('title', e.target.value)} /> : userDetails.title}
            </p>
            <p className="user-location">
              {isEditing ? <input type="text" value={userDetails.location} onChange={(e) => handleChange('location', e.target.value)} /> : userDetails.location}
            </p>
          </div>

          {/* Skills Section */}
          <div className="skills-section">
            <h2>Skills</h2>
            <ul className="skills-list">
              {userDetails.skills.map((skill, index) => (
                <li key={index}>
                  {isEditing ? (
                    <input
                      type="text"
                      value={skill}
                      onChange={(e) =>
                        handleChange(
                          'skills',
                          userDetails.skills.map((s, i) => (i === index ? e.target.value : s))
                        )
                      }
                    />
                  ) : (
                    skill
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Summary Section */}
          <div className="summary-section">
            <h2>About Me</h2>
            <p>
              As a biology student, my life revolves around learning and exploring the natural world. My studies at MIT have given me the opportunity to dive into various biological fields, from genetics to microbiology. I am passionate about conducting research and contributing to the scientific community. Outside of academics, I balance my time with a part-time job at McDonald's to support myself and gain work experience.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="right-column">
          <button className="edit-button" onClick={handleEditToggle}>
            {isEditing ? "Save" : "Edit"}
          </button>

          {/* Work Section */}
          <div className="work-section">
            <h2>Work</h2>
            {userDetails.work.map((job, index) => (
              <div key={index} className="work-item">
                <p>
                  {isEditing ? (
                    <input
                      type="text"
                      value={job.company}
                      onChange={(e) =>
                        handleChange('work', [...userDetails.work.slice(0, index), { ...job, company: e.target.value }, ...userDetails.work.slice(index + 1)])
                      }
                    />
                  ) : (
                    job.company
                  )}
                </p>
                <span>{job.position}</span>
                <p>
                  {isEditing ? (
                    <input
                      type="text"
                      value={job.address}
                      onChange={(e) =>
                        handleChange('work', [...userDetails.work.slice(0, index), { ...job, address: e.target.value }, ...userDetails.work.slice(index + 1)])
                      }
                    />
                  ) : (
                    job.address
                  )}
                </p>
              </div>
            ))}
          </div>

          {/* Hobby Section */}
          <div className="hobby-section">
            <h2>Hobbies</h2>
            <ul className="hobby-list">
              {userDetails.hobby.map((hobby, index) => (
                <li key={index}>
                  {isEditing ? (
                    <input
                      type="text"
                      value={hobby}
                      onChange={(e) =>
                        handleChange('hobby', userDetails.hobby.map((h, i) => (i === index ? e.target.value : h)))
                      }
                    />
                  ) : (
                    hobby
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;