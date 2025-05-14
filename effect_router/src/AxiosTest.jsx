import React, { useState } from "react";
import axios from "axios";

export default function AxiosTest() {
  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);
  const [photos, setPhotos] = useState([]);

  const getPromise = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments/1")
      .then((response) => {
        setData(response.data);
        setData2(null);
        setPhotos([]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  const getAsync = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
      setData(null);
      setData2(response.data);
      setPhotos([]);
    } catch (error) {
      console.error(error);
    }
  }

  const getPhotos = async () => {
    try {
      const photos = await axios.get("https://jsonplaceholder.typicode.com/photos");
      console.log(photos);
      setData(null);
      setData2(null);
      setPhotos(photos.data.filter((item) => item.id < 10));
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <main>
      <div>
        <h3>Axios 테스트해보기</h3>
        <button onClick={getPromise}>Promise로 불러오기</button>
        <p />
        <button onClick={getAsync}>async/await로 불러오기</button>
        <p />
        <button onClick={getPhotos}>async/await로 사진 불러오기</button>
      </div>
      {data && <p>{JSON.stringify(data)}</p>}
      {data2 && <p>{JSON.stringify(data2)}</p>}
      {photos && (
        <div>
          {photos.map((photo) => (
            <div key={photo.id}>
              <img src={photo.url} alt={photo.title} />
              <p>{photo.title}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}