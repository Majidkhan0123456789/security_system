'use client'

import HeroSection from "../Components/heroSection"
import TeamSection from "../Components/teamsection"

function page() {
  return (
     <>
     <HeroSection title='Our Team' subtitle='Meet With Our Team' 
     showButton={false} backgroundImage='team_bg.webp' />
     <TeamSection/>
     </>
  )
}

export default page