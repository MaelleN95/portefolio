function SoftSkillBubble(props) {
  const color = props.color === 0 ? 'blue' : 'red';

  return <div className={`bubble ${color}`}>{props.children}</div>;
}
export default SoftSkillBubble;
