import "./styles.css";

function getImageUrl(imageId, size = 's') {
  return (
    'https://i.imgur.com/' +
    imageId +
    size +
    '.jpg'
  );
}

function Profile({ name, imageId, imgsize = 70, profession, awards, discovery }) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageId)}
        alt={name}
        width={{imgsize}}
        height={{imgsize}}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awards.length} </b>
          {awards.join(', ')}
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  )
}

export default function CompoExtract() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Ada Lovelace"
        imageId="YfeOqp2"
        profession="Mathematician"
        awards={['Honorary Doctor of Science', 'Silver Medal of the Royal Society']}
        discovery="First computer programmer" />
    </div>
  );
}
