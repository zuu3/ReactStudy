import './App.css';
import { useState } from "react";
export default function InputTest1() {
  const [user, setUser] = useState({
    name: "",
    nickname: "",
    email: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (

    <div>
      <form>
        <h1> 로그인</h1>

        <li>이름<input type="text" name='name' onChange={handleChange}/></li>
        <li>닉네임<input type="text" name='nickname' onChange={handleChange}/></li>
        <li>이메일<input type="email" name='email' onChange={handleChange}/></li>
        <li><button type="submit" action="">확인 </button>
          <button onClick={() => setUser({
            ...user,
            id: 0,
            name: "",
            nickname: "",
            email: ""
          })}>취소</button></li>
      </form>
      <div id="modal">
        입력된 이름은 <span>{user.name}</span>이고 닉네임은 <span>{user.nickname}</span>, 입력된 이메일은 <span>{user.email}</span>
      </div>
    </div>
  );

}