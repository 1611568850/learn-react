import React, { PureComponent, createRef } from "react";

class HelloWorld extends PureComponent {
  constructor() {
    super();
    this.dom = createRef();
  }
  test() {
    console.log("test------");
  }

  render() {
    return <h1 ref={this.dom}>Hello World</h1>;
  }
}

export class App extends PureComponent {
  constructor() {
    super();

    this.hwRef = createRef();
  }

  getComponent() {
    console.log(this.hwRef.current.dom.current);
    this.hwRef.current.render();
  }

  render() {
    return (
      <div>
        <HelloWorld ref={this.hwRef} />
        <button onClick={(e) => this.getComponent()}>获取组件实例</button>
      </div>
    );
  }
}

export default App;
