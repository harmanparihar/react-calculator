import React from 'react';
export default class Number extends React.Component{
  onpress(e){
    this.props.buttonpress(e.target.innerHTML);
  }
  render(){
    return(
      <div onClick={this.onpress.bind(this)} className={this.props.classname}>{this.props.val}</div>
    );
  }
}
