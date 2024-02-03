function Card(props) {
  const { title, logo, content, state } = props;
  return (
    <article className={`card ${state}`}>
      <h3>{title}</h3>
      <p>{content}</p>
      <img src={logo} alt={title} />
    </article>
  );
}

export default Card;
