import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

// styled-components를 이용한 버튼 및 리스트 항목 스타일 정의
const AddBtnStyle = styled.button`
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
`;

const LiStyle = styled.li`
  list-style: none;
  margin: 5px 0;
  display: flex;
  align-items: center;
  gap: 10px;
`;

function AxiosAsync() {
  const [listData, setListData] = useState([]); // 초기 상태는 빈 배열
  const URL = "http://localhost:4000/test";

  // 서버에서 데이터를 GET 방식으로 불러오기
  const loadAxios = async () => {
    try {
      const res = await axios.get(URL);
      setListData(res.data);
    } catch (error) {
      console.error("GET 요청 에러:", error);
    }
  };

  // 서버에 데이터를 POST 방식으로 추가
  const postAxios = async (pushData) => {
    try {
      await axios.post(URL, pushData);
    } catch (error) {
      console.error("POST 요청 에러:", error);
    }
  };

  // 서버에 데이터를 PUT 방식으로 수정 (예: 체크 상태 토글)
  const putAxios = async (putItem, putData) => {
    try {
      await axios.put(`${URL}/${putItem.id}`, { ...putItem, ...putData });
    } catch (error) {
      console.error("PUT 요청 에러:", error);
    }
  };

  // 서버에서 데이터를 DELETE 방식으로 제거
  const deleteAxios = async (item) => {
    try {
      await axios.delete(`${URL}/${item.id}`);
    } catch (error) {
      console.error("DELETE 요청 에러:", error);
    }
  };

  // 컴포넌트가 마운트 될 때 데이터를 불러옵니다.
  useEffect(() => {
    loadAxios();
  }, []);

  // 항목 추가 함수
  const addItem = () => {
    const testData = {
      id: `test_${Math.floor(Math.random() * 1000)}`,
      name: "테스트 Name",
      checked: false,
    };
    // 상태 업데이트 (불변성 유지)
    setListData(prev => [...prev, testData]);
    postAxios(testData);
  };

  // 체크 상태 토글 함수
  const toggleChecked = (item) => {
    const toggleCheck = { checked: !item.checked };
    setListData(prevList =>
      prevList.map(it => it.id === item.id ? { ...it, ...toggleCheck } : it)
    );
    putAxios(item, toggleCheck);
  };

  // 항목 삭제 함수
  const removeItem = (item) => {
    setListData(prevList => prevList.filter(it => it.id !== item.id));
    deleteAxios(item);
  };

  return (
    <div>
      <AddBtnStyle onClick={addItem}>추가하기</AddBtnStyle>
      <hr />
      <ul>
        {listData.map(item => (
          <LiStyle key={item.id}>
            <p>name: {item.name}</p>
            <button type="button" onClick={() => toggleChecked(item)}>
              {item.checked ? "✅" : "⬜"}
            </button>
            <button type="button" onClick={() => removeItem(item)}>
              ❌
            </button>
          </LiStyle>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <AxiosAsync />
    </div>
  );
}
