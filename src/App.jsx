import { useState, useEffect } from "react"
import axios from 'axios'
function App() {
  const [students, setStudents] = useState([])

  async function getAllStudents(){
    const allStudents = await axios.get('https://omar-ga-class.onrender.com/students/') // always async await axios calls
    setStudents(allStudents.data)

  }
  console.log('Component refreshes')

  // Exercise 2:
  // 1. map through the students state and show all the students on the page

  // 2 arguemnts:
  // a function
  // an array
  useEffect(()=>{getAllStudents()},[])

  async function deleteStudent(id){
    await axios.delete(`https://omar-ga-class.onrender.com/students/${id}`)
  }

  return (
    <div>
      {students.length === 0 ? <h2>Loading...</h2> : (students.map((oneStudent)=>
      <div>
        <h3>{oneStudent.name}</h3>
        <button>Delete Student</button>
      </div>
      ))}
      
    </div>
  )
}

export default App