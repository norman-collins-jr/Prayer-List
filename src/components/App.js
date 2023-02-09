
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Requests from "./pages/Requests"
import EditRequest from "./pages/EditRequest"
import DeleteRequest from "./pages/DeleteRequest"
import NewRequest from "./pages/NewRequest"
import { useState } from "react"
import { useContext, RequestContext } from "../contexts/RequestsContext"
import RequestPopulate from "../RequestPopulate"
function App() {
    const [requests, setRequests] = useState(RequestPopulate);
  return (
    <RequestContext.Provider value={[requests, setRequests]}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/requests" element={<Requests/>} />
            <Route path="/request/edit/:id" element={<EditRequest/>} />
            <Route path="/request/delete/:id" element={<DeleteRequest/>} />
            <Route path="/request/new" element={<NewRequest/>} /> 
            <Route path="*" element={<NotFound />} />
        </Routes>
    </RequestContext.Provider>
  )
}

export default App
