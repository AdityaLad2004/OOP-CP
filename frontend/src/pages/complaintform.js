import React, { useState } from 'react'
import '../App.css';

const Complaintform = () => {
    const [formData, setFormData] = useState({
        name: '',
        department: '', 
        complaintTitle: '',
        complaintDescription: '',
        images: [],
        location: '',
        isPrivate: false,
        dateOfComplaint: '' // Added dateOfComplaint field to formData
      });
    
      const ministries = [
        "Ministry of Home Affairs",
        "Ministry of Finance",
        "Ministry of Defence",
        "Ministry of External Affairs",
        "Ministry of Health and Family Welfare"
      ];
    
      const handleChange = (event) => {
        const { name, value, type, checked, files } = event.target;
    
        if (type === 'file') {
          const imagesArray = Array.from(files);
          setFormData(prevState => ({
            ...prevState,
            images: imagesArray,
          }));
        } else {
          setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
          }));
        }
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form data submitted:', formData);
        setFormData({
          name: '',
          department: '',
          complaintTitle: '',
          complaintDescription: '',
          images: [],
          location: '',
          isPrivate: false,
          dateOfComplaint: '' // Reset dateOfComplaint field
        });
        window.alert('Complaint registered successfully!');
      };
    
      return (
        <div className="z-10 relative left-[35vw]">
          <div className="form-container bg-white/50">
            <h1 className="form-title text-blue-700/70">Complaint Form</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
            <div className="input-group">
                <label htmlFor="name" className="input-label">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input-field bg-white/40"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="department" className="input-label">Department:</label>
                <select
                  id="department"
                  name="department"
                  className="input-field bg-white/40"
                  value={formData.department}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select Department</option>
                  {ministries.map((ministry, index) => (
                    <option key={index} value={ministry}>{ministry}</option>
                  ))}
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="complaintTitle" className="input-label">Title of Complaint:</label>
                <input
                  type="text"
                  id="complaintTitle"
                  name="complaintTitle"
                  className="input-field bg-white/40"
                  value={formData.complaintTitle}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="complaintDescription" className="input-label">Description of Complaint:</label>
                <textarea
                  id="complaintDescription"
                  name="complaintDescription"
                  className="input-field bg-white/40"
                  rows="4"
                  value={formData.complaintDescription}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="input-group">
                <label htmlFor="images" className="input-label">Upload Images:</label>
                <input
                  type="file"
                  id="images"
                  name="images"
                  className="input-field bg-white/40"
                  multiple // Allow multiple file selection
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="location" className="input-label">Location of Complaint:</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="input-field bg-white/40"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="isPrivate" className="input-label">Complaint Type</label>
                <select
                  id="isPrivate"
                  name="isPrivate"
                  className="input-field bg-white/40"
                  value={formData.isPrivate}
                  onChange={handleChange}
                >
                  <option value={false}>Public</option>
                  <option value={true}>Private</option>
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="dateOfComplaint" className="input-label">Date of Complaint:</label>
                <input
                  type="date" // Input type set to "date" for date input
                  id="dateOfComplaint"
                  name="dateOfComplaint"
                  className="input-field bg-white/40"
                  value={formData.dateOfComplaint}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="submit-btn bg-blue-700/70 text-xl font-bold text-white/70 hover:text-white">Submit Complaint</button>
            </form>
          </div>
        </div>
      );
    
}

export default Complaintform