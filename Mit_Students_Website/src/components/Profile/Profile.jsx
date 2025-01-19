import React, { useState } from "react";

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
    <div className="bg-gradient-to-r from-blue-200 to-indigo-300 min-h-screen flex items-center justify-center">
      <div className="mt-10 mb-10 flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      {/* Left Column */}
      <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
        <img
          src="https://www.usnews.com/object/image/0000017f-2352-df1a-a3ff-b77bab9e0000/gettyimages-1369617365.jpg?update-time=1645565687144&size=responsive640"
          alt="Profile"
          className="rounded-full w-32 h-32 mb-4 object-cover"
        />
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold">{isEditing ? <input type="text" value={userDetails.name} onChange={(e) => handleChange('name', e.target.value)} className="border-b-2" /> : userDetails.name}</h1>
          <p className="text-sm text-gray-600">{isEditing ? <input type="text" value={userDetails.title} onChange={(e) => handleChange('title', e.target.value)} className="border-b-2" /> : userDetails.title}</p>
          <p className="text-gray-500 text-sm">{isEditing ? <input type="text" value={userDetails.location} onChange={(e) => handleChange('location', e.target.value)} className="border-b-2" /> : userDetails.location}</p>
        </div>

        {/* Skills Section */}
        <div className="mt-6 w-full">
          <h2 className="text-lg font-semibold mb-2">Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            {userDetails.skills.map((skill, index) => (
              <div key={index} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 m-1 rounded">
                {isEditing ? <input type="text" value={skill} onChange={(e) => handleChange('skills', userDetails.skills.map((s, i) => i === index ? e.target.value : s))} className="border-b-2" /> : skill}
              </div>
            ))}
          </div>
        </div>

        {/* Summary Section */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">About Me</h2>
          <p className="text-sm text-gray-700">
            As a biology student, my life revolves around learning and exploring the natural world. My studies at MIT have given me the opportunity to dive into various biological fields, from genetics to microbiology. I am passionate about conducting research and contributing to the scientific community. Outside of academics, I balance my time with a part-time job at McDonald's to support myself and gain work experience.
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full md:w-2/3 mt-6 md:mt-0 md:pl-8">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-full mb-6"
          onClick={handleEditToggle}
        >
          {isEditing ? "Save" : "Edit"}
        </button>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Work</h2>
          {userDetails.work.map((job, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-center">
                <p className="text-sm">{isEditing ? <input type="text" value={job.company} onChange={(e) => handleChange('work', [...userDetails.work.slice(0, index), { ...job, company: e.target.value }, ...userDetails.work.slice(index + 1)])} className="border-b-2" /> : job.company}</p>
                <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">{job.position}</span>
              </div>
              <p className="text-xs text-gray-500">{isEditing ? <input type="text" value={job.address} onChange={(e) => handleChange('work', [...userDetails.work.slice(0, index), { ...job, address: e.target.value }, ...userDetails.work.slice(index + 1)])} className="border-b-2" /> : job.address}</p>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Hobby</h2>
          <div className="flex flex-wrap">
            {userDetails.hobby.map((skill, index) => (
              <span key={index} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 m-1 rounded">
                {isEditing ? <input type="text" value={skill} onChange={(e) => handleChange('skills', userDetails.skills.map((s, i) => i === index ? e.target.value : s))} className="border-b-2" /> : skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Personal Details</h2>
          <nav className="flex justify-between mb-4">
            <button
              onClick={() => setActiveSection("about")}
              className={`text-blue-600 ${activeSection === "about" ? "underline" : ""}`}
            >
              About
            </button>
            <button
              onClick={() => setActiveSection("achievements")}
              className={`text-blue-600 ${activeSection === "achievements" ? "underline" : ""}`}
            >
              Achievements
            </button>
            <button
              onClick={() => setActiveSection("timeline")}
              className={`text-blue-600 ${activeSection === "timeline" ? "underline" : ""}`}
            >
              Timeline History
            </button>
          </nav>

          {activeSection === "about" && (
            <div className="text-sm">
              <p>Phone: {userDetails.contact.phone}</p>
              <p>Address: {userDetails.contact.address}</p>
              <p>Email: {userDetails.contact.email}</p>
              <p>Website: {userDetails.contact.website}</p>
              <p>Birthday: {userDetails.basicInfo.birthday}</p>
              <p>Gender: {userDetails.basicInfo.gender}</p>
            </div>
          )}

          {activeSection === "achievements" && (
            <div>
              <h2 className="text-lg font-semibold mb-2">Achievements</h2>
              <ul className="list-disc pl-5">
                {userDetails.achievements.map((achievement, index) => (
                  <li key={index} className="text-sm text-gray-700">{achievement}</li>
                ))}
              </ul>
            </div>
          )}

          {activeSection === "timeline" && (
            <div>
              <h2 className="text-lg font-semibold mb-2">Timeline History</h2>
              {userDetails.timeline.map((event, index) => (
                <div key={index} className="text-sm text-gray-700">
                  <strong>{event.year}: </strong>{event.event}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
  
  
};

export default Profile;
