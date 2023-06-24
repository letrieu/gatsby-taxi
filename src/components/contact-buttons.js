import React from "react"

const ContactButtons = () => (
  <div id="button-contact-vr" className="">
    <div id="gom-all-in-one">
      <div id="zalo-vr" className="button-contact">
        <div className="phone-vr">
          <div className="phone-vr-circle-fill" />
          <div className="phone-vr-img-circle">
            <a target="_blank" href="https://zalo.me/0768026026">
              <img src="/assets/zalo.png" />
            </a>
          </div>
        </div>
      </div>
      <div id="phone-vr" className="button-contact">
        <div className="phone-vr">
          <div className="phone-vr-circle-fill" />
          <div className="phone-vr-img-circle">
            <a href="tel:0817226799">
              <img src="/assets/phone.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ContactButtons