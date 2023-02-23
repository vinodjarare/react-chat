import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";

const Sidebar = ({ toggle }) => {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
      <Chats toggle={toggle} />
    </div>
  );
};

export default Sidebar;
