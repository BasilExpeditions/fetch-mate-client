import UserProvider from "../providers/UserProvider";
import Navigation from "./Navigation";
import { BrowserRouter as Router } from "react-router-dom";

import '../App.css'

function App() {
  return (
    <UserProvider>
      <Router>
        <Navigation />
      </Router>
    </UserProvider>
  );
}

export default App;
