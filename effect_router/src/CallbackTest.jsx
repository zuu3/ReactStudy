//CallbackTest.jsx
//10초 후에 초기값 0을 10으로 증가시키는 함수를 작성하시오.
export default function CallbackTest() {
  function increase(num, callback) {
    setTimeout(() => {
      num += 10;
      callback(num);
    }, 10000);
	} 

 console.log("콜백함수 테스트");
  increase(0, (result) => {
    console.log(result);
    increase(result, (result) => {
      console.log(result);
      increase(result, (result) => {
        console.log(result);
        increase(result, (result) => {
          console.log(result);
          console.log("작업완료");
        });
      });
    });
  });
  return (
    <div>
      <h1>Callback함수 Test</h1>
    </div>
  );
};