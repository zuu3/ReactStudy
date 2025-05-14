import "../App.css";
import { useLocation } from "react-router-dom";

interface CardProps {
  key?: number;
  name: string;
  location: string;
  totalGuest: string;
  numberOfRating: string;
  rating: string;
  price: string;
  image: string;
}

export default function Card(props: CardProps) {
  const location = useLocation();
  const data = {
    ...location.state,
    ...props,
  };


  return (
    <div className="container">
      <div className="box image">
        <img src={data.image} className="boximage" alt="Room" />
      </div>
      <div className="box">
        <div className="location">{data.location}에 위치</div>
        <div className="title">{data.name}</div>
        <hr />
        <div className="guest">최대인원 {data.totalGuest} 명</div>
        <div className="rating">
          평점: {data.rating}{" "}
          <span className="visits">({data.numberOfRating})</span>
        </div>
        <div className="price">
          {data.price} 원<span className="month">/ month</span>
        </div>
      </div>
    </div>
  );
}