import "App.css";
import { CgProfile } from "react-icons/cg";

export default function App() {
  return (
    <div className="App">
      <div className="header">
        <span className="menuToggle">=</span>
        <h1>Logo</h1>
        <CgProfile className="profilePic" />
      </div>
    </div>
  );
}
