import Sidebar from "./Sidebar";

const Drawer = ({ isAnimating, isOpen, toggle }) => {
  return (
    <div
      className={`drawer ${isOpen ? "open" : ""} ${
        isAnimating ? "animating" : ""
      }`}
    >
      <Sidebar toggle={toggle} />
    </div>
  );
};

export default Drawer;
