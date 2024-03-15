import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/Login/Login";

function App() {

  return (
    <div className="container mx-auto max-w-screen-lg">

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
