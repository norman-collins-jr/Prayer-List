
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Requests from "./pages/Requests"
import { useState } from "react"
import allRequests from "../RequestPopulate"
function App() {
    const [requests, setRequests] = useState(allRequests);
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/requests" element={<Requests/>} state={{requests}}/>
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
