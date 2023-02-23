import { FaVideo } from "react-icons/fa";
import { GrMoreVertical } from "react-icons/gr";
import { IoIosAdd } from "react-icons/io";
import Messages from "./Messages";
import Input from "./Input";
import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
const Chat = ({ toggle }) => {
  const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chat-info">
        <div>
          <button onClick={toggle}>back</button>
          <span>{data.user?.displayName}</span>
        </div>
        <div className="chat-icons">
          <FaVideo />
          <IoIosAdd style={{ color: "white" }} />
          <GrMoreVertical />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
