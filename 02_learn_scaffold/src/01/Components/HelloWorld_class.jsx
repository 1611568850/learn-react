import React from "react";
class HelloWord extends React.Component {
  changeCount(count) {
    this.props.addCount(count);
  }
  render() {
    return (
      <div>
        <ul>
          <button onClick={(e) => this.changeCount(1)}>+1</button>
          <button>+10</button>
          <button>+100</button>
        </ul>
      </div>
    );
  }
}
export default HelloWord;
