import React from 'react';
//import ReactDOM from 'react-dom';

//传出给外部index.js引用
export default class BodyIndex extends React.Component {

  //页面将要加载
  componentWillMount(){
    //定义所需要的逻辑
    console.log('BodyIndex - componentWillMount');
  }
  componentDidMount(){
    console.log('BodyIndex - componentDidMount');
  }
  render() {
    //变量用于三元表达式,大括号绑定动态属性
    var userName = '默认按钮';
    var boolInput = false;
    var html = 'dmq&nbsp;react';
    var html1 = 'dmq\u0020react';
    return (
      <div>
        <h2>页面的主体内容</h2>
        {/*三元表达式*/}
        <p>{userName ==''? '用户还未登录': '用户名:'+userName}</p>
        <p><input type='button' value={userName} disabled={boolInput}/></p>
        <p>{html}</p>{/*html要显示，需要进行unicode转码*/}
        <p>{html1}</p>
        <p dangerouslySetInnerHTML = {{__html :html }}></p>{/*显示html。此方法可能存在xss攻击*/}
      </div>
    )
  }
}
