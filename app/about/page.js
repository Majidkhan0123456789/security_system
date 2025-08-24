import HeroSection from "../Components/heroSection"
import Who_We_are from '../Components/who_we_are'
import Vertical_Timeline from '../Components/vertical_timeline'
import Statistics from "../Components/statistics"
export default function page() {
  return (
     <>
     <HeroSection title="ABOUT OUR COMPANY" subtitle="Delivering Security Solutions That Define the Standard" buttonText="Know More"/>
      
        <Who_We_are />
        <Vertical_Timeline/>
        <Statistics/>
   
     </>
  )
}