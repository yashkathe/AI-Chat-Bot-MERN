// import styles from './App.module.css'

import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";

import styles from './App.module.css'

function App() {
	return (
		<div>
			<Header />
			<main className={styles.routes}>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/signup" element={<Signup/>} />
                    <Route path="/chat" element={<Chat/>} />
                </Routes>
            </main>
		</div>
	);
}

export default App;
