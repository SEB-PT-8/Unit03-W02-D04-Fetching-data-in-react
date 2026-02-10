import { useState } from "react"
import axios from 'axios'
function App() {
  const [students, setStudents] = useState([])

  async function getAllStudents(){
    const allStudents = await axios.get('https://omar-ga-class.onrender.com/students/') // always async await axios calls
    console.log(allStudents.data)
  }
  getAllStudents()

  return (
    <div>App</div>
  )
}

export default App