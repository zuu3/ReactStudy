import { useRef, useState } from "react";
import "./App.css";

const User = ({ id, name, email, selected, onDelete, onToggle, onModify }) => {
  const [editing, setEditing] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editEmail, setEditEmail] = useState(email);

  const handleToggleEdit = () => {
    if (editing) onModify(id, editName, editEmail);
    setEditing(!editing);
  };

  return (
    <div className="user-list">
      {editing ? (
        <div className="user-edit">
          <input value={editName} onChange={(e) => setEditName(e.target.value)} />
          <input value={editEmail} onChange={(e) => setEditEmail(e.target.value)} />
          <button onClick={handleToggleEdit}>완료</button>
        </div>
      ) : (
        <div className="user">
          <div
            style={{ color: selected ? "blue" : "" }}
            onClick={() => onToggle(id)}
            className="user-name"
          >
            {name}
          </div>
          <div className="user-email">{email}</div>
          <button className="user-modify" onClick={handleToggleEdit}>수정</button>
          <button className="user-delete" onClick={() => onDelete(id)}>삭제</button>
        </div>
      )}
    </div>
  );
};

export default function UserAdd() {
  const [inputs, setInputs] = useState({ name: "", email: "" });
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "강민지",
      email: "strongminji@gmail.com",
      selected: false
    },
    {
      id: 2,
      name: "정소울",
      email: "soulright@bssm.hs.kr",
      selected: false
    },
    {
      id: 3,
      name: "이승현",
      email: "victorynow@example.com",
      selected: false
    },
    {
      id: 4,
      name: "조하민",
      email: "chohamin0611@gmail.com",
      selected: false
    }
  ]);

  const { name, email } = inputs;
  const nextId = useRef(5);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onCreate = () => {
    const user = {
      id: nextId.current,
      name,
      email,
      selected: false
    };
    nextId.current += 1;
    setUsers([...users, user]);
    setInputs({ name: "", email: "" });
  };

  const onDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(users.map(user =>
      user.id === id ? { ...user, selected: !user.selected } : user
    ));
  };

  const onModify = (id, newName, newEmail) => {
    setUsers(users.map(user =>
      user.id === id ? { ...user, name: newName, email: newEmail } : user
    ));
  };

  return (
    <div>
      <input
        name="name"
        onChange={onChange}
        value={name}
        placeholder="이름을 입력"
      />
      <input
        name="email"
        onChange={onChange}
        value={email}
        placeholder="이메일을 입력"
      />
      <button onClick={onCreate}>등록</button>

      {users.map((user) => (
        <User
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          selected={user.selected}
          onDelete={onDelete}
          onToggle={onToggle}
          onModify={onModify}
        />
      ))}
    </div>
  );
}