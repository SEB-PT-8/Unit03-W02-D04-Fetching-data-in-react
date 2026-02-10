import { useState, useEffect } from "react"
import axios from 'axios'
function App() {
  const [students, setStudents] = useState([])

  async function getAllStudents(){
    const allStudents = await axios.get('https://omar-ga-class.onrender.com/students/') // always async await axios calls
    setStudents(allStudents.data)
  }
  console.log('Component refreshes')

  // 2 arguemnts:
  // a function
  // an array
  useEffect(()=>{getAllStudents()},[])

  return (
    <div>App</div>
  )
}

export default App