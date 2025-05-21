import { useContext } from "react";
import React, { useState } from "react";
import { Context1 } from "./App";
import { Nav } from "react-bootstrap";
import "./App.css";
import { useParams } from "react-router-dom";
import Rooms from "./Rooms";

export default function DetailTab() {
 let { id } = useParams();
 console.log(id);
 let room = Rooms.filter((item) => item.key == id);
 let result = room[0];
 console.log(result.name);

 const { theme, toggleTheme } = useContext(Context1);

 return (
   <main style={{

       backgroundColor: theme === "light" ? "white" : "black",

       color: theme === "light" ? "black" : "white",

     }}>

     <div>테마색깔 : {theme}</div>

     <button onClick={toggleTheme} id="theme"> 

       테마변경

     </button>
     <div className="container">
       <div className="box image">
         <img src={result.image} className="boximage" alt="Room" />
       </div>
       <div className="box">
         <div className="location">{result.name} </div>
         <div className="location">{result.location}에 위치</div>
         <div className="title">{result.title}</div>
         <hr />
         <div className="guest">최대인원{result.totalGuest} 명</div>
         <div className="rating">
           평점: {result.rating}{" "}
           <span className="visits">({result.numberOfRating})</span>
         </div>
         <div className="price">
           {result.price} 원<span className="month">/ month</span>
         </div>
       </div>
     </div>
     {/* 2. 리액트부트스트랩에서 탭모양 Nav 복사해서 붙여넣기
       탭을 클릭하면 탭번호 변경하기  */}


     <Nav variant="tabs" defaultActiveKey="link0">
       <Nav.Item>
         <Nav.Link eventKey="link0">
           상세정보
         </Nav.Link>
       </Nav.Item>
       <Nav.Item>
         <Nav.Link eventKey="link1">
           리뷰
         </Nav.Link>
       </Nav.Item>
       <Nav.Item>
         <Nav.Link eventKey="link2" disabled>
           상품Q&A
         </Nav.Link>
       </Nav.Item>
     </Nav>


      
       <div>
         <p>
           5~9층에 위치한 스탠다드룸은 편안함과 쾌적함이 인상적이 휴식 환경을
           제공합니다.
         </p>
         <p>
           모던한 아름다움과 신라호텔 수준의 고급 침구 및 침대 그리고 고급
           어메니티로 한 단계 업그레이드 된 휴식을 경험하십시오.
         </p>
         <br /> 위치 :5~9층
         <br />
         룸구성 : 침실 1, 욕실 1
         <br />
         문의전화 : 02-2230-0700
       </div>
      
      <div>내용1</div>
      <div>내용2</div>
   </main>
 );
}

