import React, {useState} from "react"
import Linkedin from '../images/linkedin.inline.svg'
import Github from '../images/github.inline.svg'
import axios from 'axios'

// const axios = require('axios')


import Layout from "../components/layout"
import contactStyles from "../styles/contact.module.scss"

const Contact = () => {

  // const [firstName, setfirstName] = useState('')
  // const [lastName, setlastName] = useState('')
  // const [phoneNumber, setphoneNumber] = useState('')
  // const [email, setEmail] = useState('')
  // const [message, setmessage] = useState('')


  // const onSubmit = (e) => {
  //   e.preventDefault()
  //   alert('worked')
  //   sendMessage()
  // }

  // const handleChange = (e) => {
  //   setfirstName(e.target.name = e.target.value)
  //   setlastName(e.target.name = e.target.value)
  //   setphoneNumber(e.target.name = e.target.value)
  //   setEmail(e.target.name = e.target.value)
  //   setmessage(e.target.name = e.target.value)
  //   console.log(setlastName)
  // }

  // const GOOGLE_FORM_FIRSTNAME_ID = 'entry.1751171160'
  // const GOOGLE_FORM_LASTNAME_ID = 'entry.344642064'
  // const GOOGLE_FORM_PHONENUMBER_ID = 'entry.646590667'
  // const GOOGLE_FORM_EMAIL_ID = 'entry.1971860555'
  // const GOOGLE_FORM_MESSAGE_ID = 'entry.1101212898'
  // const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfYb3KwcAUR4lbasB7Ay-SmGy09Wb1WFFqyvd74l4BWA4GH3w/formResponse'
  // const CORS_PROXY = 'https://cors-escape.herokuapp.com/'

  // const sendMessage = () => {

  //   const formData = new formData()
    
  //   formData.append(GOOGLE_FORM_FIRSTNAME_ID, firstName)
  //   formData.append(GOOGLE_FORM_LASTNAME_ID, lastName)
  //   formData.append(GOOGLE_FORM_PHONENUMBER_ID, phoneNumber)
  //   formData.append(GOOGLE_FORM_EMAIL_ID, email)
  //   formData.append(GOOGLE_FORM_MESSAGE_ID, message)

  //   axios.post(CORS_PROXY + GOOGLE_FORM_ACTION_URL, formData)
  //   .then(() => {
  //     setfirstName('')
  //     setlastName('')
  //     setphoneNumber('')
  //     setEmail('')
  //     setmessage('')
  //   }).catch(() => {
      
  //   })
  // }
  
  

  return (
    <Layout>
      <div>
        <div className={contactStyles.header}>
          <h1>Preston Donohoo</h1>
          <h4>Send me a message!</h4>
        </div>
          <div className={contactStyles.header}>
          Email:<a href='mailto:preston.s.donohoo@gmail.com'>Preston Donohoo</a>
          <div style={{padding: '20px'}}>
            <a style={{ margin: '5px' }} href='https://www.linkedin.com/in/prestondonohoo/' target='_blank' rel="noopener noreferrer"><Linkedin style={{width: '50px' }}></Linkedin></a>
            <a style={{ margin: '5px' }} href='https://github.com/pdonohoo' target='_blank'  rel="noopener noreferrer" ><Github style={{width: '50px'}} />  </a>
          </div>
          </div>
      </div>
      {/* <form  className={contactStyles.form}>
        <div className={contactStyles.inputs}>
          <div>First Name </div>
          <div>Last Name</div>
        </div>
        <div className={contactStyles.inputs}>
          <input onChange={handleChange} name='firstName' value={firstName} className={contactStyles.input}></input>
          <input onChange={handleChange} name='lastName' value={lastName} className={contactStyles.input}></input>
        </div>
        <div className={contactStyles.inputs}>
          <div>Phone Number </div>
          <div>Email </div>
        </div>
        <div className={contactStyles.inputs}>
          <input onChange={handleChange} name='phoneNumber' value={phoneNumber}  className={contactStyles.input}></input>
          <input onChange={handleChange} name='Email' value={email} className={contactStyles.emailInput}></input>
        </div>
        message <textarea onChange={handleChange} name='message' value={message} className={contactStyles.message}></textarea>
        <button onChange={handleChange} onClick={onSubmit} className={contactStyles.button}>send</button>
        
      </form> */}
    </Layout>
  )
}

export default Contact
