
function Item({ name, isPacked }) {
  return (
    <li>{name} {isPacked ? "✅" : ""}</li>
  )
}


export default function PackingList() {
  const name = ['Space suit', 'Helmet with a golden leaf', 'Photo of Tam'];
  const isPacked = [true, true, false];
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        {name.map((item, index) => (
          <Item
            key={index}
            isPacked={isPacked[index]}
            name={item}
          />
        ))}
      </ul>
    </section>
  );
}