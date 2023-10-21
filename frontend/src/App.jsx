import { useState } from 'react'
import axios from 'axios'
import hero from './assets/hero.png'
import './app.css'
const App = () => {

  const [chatMsg, setChatMsg] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    await axios.post('https://slack-backend-ssu6.onrender.com/api/v1/sendChat', { chatMsg })
    setChatMsg('')
  }

  const onChangeHandler = (e) => {
    setChatMsg(e.target.value)

  }
  return (
    <div className="container">
      <div className="image-container">
        <img src={hero} className="image" alt="Hero" />
      </div>
      <div className="form-container">
        <form onSubmit={onSubmitHandler}>
          <h1>Send a Slack notification!</h1>
          <div>
            <p>Use Novu to send notifications directly to a channel</p>
            <p>in a Slack workspace.</p>
            <p>Get started <a href="https://docs.novu.co/channels-and-providers/chat/slack">here!</a></p>
          </div>
          <input
            value={chatMsg}
            onChange={onChangeHandler}
            className="input-field"
            placeholder="Enter notification text"
          />
          <button className="button">Send</button>
        </form>
      </div>
    </div>
  )
}

export default App
