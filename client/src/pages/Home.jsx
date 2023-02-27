import React from 'react'
import BestDeals from '../components/bestDeals/BestDeals'
import Intro from '../components/intro/Intro'
import Navbar from '../components/navbar/Navbar'
import Topbar from '../components/topbar/Topbar'

export default function Home() {

  return (
    <>
      <Topbar />
      <Navbar />
      <Intro />
      <BestDeals />
    </>
  )
}
