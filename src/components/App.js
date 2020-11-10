import UserProvider from "../providers/UserProvider";
import Navigation from "./Navigation";

import '../App.css'

function App() {
  return (
    <UserProvider>
      <Navigation />
    </UserProvider>
  );
}

export default App;
