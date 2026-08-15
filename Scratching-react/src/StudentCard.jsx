import React from 'react'

const StudentCard = (props) => {
  return (
    <div className="card">
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>City:</strong> {props.city}</p>
      <p><strong>State:</strong> {props.state}</p>
      <p><strong>Country:</strong> {props.country}</p>
      <p><strong>Course:</strong> {props.course}</p>
    </div>
  )
}

const Props = () => {
  return (
    <div className="section">
      <h1>Props</h1>
      <div className="card-list">
        <StudentCard name="Jash Mehta" city="Ahemdabad" state="Gujarat" country="India" course="Computer Science" />
        <StudentCard name="Steve Burgers" city="New Jersey" state="New Jersey" country="USA" course="Software Engineering" />
        <StudentCard name="John Smith" city="New York" state="New York" country="USA" course="Data Science" />
        <StudentCard name="Emily Brown" city="London" state="England" country="UK" course="Web Development" />
        <StudentCard name="Ravi Kumar" city="Mumbai" state="Maharashtra" country="India" course="Cyber Security" />
      </div>
    </div>
  )
}

export default Props
