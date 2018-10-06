import React from 'react';
export default class Display extends React.Component{
  render(){
    return(
      <div className="display">{this.props.dis_num}</div>
    );
  }
}
