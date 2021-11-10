import { Route, Routes } from "react-router-dom";

import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import CharactersList from "./pages/CharactersList";
import SingleCharacter from "./pages/SingleCharacter";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<CharactersList />} />

        <Route path='/:id' element={<SingleCharacter />} />
      </Routes>
    </div>
  );
}

export default App;
