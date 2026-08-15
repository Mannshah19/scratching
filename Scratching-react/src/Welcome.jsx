import React from 'react'
import student from './assets/student.jpg'

const Welcome = () => {
  const currentDate = new Date().toLocaleDateString()

  return (
    <div className="section">
      <h1>Welcome</h1>
      <div className="welcome-card">
        <img src={student} alt="student" className="welcome-avatar" />
        <div className="welcome-info">
          <p><strong>Student Name:</strong> Robert Evans</p>
          <p><strong>Course:</strong> Computer Science</p>
          <p><strong>Institute:</strong> Harvard University</p>
          <p><strong>Date:</strong> {currentDate}</p>
          <span className="badge">Active Student</span>
        </div>
      </div>
    </div>
  )
}

export default Welcome
