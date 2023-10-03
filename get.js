import React, {useEffect, useState} from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const firebaseURL =
      'https://my-first-project-7e52e-default-rtdb.firebaseio.com/register.json'

    axios
      .get(firebaseURL)
      .then(response => {
        const fetchedData = response.data
        setData(fetchedData)
      })
      .catch(error => {
        console.error('Error fetching data from Firebase:', error)
      })
  }, [])

  return (
    <div className="App">
      <h1>Data from Firebase</h1>
      <pre>{JSON.stringify(Object.values(data))} </pre>
    </div>
  )
}

export default App
