import React, { useState, useEffect } from 'react'

const StudentManager = () => {
  const [studentName, setStudentName] = useState('')
  const [students, setStudents] = useState([])

  useEffect(() => {
    const saved = localStorage.getItem('students')
    if (saved) setStudents(JSON.parse(saved))
  }, [])

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students))
  }, [students])

  const addStudent = () => {
    if (studentName.trim() !== '') {
      setStudents([...students, studentName.trim()])
      setStudentName('')
    }
  }

  const deleteStudent = (index) => {
    setStudents(students.filter((_, i) => i !== index))
  }

  return (
    <div className="section">
      <h1>Student Information Manager</h1>

      <div className="manager-form">
        <input
          type="text"
          placeholder="Enter student name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addStudent()}
        />
        <button onClick={addStudent}>Add Student</button>
      </div>

      <h3>Student List</h3>
      {students.length === 0 ? (
        <p className="empty-msg">No students added yet.</p>
      ) : (
        <div className="student-list">
          {students.map((s, index) => (
            <div key={index} className="student-item">
              <p>{index + 1}. {s}</p>
              <button className="btn-delete" onClick={() => deleteStudent(index)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default StudentManager
