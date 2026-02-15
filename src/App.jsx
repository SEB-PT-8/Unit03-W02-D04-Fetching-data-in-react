import { useState, useEffect } from "react"
import axios from 'axios'
function App() {
  const [students, setStudents] = useState([])
  const [count, setCount] = useState(0)

  async function getAllStudents(){
    const allStudents = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/students/`) // always async await axios calls
    setStudents(allStudents.data)
    console.log(students)

  }
  console.log('Component refreshes')

  // Exercise 2:
  // 1. map through the students state and show all the students on the page

  // 2 arguemnts:
  // a function
  // an array
  useEffect(()=>{getAllStudents()},[])

  async function deleteStudent(id){
    await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/students/${id}`)
    getAllStudents() // gets all the students after the deletion
  }

  function handleIncrease(){
    setCount(count + 1)
 
  }

  useEffect(()=>{console.log(count)},[count])

  return (
    <div>
      {students.length === 0 ? <h2>Loading...</h2> : (students.map((oneStudent)=>
      <div>
        <h3>{oneStudent.name}</h3>
        <button onClick={()=>{deleteStudent(oneStudent._id)}}>Delete Student</button>
      </div>
      ))}
      

      <h1>{count}</h1>
      <button onClick={handleIncrease}>+</button>
    </div>
  )
}

export default App