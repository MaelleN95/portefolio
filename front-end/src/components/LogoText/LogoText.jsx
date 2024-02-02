function LogoText(props) {
  const light = props.light ? 'light' : null;

  return (
    <div className={`hard-skill ${props.direction}`}>
      <img className={light} src={props.logo} alt={`logo ${props.title}`} />
      <p>{props.children}</p>
    </div>
  );
}
export default LogoText;
