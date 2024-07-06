import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeroCards from './components/HeroCards'
import JobListings from './components/JobListings'
import ViewAllJobs from './components/ViewAllJobs'
const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <HeroCards />
    <JobListings />
    <ViewAllJobs />

    </>
  )
}

export default App