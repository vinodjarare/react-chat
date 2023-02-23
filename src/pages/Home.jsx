import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import { useEffect, useState } from "react";
import Drawer from "../components/Drawer";
const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleDrawer = () => {
    setIsAnimating(true);
    setIsOpen(!isOpen);

    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log(windowWidth);
  return (
    <div className="home">
      <div className="container">
        {windowWidth > 800 ? (
          <Sidebar toggle={toggleDrawer} />
        ) : (
          <Drawer
            toggle={toggleDrawer}
            isOpen={isOpen}
            isAnimating={isAnimating}
          />
        )}

        <Chat toggle={toggleDrawer} />
      </div>
    </div>
  );
};

export default Home;
