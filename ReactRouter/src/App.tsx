import "./App.css";
import React, { useState, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Card from "./components/Card";
import NoPage from "./components/NoPage";
import CardList from "./CardList";
import Home from "./components/Home";
import EventLoopTest from "./EventLoopTest";
import FormPostExample from "./AxiosTest";
import QueryPre from "./Weather";
import Board from "./Board";

export let Context1 = React.createContext();

export default function App() {

 const [users, setUsers] = useState(["user1", "user2", "user3"]); 

  //2-2.context값에 들어갈 변수 정의

  const [theme, setTheme] = useState("light"); //2-2

  const toggleTheme = useCallback(() => {

    setTheme(theme === "light" ? "dark" : "light");

  }, [theme]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route path="/card/:id" element={<Context1.Provider value={{ theme, toggleTheme }}><Card name="Sample Name" location="Sample Location" totalGuest="1" numberOfRating="1" rating="5" price="100" image="sample.jpg"/></Context1.Provider>} />
        <Route path="/cardList" element={<CardList />} />
        <Route path="/elt" element={<EventLoopTest />} />
        <Route path="/axiosTest" element={<FormPostExample />} />
        <Route path="/weather" element={<QueryPre />} />
        <Route path="/board" element={<Board />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>

  );

}