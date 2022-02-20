// import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom'
import MainMenu from './components/MainMenu'
import Auth from './components/Auth'
import Play from './components/Play'
import Rank from './components/Rank'
import Profile from './components/Profile'
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/yeet" element={<MainMenu />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/play" element={<Play />} />
        <Route path="/rank" element={<Rank />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/title" element={<Title />}/>
        {/* <Route path="/recipes/:recipeID" element={<Recipes />} /> */}
        <Route path="*" element={<Navigate to="title" />} />
      </Routes>
    </div>
  );
}

export default App;
