//중첩된 객체를 Immer로 변경
import React, { useState } from "react";
import {produce} from "immer";

export default function ProfileFormImmer() {
  // 중첩된 객체 구조를 갖는 상태 정의
  const [user, setUser] = useState({
    profile: {
      name: "",
      email: "",
    },
  });

  // input 변경 핸들러: Immer를 사용해 중첩 객체를 쉽게 업데이트
  const handleChange = (e) => {
    const { name, value } = e.target;
		
    setUser(
      produce(user, (draft) => {
        draft.profile[name] = value;
      })
    )
  };

  // 간단한 form UI 구성
  return (
    <div style={{ padding: "20px" }}>
      <h2>프로필 수정</h2>
      <form>
        <div style={{ marginBottom: "10px" }}>
          <label>이름: </label>
          <input
            type="text"
            name="name"
            value={user.profile.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>이메일: </label>
          <input
            type="email"
            name="email"
            value={user.profile.email}
            onChange={handleChange}
          />
        </div>
      </form>

      <hr />

      {/* 변경된 결과를 바로 확인할 수 있도록 출력 */}
      <h3>입력 결과</h3>
      <p>이름: {user.profile.name}</p>
      <p>이메일: {user.profile.email}</p>
    </div>
  );
}