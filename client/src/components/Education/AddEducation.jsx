import React, { useContext, useState } from 'react';
import { EducationContext } from '../../context/EducationContext';

const AddEducation = () => {
  const { add_education } = useContext(EducationContext);

  const [school, setSchool] = useState('');
  const [location, setLocation] = useState('');
  const [start_date, setStartDate] = useState('');
  const [end_date, setEndDate] = useState('');
  const [tags, setTags] = useState([]);
  const [showEducationForm, setShowEducationForm] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'school':
        setSchool(value);
        break;
      case 'location':
        setLocation(value);
        break;
      case 'start_date':
        setStartDate(value);
        break;
      case 'end_date':
        setEndDate(value);
        break;
      case 'tags':
        setTags(value.split(',').map(tag => tag.trim()));
        break;
      default:
        break;
    }
  };

  const handleAddEducation = async (e) => {
    e.preventDefault();
    try {
      await add_education(school, location, start_date, end_date, tags);
      setSchool('');
      setLocation('');
      setStartDate('');
      setEndDate('');
      setTags([]);
      setShowEducationForm(false);
    } catch (error) {
      console.error("Failed to add education:", error);
    }
  };

  const handleShowEducationForm = () => {
    setShowEducationForm(prev => !prev);
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleShowEducationForm}
        className="text-blue-700 my-5 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors duration-300"
      >
        + Add Education
      </button>

      {showEducationForm && (
        <form onSubmit={handleAddEducation} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Add Education</h3>
          <div className="mb-4">
            <label htmlFor="school" className="block text-sm font-medium text-gray-700">School</label>
            <input
              type="text"
              id="school"
              name="school"
              value={school}
              onChange={handleInputChange}
              placeholder="Enter school name"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 "
            />
          </div>
          <div className="mb-4">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={location}
              onChange={handleInputChange}
              placeholder="Enter location"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 "
            />
          </div>
          <div className="mb-4">
            <label htmlFor="start_date" className="block text-sm font-medium text-gray-700">Start Date</label>
            <input
              type="date"
              id="start_date"
              name="start_date"
              value={start_date}
              onChange={handleInputChange}
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 "
            />
          </div>
          <div className="mb-4">
            <label htmlFor="end_date" className="block text-sm font-medium text-gray-700">End Date</label>
            <input
              type="date"
              id="end_date"
              name="end_date"
              value={end_date}
              onChange={handleInputChange}
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 "
            />
          </div>
          <div className="mb-4">
            <label htmlFor="tags" className="block text-sm font-medium text-gray-700">Tags (comma separated)</label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={tags.join(', ')}
              onChange={handleInputChange}
              placeholder="Enter tags"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 "
            />
          </div>
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors duration-300"
            >
              Save
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddEducation;
