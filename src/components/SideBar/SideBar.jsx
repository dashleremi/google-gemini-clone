import './SideBar.css'
import { FiMenu, FiMessageSquare } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { GoHistory, GoPlus, GoQuestion } from "react-icons/go";
import { useContext, useState } from 'react';
import { Context } from '../../context/context';

const SideBar = () => {

    const [extended, setExtended] = useState(false)
    const {onSent, prevPrompts, setRecentPrompt, newChat} = useContext(Context)

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

  return (
    <div className="sidebar">

        <div className="top">
            <FiMenu onClick={() => setExtended(prev=>!prev)} className='menu image-icon' size={25} />
            <div onClick={() => newChat()} className='new-chat'>
                <GoPlus className='image-icon' size={25} />
                {extended?<p>New Chat</p>: null}
            </div>

            {extended
            ?<div className="recent">
                <p className="recent-title">Recent</p>
                {prevPrompts.map((item, index)=> {
                    return (
                        <div key={index} onClick={()=> loadPrompt(item)} className="recent-entry">
                         <FiMessageSquare className='image-icon' size={18} />
                            <p>{item.slice(0,18)} ...</p>
                        </div>
                    )
                })}
            </div>: null}
        </div>

        <div className="bottom">
            <div className="bottom-item recent-entry">
                <GoQuestion className='image-icon' size={25} />
                {extended?<p>Help</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <GoHistory className='image-icon' size={25} />
                {extended?<p>Activity</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <IoSettingsOutline className='image-icon' size={25} />
                {extended?<p>Settings</p>:null}
            </div>
        </div>

    </div>
  )
}

export default SideBar