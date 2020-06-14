var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import BodyIndex from './components/bodyindex';
import "antd/dist/antd.css";


export default class Index extends React.Component{
  //页面将要加载
  componentWillMount(){
    //定义所需要的逻辑
    console.log('Index - componentWillMount');
  }
  //页面加载完毕
  componentDidMount(){
    console.log('Index - componentDidMount');
  }
  render(){
    //组件可以通过参数传递
    //var component = <ComponentHeader/>;
    return(
      //每个render只能返回一个节点。要返回多个节点，只能把他们包裹在一个div里
      <div>
        {/*{component}*/}
        <ComponentHeader/>
        {/*<BodyIndex userId = {10140436} userName = {'dai'}/>*/}
        <BodyIndex userId = {10140436} userName = {'dai'} />

        <div>
          {this.props.children}
        </div>
        <ComponentFooter/>

      </div>
    )
  }
}



// var ExampleApplication = React.createClass({
//         render: function() {
//           var elapsed = Math.round(this.props.elapsed  / 100);
//           var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
//           var message =
//             'React has been successfully running for ' + seconds + ' seconds.';

//           return React.DOM.p(null, message);
//         }
//       });

//       // Call React.createFactory instead of directly call ExampleApplication({...}) in React.render
//       var ExampleApplicationFactory = React.createFactory(ExampleApplication);

//       var start = new Date().getTime();
//       setInterval(function() {
//         ReactDOM.render(
//           ExampleApplicationFactory({elapsed: new Date().getTime() - start}),
//           document.getElementById('example')
//         );
//       }, 50);
