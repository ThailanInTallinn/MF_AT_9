import { useState } from "react";
import "./App.css";
import { CgProfile } from "react-icons/cg";

export default function App() {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <div className="App">
      <div className="header">
        <span
          className="menuToggle"
          onClick={() => {
            setMenuToggle(!menuToggle);
          }}
        >
          =
        </span>
        <h1>Logo</h1>
        <CgProfile className="profilePic" />
      </div>
      <nav style={{ display: menuToggle ? "block" : "none" }}>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
      </nav>
    </div>
  );
}
