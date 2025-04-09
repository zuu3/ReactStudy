import React, { useState, useRef, useEffect  } from "react";

function Modal() {

  useEffect(() => {
    return () => {
      alert("Modal 컴포넌트 언마운트");
    };
  }, []);

  return (
    <div style={{border: "1px solid black", padding: "10px", margin: "10px"}}>
      <h2>useEffect 실습입니다.</h2>
    </div>
  );
}

export default  function UseEffect1() {

  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [depname, setDepname] = useState("");
  const [showModal, setShowModal] = useState(true);
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  }, [])
  useEffect(() => {
    console.log(`effect 함수 -변경 후 이름 : ${depname}`);
    return () => {
      console.log(`effect 함수 -변경 전 이름 : ${depname}`);
    };
  }, [depname]);
 
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName}  /> 

        <input value={nickname} onChange={onChangeNickname} />
        <button onClick ={()=>setDepname(name)}>이름 출력</button>
      </div>

      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
        {
          showModal && <Modal />
        }
       </div>
     </div>
  );
}

