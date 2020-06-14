import React from 'react';

//引用本地的css
// var footerCss = require("../../css/footer.css");
//
// //传出给外部index.js引用
// export default class ComponentFooter extends React.Component {
//   render() {
//     return (
//       <footer class={footerCss.miniFooter}>
//         <h1>这里是页脚，设置一些版权信息。</h1>
//       </footer>
//     )
//   }
// }

//传出给外部index.js引用
export default class ComponentFooter extends React.Component {
  render() {
    //将css代码转换为react内联样式
    var styleComponentFooter =
      {
        "miniFooter": {
          "backgroundColor": "#333333",
          "color": "#ffffff",
          "paddingLeft": "20px",
          "paddingTop": "3px"
        },
        "miniFooter_h1": {
          "fontSize": "15px"
        }
      };

    return (
      //使用react内联样式
      <footer style={styleComponentFooter.miniFooter}>
        <h1 style={styleComponentFooter.miniFooter_h1}> 这里是页脚， 设置一些版权信息。</h1>
      </footer>
    )
  }
}
