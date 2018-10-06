import React from 'react';
import Number from './Number.jsx'
export default class Buttons extends React.Component{

  render(){
    return(
      <div className="num-container">
      <Number buttonpress={this.props.buttonpress} val={"AC"} classname={"num op-1"}/>
      <Number buttonpress={this.props.buttonpress} val={"+/-"} classname={"num op-1"}/>
      <Number buttonpress={this.props.buttonpress} val={"%"} classname={"num op-1"}/>
      <Number buttonpress={this.props.buttonpress} val={"\u00F7"} classname={"num op"}/>
      <Number buttonpress={this.props.buttonpress} val={7} classname={"num"}/>
      <Number buttonpress={this.props.buttonpress} val={8} classname={"num"}/>
      <Number buttonpress={this.props.buttonpress} val={9} classname={"num"}/>
      <Number buttonpress={this.props.buttonpress} val={"\u00D7"} classname={"num op"}/>
      <Number buttonpress={this.props.buttonpress} val={4} classname={"num"}/>
      <Number buttonpress={this.props.buttonpress} val={5} classname={"num"}/>
      <Number buttonpress={this.props.buttonpress} val={6} classname={"num"}/>
      <Number buttonpress={this.props.buttonpress} val={"-"} classname={"num op"}/>
      <Number buttonpress={this.props.buttonpress} val={1} classname={"num"}/>
      <Number buttonpress={this.props.buttonpress} val={2} classname={"num"}/>
      <Number buttonpress={this.props.buttonpress} val={3} classname={"num"}/>
      <Number buttonpress={this.props.buttonpress} val={"+"} classname={"num op"}/>
      <Number buttonpress={this.props.buttonpress} val={0} classname={"num zero"}/>
      <Number buttonpress={this.props.buttonpress} val={"."} classname={"num"}/>
      <Number buttonpress={this.props.buttonpress} val={"="} classname={"num op"}/>
      </div>
    );
  }
}
