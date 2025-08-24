import HeroSection from "../Components/heroSection";
import Services from '../Components/services';
 

export default function page() {
  return (
     <>
    <HeroSection title='Our Services' subtitle='Our Services & Products' 
         showButton={false} backgroundImage='team_bg.webp' />
         <Services/>
     </>
  )
}
 