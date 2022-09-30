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
        비주기적인 맛집탐방<br></br>theme from by <Link to="https://github.com/stackrole/gatsby-starter-foundation">gatsby-starter-foundation</Link>
      </p>
    </div>
  </footer>
)

export default Footer
