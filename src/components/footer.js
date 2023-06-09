/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p>
        Dịch vụ đặt xe đồng tháp - <a href="tel:0773749749">0773 749 749</a>
      </p>
    </div>
  </footer>
)

export default Footer
