import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Home from "./routes/Home.js";
import Detail from "./routes/Detail.js"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Detail />} />
      </Routes>
    </Router>
  )
}
export default App;
 