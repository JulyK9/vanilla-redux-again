// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../routes/Home"
import Detail from "../routes/Detail"

function App() {
  return (
    // <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    // </div>
  );
}

export default App;
