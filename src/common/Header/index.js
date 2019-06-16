import React, {Component} from 'react';
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

export default Header;