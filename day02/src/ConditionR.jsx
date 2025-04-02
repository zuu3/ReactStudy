import { useState } from "react"

export default function ConditionR() {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <div>
      {isLogin ? (
        <div>
          <p>환영합니다~~~~</p>
          <button onClick={() => setIsLogin(false)}>로그아웃</button>
        </div>
      ) : (
        <button onClick={() => {
          setIsLogin(true)
        }}>로그인</button>
      )}
      <hr />
      <span>모두 함께 리액트 공부</span>
    </div>
  )
}