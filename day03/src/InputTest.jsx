import './App.css';
import { useState } from "react";
export default function InputTest1() {
  const [user, setUser] = useState({
    name: "",
    email: ""
  });
  return (

    <div>
      <form>
        <h1> 로그인</h1>

        <li>이름<input type="text" onChange={(e) => {
          setUser({ ...user, name: e.target.value });
        }}/></li>
        <li>이메일<input type="email" onChange={(e) => {
          setUser({ ...user, email: e.target.value });
        }}/></li>
        <li><button type="submit" action="">확인 </button>
          <button onClick={() => setUser({
            ...user,
            id: 0,
            name: "",
            email: ""
          })}>취소</button></li>
      </form>
      <div id="modal">
        입력된 이름은 <span>{user.name}</span>이고 입력된 이메일은 <span>{user.email}</span>
      </div>
    </div>
  );

}