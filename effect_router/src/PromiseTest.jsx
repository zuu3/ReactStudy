//   1) resolve조건 :  1초마다 10씩 증가한 값이  출력되도록 하시오.
//   2) reject조건 : 50보다 큰 수가 인수로 입력되면 에러를 유발하도록 하시오.

export default function PromiseTest() {
  const increase = (number) => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (number > 50) {
          reject(new Error("50보다 큰 수가 입력되었습니다."));
        } else {
          number += 10;
          resolve(number);
        }
      }, 1000);
    });
    return promise;
  };

  increase(0)
    .then((result) => {
      console.log(result);
      return increase(result);
    })
    .then((result) => {
      console.log(result);
      return increase(result);
    })
    .then((result) => {
      console.log(result);
      return increase(result);
    })
    .then((result) => {
      console.log(result);
      return increase(result);
    })
    .catch((error) => {
      console.error(error.message);
    });

  return (
    <div>
      <h1>Promise 객체 Test</h1>
    </div>
  );
};