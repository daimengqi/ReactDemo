import React from 'react';
//import ReactDOM from 'react-dom';

//传出给外部index.js引用
export default class BodyIndex extends React.Component {
  constructor(){
    super();//调用基类的所有初始化方法
    //this.state只作用于自身的class
    this.state = {
      userName : 'dmq',
      age:'20'
    };//初始化赋值
  }
  render() {

    setTimeout(()=>{
      //更改state的时候
      this.setState({userName:'Imooc', age:'35'});
    },4000);

    return (
      <div>
        <h2>页面的主体内容</h2>
        <p>{this.state.userName} {this.state.age} {this.props.userId} {this.props.userName}</p>
      </div>
    )
  }
}
