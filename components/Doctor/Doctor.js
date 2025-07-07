"use client";
import React, { useState } from 'react';
import { FaUserPlus, FaPhoneAlt, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';
import CreateDoctorModal from './CreateDoctor.js';
import './Doctor.css';

const Doctor = () => {
  const [doctors, setDoctors] = useState([
    {
      name: 'Dr.pooja',
      specialization: 'Implant Consultant',
      role: 'Surgery-Resident',
      phone: '8939719535',
      email: 'pooja@bleap.in',
      date: '2025-05-27',
      status: 'Active',
      img: 'https://via.placeholder.com/50',
      color: '#3a6351'
    },
    {
      name: 'Dr.Giri',
      specialization: 'Implant Surgery-Resident Doctor',
      phone: '9840110960',
      email: 'giri@gmail.com',
      date: '2025-04-16',
      status: 'Active',
      img: 'https://via.placeholder.com/50/ff6600/ffffff?text=G',
      color: '#ff6600'
    },
    {
      name: 'Dr.sabari',
      specialization: 'Endodontics-Visiting Consultant',
      phone: '8525939833',
      email: 'sinnamuthu98765@gmail.com',
      date: '2025-03-13',
      status: 'Active',
      img: 'https://via.placeholder.com/50/ff6600/ffffff?text=S',
      color: '#ff6600'
    },
  ]);

  const [searchText, setSearchText] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddDoctor = (doctorData) => {
    const newDoctor = {
      name: doctorData.name,
      specialization: doctorData.specialization,
      role: doctorData.type,
      phone: doctorData.contactNumber,
      email: doctorData.email,
      date: doctorData.joinDate,
      status: doctorData.status,
      img: doctorData.profileImage || 'https://via.placeholder.com/50',
      color: doctorData.color
    };

    if (editingIndex !== null) {
      const updatedDoctors = [...doctors];
      updatedDoctors[editingIndex] = newDoctor;
      setDoctors(updatedDoctors);
      setEditingIndex(null);
    } else {
      setDoctors([...doctors, newDoctor]);
    }
  };

  const handleDeleteDoctor = (index) => {
    const updatedDoctors = doctors.filter((_, i) => i !== index);
    setDoctors(updatedDoctors);
  };

  const handleEditDoctor = (index) => {
    setEditingIndex(index);
    setShowModal(true);
  };

  const handleClear = () => {
    setSearchText('');
    setStartDate('');
    setEndDate('');
  };

  const filteredDoctors = doctors.filter((doc) => {
    const textMatch = (
      doc.name.toLowerCase().includes(searchText.toLowerCase()) ||
      doc.specialization.toLowerCase().includes(searchText.toLowerCase()) ||
      doc.role?.toLowerCase().includes(searchText.toLowerCase()) ||
      doc.phone.includes(searchText) ||
      doc.email.toLowerCase().includes(searchText.toLowerCase())
    );

    const docDate = new Date(doc.date);
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;

    const dateMatch = (!start || docDate >= start) && (!end || docDate <= end);

    return textMatch && dateMatch;
  });

  return (
    <div className="doctor-page">
      <div className="doctor-header-container">
        <div className="header-left">
          <h2 className="title">
            Doctor <span className="badge">{filteredDoctors.length}</span>
          </h2>
        </div>

        <div className="header-middle">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <input
            type="date"
            className="date-input"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <input
            type="date"
            className="date-input"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <button className="btn search-btn">Search</button>
          <button className="btn clear-btn" onClick={handleClear}>Clear</button>
        </div>

        <div className="header-right">
          <button
            className="btn create-btn"
            onClick={() => {
              setShowModal(true);
              setEditingIndex(null);
            }}
          >
            <FaUserPlus className="icon" /> Create Doctor
          </button>
        </div>
      </div>

      <div className="entry-info">
        Showing 1 to {filteredDoctors.length} of {filteredDoctors.length} Entries <span className="arrow">→</span>
      </div>

      <div className="doctor-cards-container">
        {filteredDoctors.map((doc, index) => (
          <div
            className="doctor-card"
            key={index}
            style={{
              borderLeft: `8px solid ${doc.color || '#ccc'}`,
              minHeight: '240px',
              maxWidth: '330px',
              width: '100%',
              wordBreak: 'break-word'
            }}
          >
            <div className="top">
              <img src={doc.img} alt={doc.name} className="doctor-img" />
              <div>
                <div className="doctor-name">{doc.name}</div>
                <div className="doctor-role">{doc.specialization}</div>
                {doc.role && <div className="doctor-role">{doc.role}</div>}
              </div>
            </div>
            <div className="info-row">
              <FaPhoneAlt className="icon" /> {doc.phone}
            </div>
            <div className="info-row">
              <FaEnvelope className="icon" /> {doc.email}
            </div>
            <div className="info-row">
              <FaCalendarAlt className="icon" /> {doc.date}
              <span className="status">{doc.status}</span>
            </div>
            <div className="actions">
              <button className="edit-btn" onClick={() => handleEditDoctor(index)}>Edit</button>
              <button className="delete-btn" onClick={() => handleDeleteDoctor(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <CreateDoctorModal
          onClose={() => {
            setShowModal(false);
            setEditingIndex(null);
          }}
          onCreate={handleAddDoctor}
          editingDoctor={editingIndex !== null ? doctors[editingIndex] : null}
        />
      )}
    </div>
  );
};

export default Doctor;
