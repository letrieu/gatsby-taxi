import React from "react"
import { Link } from "gatsby"
import { RiArrowLeftSLine, RiBugLine, RiSkullLine } from "react-icons/ri"

import Seo from "../components/seo"
import Layout from "../components/layout"

const NotFound = () => (
  <Layout className="not-found-page">
    <Seo title="Trang không tồn tại" />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      <header>
        <RiSkullLine
          style={{
            fontSize: "128px",
            color: "var(--primary-color)",
          }}
        />
        <h1>Rất tiếc, chúng tôi không mong đợi điều đó xảy ra</h1>
        <p>
          Có lỗi xảy ra
        </p>
      </header>
      <Link to="/" className="button">
        <RiArrowLeftSLine className="icon -left" />
        Trở lại trang chủ
      </Link>
      <Link to="/contact" className="button -outline">
        Báo lỗi <RiBugLine className="icon -right" />
      </Link>
    </div>
  </Layout>
)

export default NotFound
