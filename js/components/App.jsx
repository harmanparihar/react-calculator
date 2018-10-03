import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Buttons from './Buttons.jsx';
import Display from './Display.jsx';
import * as math from 'mathjs';

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      dis_num: 0,
      result:0,
    };
  }
  buttonpress(dis_num){
    if(this.state.dis_num == 0){
      this.setState({dis_num : dis_num});
      this.setState({result : dis_num});
    } else if(dis_num == "AC"){
      this.setState({dis_num: 0});
      this.setState({result: 0});
    } else if(dis_num == "\u00F7"){
      this.setState({result : (this.state.dis_num + "/")});
      this.setState({dis_num : (this.state.dis_num + dis_num)});
    }else if(dis_num == "\u00D7"){
      this.setState({result : (this.state.dis_num + "*")});
      this.setState({dis_num : (this.state.dis_num + dis_num)});
    }else if(dis_num == "+/-"){
      this.setState({dis_num: eval(this.state.result)*(-1)});
      this.setState({result : eval(this.state.result)*(-1)});
    }else if(dis_num == "%"){
      this.setState({dis_num: eval(this.state.result)*(0.01)});
      this.setState({result : eval(this.state.result)*(0.01)});
    }else if(dis_num == "="){
      this.setState({dis_num: eval(this.state.result)});
      this.setState({result : eval(this.state.result)});

    }else {
      this.setState({dis_num : (this.state.dis_num + dis_num)});
      this.setState({result : (this.state.result + dis_num)});
    }
    console.log(this.state.result);

  }
  render(){
  return(
  <div>
    <Display dis_num={this.state.dis_num}/>
    <Buttons buttonpress={this.buttonpress.bind(this)}/>
  </div>
  );
  }
}
