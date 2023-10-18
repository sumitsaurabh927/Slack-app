import { useState } from 'react'
import axios from 'axios'
import hero from './assets/hero.png'

const App = () => {

  const [chatMsg, setChatMsg] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    await axios.post('https://slack-backend-ssu6.onrender.com/api/v1/sendChat', { chatMsg })
  }

  const onChangeHandler = (e) => {
    setChatMsg(e.target.value)

  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: '100vh', fontFamily: 'Montserrat, sans-serif' }}>
      <div style={{ width: '50%', flex: 1 }}>
        <img src={hero} style={{ width: '800px' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
        <form onSubmit={onSubmitHandler} style={{ marginBottom: '5rem' }}>
          <h1>Send a Slack notification!</h1>
          <div>
            <p>
              Use Novu to send notifications directly to a channel
            </p>
            <p>
              in a Slack workspace.
            </p>
            <p>
              Get started <a href='https://docs.novu.co/channels-and-providers/chat/slack'> here!</a>
            </p>
          </div>
          <input value={chatMsg} onChange={onChangeHandler} style={{ marginRight: '1rem', padding: '0.2rem' }} placeholder='Enter notification text' />
          <button style={{ padding: '0.2rem 1rem' }}>Send</button>
        </form>
      </div>
    </div >
  )
}

export default App
