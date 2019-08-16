import React from "react"

import Layout from "../components/layout"
import contactStyles from "../styles/contact.module.scss"

const Contact = () => {
  return (
    <Layout>
      <div>
        <div className={contactStyles.header}>
          <h1>Preston Donohoo</h1>
          <h4>Send me a message!</h4>
        </div>
      </div>
      <form className={contactStyles.form}>
        <div className={contactStyles.inputs}>
          <div>First Name </div>
          <div>Last Name</div>
        </div>
        <div className={contactStyles.inputs}>
          <input className={contactStyles.input}></input>
          <input className={contactStyles.input}></input>
        </div>
        <div className={contactStyles.inputs}>
          <div>Phone #</div>
          <div>Email </div>
        </div>
        <div className={contactStyles.inputs}>
          <input className={contactStyles.input}></input>
          <input className={contactStyles.emailInput}></input>
        </div>
        message <textarea className={contactStyles.message}></textarea>
        <button className={contactStyles.button}>send</button>
        
      </form>
    </Layout>
  )
}

export default Contact
