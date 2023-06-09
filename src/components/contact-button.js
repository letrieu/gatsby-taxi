import React from "react"
import { FiPhoneCall } from "react-icons/fi"

const ContactButton = () => (
  <a href='tel:0773749749'
    style={{
      position: "fixed",
      width: "200",
      height: 50,
      backgroundColor: "red",
      bottom: 10,
      right: 10,
      borderRadius: 10
    }}
  >
    <div className="container" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%'
    }}>
      <span className="icon" style={{ marginRight: 10 }}>
        <FiPhoneCall />
      </span>
      Đặt xe: 0773 749 749
    </div>
  </a>
)

export default ContactButton