//公共共用组件
const MixinLog = {
  //和页面一样有生命周期
  componentDidMount(){
    //可写一些函数默认公用的属性
    console.log("MixinLog-componentDidMount");
  },
  log(){
    console.log("abcefg...");
  }
};

export default MixinLog
