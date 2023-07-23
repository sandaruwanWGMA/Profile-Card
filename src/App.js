import './App.css';
import profilePicture from "./molindu copy.jpeg";

function App() {
    const imageStyles = {
        width: 420,
        height: 280
    }
  return (
    <div className="profile">
      <img src={profilePicture} style={imageStyles}/>
        <div id="intro">
            <h1> Molindu Achintha</h1>
        <p id="intro-para">
            <strong>Machine learning enthusiastic</strong> and a <strong>web developer</strong>. I most like to
            explore things by learning and my passion is to grab new knowledge
            quickly. I am currently learning <strong>React</strong> and <strong>iOS development with swift </strong>
            as well.
        </p>
            <div className="s-1">
                <p className= "s s--1">HTML + CSS 😎</p>
                <p className= "s s--2">JavaSript 🫡</p>
                <p className= "s s--3">Python ✊</p>
            </div>

            <div className="s-2">
                <p className= "s s--4">Java 👍</p>
                <p className= "s s--5">C++ 💪</p>
            </div>
        </div>
    </div>
  );
}

export default App;
