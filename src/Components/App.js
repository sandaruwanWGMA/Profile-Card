import '../Styles/App.css';
import SkillsSet from "./SkillsSet"
import profilePicture from "../molindu copy.jpeg";
import Intro from "./Intro";

function App() {
    const imageStyles = {
        width: "100%"
    }
  return (
    <div className="profile">
        <img src={profilePicture} style={imageStyles}/>
        <div id="intro">
            <Intro />
            <SkillsSet />
        </div>

    </div>
  );
}

export default App;
