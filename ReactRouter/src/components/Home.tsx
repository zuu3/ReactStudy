import Rooms from "../Rooms.ts";
import Header from "./Header.tsx";
// import Card from "./Card.jsx";
import Router from "../Router.tsx";
import "../App.css";
import { useNavigate } from "react-router-dom";

interface Room {
  key: number;
  name: string;
  location: string;
  totalGuest: string;
  rating: string;
  numberOfRating: string;
  price: string;
  image: string;
}

const Home = () => {
  const navigate = useNavigate();
  const handleClick = (room: Room) => {
    navigate("/card", {
      state: {
        key: room.key,
        name: room.name,
        location: room.location,
        totalGuest: room.totalGuest,
        numberOfRating: room.numberOfRating,
        rating: room.rating,
        price: room.price,
        image: room.image,
      },
    });
  };

  return (
    <>
      <Router />
      <div id="warpper">
        {
          Rooms.map((room) => {
            return (
              <div onClick={() => handleClick(room)} className="box" key={room.key}>
                <img src={room.image} />
                <div>{room.name}</div>
              </div>
            )
          })
        }
      </div>
     </>
  );
};
export default Home;