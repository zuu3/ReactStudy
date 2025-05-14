import "./App.css";
import roomDetails from "./Rooms.js";
import Card from "./components/Card";
export default function CardList() {
  return (
    <div>
      <h2>Your result is here!</h2>
      {roomDetails.map((item) => (
        <Card
          key={item.key}
          name={item.name}
          location={item.location}
          totalGuest={item.totalGuest}
          numberOfRating={item.numberOfRating}
          rating={item.rating}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
}