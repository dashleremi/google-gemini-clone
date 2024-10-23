import './SideBar.css'
import { FiMenu, FiMessageSquare } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { CiCircleQuestion, CiSettings } from "react-icons/ci";
import { GoHistory } from "react-icons/go";

const SideBar = () => {
  return (
    <div className="sidebar">

        <div className="top">
            <FiMenu className='menu' />
            <div className='new-chat'>
                <FaPlus />
                <p>New Chat</p>
            </div>
            <div className="recent">
                <p className="recent-title">Recent</p>
                <div className="recent-entry">
                    <FiMessageSquare />
                    <p>What is react ...</p>
                </div>
            </div>
        </div>

        <div className="bottom">
            <div className="bottom-item recent-entry">
                <CiCircleQuestion />
                <p>Help</p>
            </div>
            <div className="bottom-item recent-entry">
                <GoHistory />
                <p>Activity</p>
            </div>
            <div className="bottom-item recent-entry">
                <CiSettings />
                <p>Settings</p>
            </div>
        </div>

    </div>
  )
}

export default SideBar