import { useRef, useState } from "react";
import "./App.css";
export default function UserRefAdd() {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
  });
  const [users, setUsers] = useState([
    {
      id: 1,
      name: '강민지',
      email: 'strongminji@gmail.com'
    },
    {
      id: 2,
      name: '정소울',
      email: 'soulright@bssm.hs.kr'
    },
    {
      id: 3,
      name: '이승현',
      email: 'victorynow@example.com'
    }
  ]);
  const nextId = useRef(4);
  const inputRef = useRef();
  const onChange = (e) => {
    nextId.current += 1;
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  return (
    <div>
      <input name="name" onChange={onChange} value={inputs.name} ref={inputRef} placeholder="이름을 입력" />
      <input name="email" onChange={onChange} value={inputs.email} placeholder="이메일을 입력" />

      <button onClick={() => alert(inputRef.current.value)}>확인</button>
      <button onClick={() => inputRef.current.focus()}>초기화</button>


    </div>
  );

}