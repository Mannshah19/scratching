import React, { useState } from 'react'

const StateExamples = () => {
  const [name, setName] = useState('Jash')
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [fruits, setFruits] = useState(['Apple', 'Banana'])
  const [student, setStudent] = useState({ name: 'Chris', course: 'CS' })

  return (
    <div className="section">
      <h1>State (useState)</h1>

      <div className="state-block">
        <h3>String</h3>
        <p><strong>Name:</strong> {name}</p>
        <div className="btn-group">
          <button onClick={() => setName('John')}>Update</button>
          <button className="btn-reset" onClick={() => setName('Jash')}>Reset</button>
        </div>
      </div>

      <div className="state-block">
        <h3>Number</h3>
        <p><strong>Count:</strong> {count}</p>
        <div className="btn-group">
          <button onClick={() => setCount(count + 1)}>Add</button>
          <button className="btn-reset" onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>

      <div className="state-block">
        <h3>Boolean</h3>
        <p><strong>Visible:</strong> {isVisible ? 'True' : 'False'}</p>
        <div className="btn-group">
          <button onClick={() => setIsVisible(true)}>Update</button>
          <button className="btn-reset" onClick={() => setIsVisible(false)}>Reset</button>
        </div>
      </div>

      <div className="state-block">
        <h3>Array</h3>
        <p><strong>Fruits:</strong> {fruits.join(', ')}</p>
        <div className="btn-group">
          <button onClick={() => setFruits([...fruits, 'Mango'])}>Add</button>
          <button className="btn-reset" onClick={() => setFruits(['Apple', 'Banana'])}>Reset</button>
        </div>
      </div>

      <div className="state-block">
        <h3>Object</h3>
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Course:</strong> {student.course}</p>
        <div className="btn-group">
          <button onClick={() => setStudent({ name: 'Ravi', course: 'Data Science' })}>Update</button>
          <button className="btn-reset" onClick={() => setStudent({ name: 'Chris', course: 'CS' })}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default StateExamples
