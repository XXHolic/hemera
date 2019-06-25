import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import "./style.less";

class Footer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active:'1'
    }

    this.onClickNav = this.onClickNav.bind(this);
  }

  onClickNav(index) {

    this.setState({
      active:index
    })
  }

  render() {
    const {active} = this.state;
    console.info('active',active)

    const nav1Class = active==="1"?"main-footer-nav-active":"";
    const nav2Class = active==="2"?"main-footer-nav-active":"";
    const nav3Class = active==="3"?"main-footer-nav-active":"";
    const nav4Class = active==="4"?"main-footer-nav-active":"";

    return (
      <div className="df main-footer">
        <div className="flex-column flex1 tc main-footer-nav">
          <Link
            className={nav1Class}
            to="/page/message"
            onClick={this.onClickNav.bind(this, "1")}
          >
            <span className="iconfont">&#xe652;</span>
            <div>X 信</div>
          </Link>
        </div>
        <div className="flex-column flex1 tc main-footer-nav">
          <Link
            className={nav2Class}
            to="/page/addressBook"
            onClick={this.onClickNav.bind(this, "2")}
          >
            <span className="iconfont">&#xe624;</span>
            <div>通讯录</div>
          </Link>
        </div>
        <div className="flex-column flex1 tc main-footer-nav">
          <Link
            className={nav3Class}
            to="/page/find"
            onClick={this.onClickNav.bind(this, "3")}
          >
            <span className="iconfont">&#xe628;</span>
            <div>发现</div>
          </Link>
        </div>
        <div className="flex-column flex1 tc main-footer-nav">
          <Link
            className={nav4Class}
            to="/page/mine"
            onClick={this.onClickNav.bind(this, "4")}
          >
            <span className="iconfont">&#xe61d;</span>
            <div>我</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Footer;