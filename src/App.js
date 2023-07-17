import AboutUsSipho from "./components/aboutUs/AboutUsSipho";
import BannerSipho from "./components/banners/BannerSipho";
import ContactSipho from "./components/contactUs/ContactSipho";
import FooterSipho from "./components/footers/FooterSipho";
import MostRecentWorkSipho from "./components/mostRecent/MostResentWorkSipho";
import NavbarSipho from "./components/navbars/NavbarSipho";
import TeamSipho from "./components/teamMembers/TeamSipho";

function App() {
  return (
    <div className="App">
      {/* Please import all your components here and in order navbars first, followed by banners etc... */}
      <NavbarSipho />
      <BannerSipho />
      <AboutUsSipho />
      <MostRecentWorkSipho />
      <TeamSipho />
      <ContactSipho />
      <FooterSipho />
    </div>
  );
}

export default App;
