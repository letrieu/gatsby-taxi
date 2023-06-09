import React from "react"
import { Link } from "gatsby"
import { RiArrowLeftSLine, RiCheckboxCircleLine } from "react-icons/ri"

import Seo from "../components/seo"
import Layout from "../components/layout"

const Thanks = () => (
  <Layout className="thanks-page">
    <Seo title="Cảm ơn" />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      <RiCheckboxCircleLine
        style={{
          fontSize: "128px",
          color: "var(--primary-color)",
        }}
      />
      <h1>Got your message</h1>
      <p>Cảm ơn bạn đã liên lạc với chúng tôi. Chúng tôi sẽ liên hệ lại với bạn ngay.</p>
      <Link to="/" className="button">
        <RiArrowLeftSLine className="icon -left" />
        Trở về trang chủ
      </Link>
    </div>
  </Layout>
)

export default Thanks
