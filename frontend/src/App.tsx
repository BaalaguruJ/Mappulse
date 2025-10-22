import { BrowserRouter, Route, Routes } from "react-router"
import Register from "./pages/register"
import Login from "./pages/login"
import Home from "./pages/home"
import Map from "./pages/map"

function App() {
 
  return (
    <BrowserRouter>
		<Routes>
			<Route
				element={<Register/>}
				path="/register"
			/>
			<Route
				element={<Login/>}
				path="/login"
			/>
			<Route
				element={<Home/>}
				path="/"
			/>
			<Route
				element={<Map lat={13.0827} lng={80.2707}/>}
				path="/map"
			/>
		</Routes>
    </BrowserRouter>
  )
}

export default App
