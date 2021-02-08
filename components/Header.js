import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faLaptop, faMobileAlt } from "@fortawesome/free-solid-svg-icons/";
import { config } from "@fortawesome/fontawesome-svg-core";

const Header = (props) => (
  <header id="header" style={props.timeout ? { display: "none" } : {}}>
    <div style={AppStyle.divStyle}>
      <FontAwesomeIcon icon={faLaptop} />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <FontAwesomeIcon icon={faMobileAlt} />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Raphael O Martins</h1>
        <p>Desenvolvedor de Aplicativos </p>
        <p>Freelancer</p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle("intro");
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle("work");
            }}
          >
            Serviços
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle("contact");
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
);
var AppStyle = {
  divStyle: {
    display: "flex",
    width: 230,
    marginLeft :30%
  },
  // , here you can add lots of another styles for your component
};
Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
};

export default Header;
