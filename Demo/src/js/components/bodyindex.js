import React from 'react';
import ReactDOM from 'react-dom';
import ReactMixin from 'react-mixin';
import BodyChild from './bodychild';
import MixinLog from './mixins';

 import { Input } from 'antd';

//定义默认值
const defaultProps = {
  userName:'这是一个默认的用户名'
};

//传出给外部index.js引用
export default class BodyIndex extends React.Component {
  constructor(){
    super();//调用基类的所有初始化方法
    //this.state只作用于自身的class
    this.state = {
      userName : 'dmq',
      age:20
    };//初始化赋值
  };

  changeUserInfo(age){
    //this.setState({age:'50'});
    this.setState({age:age});
    //第一种方式，纯html，性能安全上较差
    // var mySubmitButton = document.getElementById('submitButton');
    // console.log(mySubmitButton);
    // ReactDOM.findDOMNode(mySubmitButton).style.color = 'red';

    //第二种方式,通过 refs来访问组件内部dom节点的唯一可靠方法，会自动销毁对子组件的引用
    console.log(this.refs.submitButton);
    this.refs.submitButton.style.color="blue";

    MixinLog.log();
  };

  handleChildValueChange(event){
    this.setState({age:event.target.value});
  };

  render() {
    // setTimeout(()=>{
    //   //更改state的时候
    //   this.setState({userName:'Imooc', age:'35'});
    // },4000);

    return (
      <div>
        <h2>页面的主体内容</h2>
        <p>接收到的父页面的属性: userId: {this.props.userId}  userName: {this.props.userName}</p>
        <p>age:{this.state.age}</p>
        <Input placeholder="Basic usage" />
        {/*传参写法*/}
        <Input id='submitButton'  ref='submitButton' type='button' value='提交' onClick={this.changeUserInfo.bind(this,90)}/>
          {/*传所有参写法*/}
        <BodyChild {...this.props} id={777} handleChildValueChange={this.handleChildValueChange.bind(this)}/>
      </div>
    )
  }
}

//声明的类中定义
BodyIndex.proptypes = {
  userId: React.PropTypes.number.isRequired
};

//自定义参数默认值
BodyIndex.defaultProps = defaultProps;

ReactMixin(BodyIndex.proptypes,MixinLog);
