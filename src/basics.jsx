import React from 'react'
import basicsBar from './basicsBar'

const name= "Neelesh"
const a= 20, b= 30
const names= ['Neelesh', 'Rauniyar', 'Smith', 'Steve', 'Any']
const loggedIn= false
const styles= {
  color: 'blue',
  fontSize: '15px'
}


const App = () => {
  return (
    <>
    <div className='text-5xl'>App</div>
    <p>Hello {name}. The sum is {a+b}</p>
    <p>The sum is {a+b}</p>
    <ul>
      {names.map((name, index)=> (
        <li key= {index}>{name}</li>
      ))}
    </ul>
    {loggedIn ? <h1>Hello Member</h1> : <h1>Hello Guests</h1>}
    <p style={{color: 'red', fontSize: '24px'}}>This is a job site</p>
    <p style={styles}>This is a job site</p>
    <basicsBar />
    </>
  )
}

export default App 
