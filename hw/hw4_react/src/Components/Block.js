import React from 'react';

class Block extends React.Component {
   
    //ADD CODE HERE
  constructor(props) {
    super(props);
  }

  render() {

  const mystyle = {
      backgroundColor: this.props.color
    };

  return (
    <>
      <div className = "blockers" style={
        mystyle
        }>
      </div>
      
      <div className="bottom">
          <div className="white"></div>
      </div>


    </>
      );
    }
  }


  export default Block;