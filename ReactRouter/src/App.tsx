import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Card from "./components/Card";
import NoPage from "./components/NoPage";
import CardList from "./CardList";
import Home from "./components/Home";
import EventLoopTest from "./EventLoopTest";
import FormPostExample from "./AxiosTest";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route path="/card" element={<Card />} />
        <Route path="/cardList" element={<CardList />} />
        <Route path="/elt" element={<EventLoopTest />} />
        <Route path="/axiosTest" element={<FormPostExample />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>

  );

}