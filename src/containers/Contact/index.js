import React, { Component } from "react";
import "./index.css";
import { Modal } from "antd";

class Contact extends Component{
  constructor(props){
    super(props);
    this.state = {
      visible:false,
      img:""
    }
    this.handlCancel = this.handlCancel.bind(this)
    this.showModal = this.showModal.bind(this)
  }

  handlCancel(e){
     this.setState({
      visible:false,
      img:""      
    });
  }
  showModal(e){
    this.setState({
      visible:true,
      img:e.currentTarget.getAttribute("data-src")
    });
  }
  render(){
    return (
        <div className="contact">
            <h1 className="contact-title">联系我</h1>
            <div className="contact-content"></div>
              <div className=" -main">
                <div className="main-item" data-src="https://avatars3.githubusercontent.com/u/26476759?v=3&s=460" onClick={this.showModal}>
                  <div className="contact-icon">
                    <i className="iconfont icon-weixin"></i>
                    <div className="item-content">QQ：553585163</div>
                  </div>
                </div>
                <div className="main-item" data-src="https://github.com/loungcingzeon/react-resume/blob/master/dist/images/wx.jpg" onClick={this.showModal}>
                  <div className="contact-icon">
                    <i className="iconfont icon-qq"></i>
                    <div className="item-content">微信：CHENGJINLEUNG</div>
                  </div>
                </div>
                <a href="mailto:loungcingzeon@sina.com" className="main-item">
                  <div className="contact-icon">
                    <i className="iconfont icon-email"></i>
                    <div className="item-content">邮箱：loungcingzeon@sina.com</div>
                  </div>
                </a>
              </div>
              <div className="contact-other">
                  <p className="other-title">其他方式</p>
                  <div className="other-content">
                    <a href="javascript:void(0)" className="other-item">
                      <i className="iconfont icon-github"></i>
                    </a>
                    <a href="javascript:void(0)" className="other-item">
                      <i className="iconfont icon-zhihu"></i>
                    </a>
                    <a href="javascript:void(0)" className="other-item">
                      <i className="iconfont icon-weibo"></i>
                    </a>
                  </div>
              </div>
              <Modal footer="" visible={this.state.visible} onCancel={this.handlCancel}>
                <div style={{width:"100%", textAlign:"center"}}>
                  <img style={{maxWidth:"100%"}} src={this.state.img} alt=""/>
                </div>
              </Modal>
        </div>
    )
  }
}

export default Contact;
