function LogoText(props) {
  const light = props.light ? 'light' : null;
  const noAutoscroll = props.noAutoscroll ? 'no-autoscroll' : null;
  const rounded = props.rounded ? 'rounded' : '';

  return (
    <div className={`hard-skill ${props.direction} ${noAutoscroll}`}>
      <img
        className={`${rounded} ${light}`}
        src={props.logo}
        alt={`logo ${props.title}`}
      />
      <p>{props.children}</p>
    </div>
  );
}
export default LogoText;
