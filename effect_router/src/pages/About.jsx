import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>소개페이지입니다.</h1>
      <button onClick={() => navigate('/')}>홈으로</button>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </div>
  );
}