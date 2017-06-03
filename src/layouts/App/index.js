import React, { Component } from "react";
import ReactCSSTranstionGroup from "react-addons-css-transition-group";
import NavMenu from "../NavMenu";
import "./index.css";
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        collapse: true,
        pathname: "home"
    }
    this.handleCollap = this.handleCollap.bind(this);
  }

  handleCollap(){
    this.setState({
      collapse: !this.state.collapse
    });
  }

  componentDidUpdate(prevProps, nextProps){
      const newPathname = window.location.hash.split("#/")[1] || "home";
      console.log(newPathname);
      if(newPathname != nextProps.pathname){
        this.setState({
          pathname: newPathname
        });
      }
  }

  render (){
    const collapse = this.state.collapse;
    return (
      <div>
        <NavMenu collapse={ collapse }  handleCollap={this.handleCollap} pathname={this.state.pathname}/>
        <div className={ collapse ? "main main-collapse" : "main"}>
          <ReactCSSTranstionGroup className="app" component="div" transitionName="app" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
              <div className="content" key={this.props.location.pathname}>
                  { this.props.children }
              </div>
          </ReactCSSTranstionGroup>

        </div>
      </div>
    )
  }
}

export default App;
