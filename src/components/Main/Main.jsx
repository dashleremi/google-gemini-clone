import './Main.css'

const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img className='user-image' src="/src/assets/user-pic.jpg" alt="" />
        </div>

        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Emi</span></p>
                <p>How can I help you today?</p>
            </div>

            <div className="cards">
                <div className="card">
                    <p></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main