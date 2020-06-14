import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index';
import ComponentList from './components/list';
import ComponentDetail from './components/detail';
import {Router, Route, hashHistory}from 'react-router';


export default class Root extends React.Component{
  render(){
    return(
      //这里替换了之前的Index，变成了程序的入口,控制页面跳转.
      //需要注意 Route 绑定的 component 中的 class 有没有添加 export default。
      <Router history={hashHistory}>

        <Route component={Index} path="/">
            <Route component={ComponentDetail} path="detail"></Route>
        </Route>

        <Route component={ComponentList} path="list/:id"></Route>
      </Router>

    );
  };
}

//定义入口
ReactDOM.render(<Root/>,document.getElementById('example'));
