import SmoothScrollWrapper from "./Components/smoothscroll";
import HeroSection from "./Components/heroSection";
import Company_Gives from "./Components/company_gives";
import Slider_Service from "./Components/slider_service";
import Count_Up from "./Components/count_up";
import Warranty from "./Components/warranty";

export default function Home() {
  return (
    <SmoothScrollWrapper>
      <HeroSection
        title="GIVING A TOTAL COVERAGE"
        subtitle="Of The Emerging Clients' Needs Required In The Era Of Technology"
        buttonText="Learn More"
      />
      <div className="overflow-hidden">
        <Company_Gives />
      </div>
      
      <Slider_Service />
      <Count_Up />
      <Warranty />
    </SmoothScrollWrapper>
  );
}
