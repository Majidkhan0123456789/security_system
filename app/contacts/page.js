import HeroSection from "../Components/heroSection";
import Contact from "../Components/contact"; 
export default function page() {
  return (
     <>
    <HeroSection title='Contact' subtitle='If you are looking for more information on our products or services, fill out the form below and one of our expert advisers will be in touch.' 
         showButton={false} backgroundImage='team_bg.webp' />
         <Contact/>
        
     </>
  )
}
 