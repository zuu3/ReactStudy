import { useEffect, useState } from 'react';

export default function AsyncTest() {
  const [error, setError] = useState(null); // 에러 메시지 저장용 상태

  // 코드를 작성하세요.
  const increase = (number) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (number > 50) {
          reject(new Error("50보다 큰 수가 입력되었습니다."));
        } else {
          number += 10;
          resolve(number);
        }
      }, 1000);
    });
  }
  const runTask = async () => {
    try {
      let result = 0;
      for (let i = 0; i < 5; i++) {
        result = await increase(result);
        console.log(result);
      }
    } catch (error) {
      setError(error.message);
    }
  }
  useEffect(() => {
    runTask();
  }, []);
  return (
    <div>
      <h1>Promise 객체 Test (async/await)</h1>
      {/* 에러 메시지가 있을 경우 화면에 표시 */}
      {error && <p style={{ color: 'red' }}>에러 발생: {error}</p>}
    </div>
  );
}