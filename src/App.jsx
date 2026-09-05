import Hero from './sections/Hero.jsx';
import ShowCaseSection from "./sections/ShowCaseSection.jsx";
import Navbar from "./components/Navbar.jsx";
import Logosection from "./sections/Logosection.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import Expreince from "./sections/Expreince.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Contact from "./sections/Contact.jsx";
import TechStack from "./sections/TechStack.jsx";


const App = () => {
    return (
       <>
         <Navbar />
         <Hero />
         <ShowCaseSection />
         <Logosection/>
         <FeatureCards />
         <Expreince />
         <TechStack />
         <Testimonials />
         <Contact />
       </>
    )
}
export default App
