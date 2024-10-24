import { useContext } from 'react';
import './Main.css'
import { CiRollingSuitcase, CiDesktop, CiBrightnessUp, CiAlarmOn, CiImageOn, CiMicrophoneOn, CiLocationArrow1 } from "react-icons/ci";
import { Context } from '../../context/context';
import { SiGooglegemini } from "react-icons/si";

const Main = () => {

    const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context);

  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img className='user-image' src="/src/assets/user-pic.jpg" alt="" />
        </div>

        <div className="main-container">

            {!showResult
            ?<>
                        <div className="greet">
                <p><span>Hello, Emi</span></p>
                <p>How can I help you today?</p>
            </div>

            <div className="cards">
                <div className="card">
                    <p className='topic'>Travel Inspiration: </p>
                    <p>Plan a two-day itinerary for visiting historic cities.</p>
                    <CiRollingSuitcase className='card-img' size={35} />
                </div>
                <div className="card">
                    <p className='topic'>Tech Insights: </p>
                    <p>Compare the pros and cons of using TypeScript and JavaScript.</p>
                    <CiDesktop className='card-img' size={35} />
                </div>
                <div className="card">
                    <p className='topic'>Health & Wellness: </p>
                    <p>Suggest daily mindfulness exercises for beginneres.</p>
                    <CiBrightnessUp className='card-img' size={35} />
                </div>
                <div className="card">
                    <p className='topic'>Productivity Tips: </p>
                    <p>Share time management techniques for remote workers.</p>
                    <CiAlarmOn className='card-img' size={35} />
                </div>
            </div>

            </>
            : <div className='result'>
                <div className="result-title">
                    <img className='user-image' src="/src/assets/user-pic.jpg" alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <SiGooglegemini className='gemini-img' size={30} color='#a5b4fc'/>
                    {loading
                    ?<div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    :<p dangerouslySetInnerHTML={{__html:resultData}}></p>}
                </div>
            </div>
            }

            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                    <div className='search-img'>
                        <CiImageOn size={30} />
                        <CiMicrophoneOn size={30} />
                        <CiLocationArrow1 onClick={() => onSent()} size={30} />
                    </div>
                </div>
                <p className='bottom-info'>Gemini can make mistakes, so double-check it</p>
            </div>
        </div>
    </div>
  )
}

export default Main