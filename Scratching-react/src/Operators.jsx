import React from 'react'

const Operators = () => {
  const arr1 = [1, 2, 3]
  const arr2 = [4, 5, 6]
  const mergedArray = [...arr1, ...arr2]

  const obj1 = { name: 'Alice', age: 25 }
  const obj2 = { city: 'New York', job: 'Developer' }
  const mergedObject = { ...obj1, ...obj2 }

  const original = { brand: 'Toyota', model: 'Corolla', year: 2022 }
  const copiedObject = { ...original }

  const myFun = (...names) => names
  const restResult = myFun('Arjun', 'Priya', 'John')

  return (
    <div className="section">
      <h1>Rest &amp; Spread Operator</h1>
      <div className="operators-grid">
        <div className="op-block">
          <h3>Merge Two Arrays</h3>
          <p><strong>Array 1:</strong> {arr1.join(', ')}</p>
          <p><strong>Array 2:</strong> {arr2.join(', ')}</p>
          <p><strong>Merged:</strong> {mergedArray.join(', ')}</p>
        </div>
        <div className="op-block">
          <h3>Merge Two Objects</h3>
          <p><strong>Obj 1:</strong> {JSON.stringify(obj1)}</p>
          <p><strong>Obj 2:</strong> {JSON.stringify(obj2)}</p>
          <p><strong>Merged:</strong> {JSON.stringify(mergedObject)}</p>
        </div>
        <div className="op-block">
          <h3>Copy an Object</h3>
          <p><strong>Original:</strong> {JSON.stringify(original)}</p>
          <p><strong>Copied:</strong> {JSON.stringify(copiedObject)}</p>
        </div>
        <div className="op-block">
          <h3>Rest Operator</h3>
          <p><strong>Names:</strong> {restResult.join(', ')}</p>
        </div>
      </div>
    </div>
  )
}

export default Operators
