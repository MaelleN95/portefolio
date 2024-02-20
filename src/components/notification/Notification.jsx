function Notification({ type, children }) {
  return <div className={`notification ${type}`}>{children}</div>;
}
export default Notification;
