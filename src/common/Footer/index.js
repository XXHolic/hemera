import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import "./style.scss";

class Footer extends Component {

   render() {
     return (
       <div className="df main-footer">
         <div className="flex-column flex1 tc main-footer-nav">
           <Link to="/">
             <span className="iconfont">&#xe652;</span>
             <div>X 信</div>
           </Link>
         </div>
         <div className="flex-column flex1 tc main-footer-nav">
           <Link to="/page/addressBook">
             <span className="iconfont">&#xe624;</span>
             <div>通讯录</div>
           </Link>
         </div>
         <div className="flex-column flex1 tc main-footer-nav">
           <Link to="/page/find">
            <span className="iconfont">&#xe628;</span>
            <div>发现</div>

           </Link>
         </div>
         <div className="flex-column flex1 tc main-footer-nav">
           <span className="iconfont">&#xe61d;</span>
           <div>我</div>
         </div>
       </div>
     );
   }
}

export default Footer;