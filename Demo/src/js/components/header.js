import React from 'react';
import {Link} from 'react-router';

//import ReactDOM from 'react-dom';

//传出给外部index.js引用
export default class ComponentHeader extends React.Component {
  constructor(){
    super();
    this.state={
      miniHeader:false //默认正常大小
    }
  };

  switchHeader(){
    this.setState({
      miniHeader:!this.state.miniHeader
    })
  }

  render() {
      const styleComponentHeader = {
        //内联样式
        header:{
          backgroundColor:'#333333',
          color:"#ffffff",
          //js写css
          //"padding-top":"15px",
          //jsx写css 则用驼峰法
          paddingTop:(this.state.miniHeader)? "3px": "15px",
          //jsx内联样式中表达式，state可以引起样式的实时变化
          paddingBottom:(this.state.miniHeader)? "3px": "15px"
        },
        //还可以定义更多其他样式
      }
    return (
      // <header style={styleComponentHeader.header} className="smallFontSize" onClick={this.switchHeader.bind(this)}>
      //   <h1>这里是头部</h1>
      // </header>
      //为了测试router
      <header style={styleComponentHeader.header} className="smallFontSize">
        <h1>这里是头部</h1>
        <ul>
          <li><Link to={"/"}>首页</Link></li>
          <li><Link to={"/detail"}>嵌套的详情页面</Link></li>
          <li><Link to={"/list/1234"}>列表页面</Link></li>
        </ul>
      </header>
    )
  }
}
