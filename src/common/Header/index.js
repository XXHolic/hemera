import React, {Component} from 'react';
import PropTypes from "prop-types";
import "./style.scss";

class Header extends Component {

   render() {
    const { content } = this.props;

     return (
       <div className="df main-header">
         <div className="flex1 tc main-header-item">
           {content}
         </div>
       </div>
     );
   }
}

Header.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
    PropTypes.element
  ])
};

export default Header;