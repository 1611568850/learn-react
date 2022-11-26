import React from "react";
// import HelloWord from "./Components/HelloWorld_class";
// import AppFunc from "./Components/App_func";
import Shopping from "./Components/Shopping";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sum: 0,
      category: ["热门", "流行", "潮流"],
      showIndex: 0,
    };
  }
  addCount(count) {
    this.setState({
      sum: count + this.state.sum,
    });
  }
  showMessage(index) {
    this.setState({ showIndex: index });
  }
  render() {
    const { category, showIndex } = this.state;
    return (
      <div className="container">
        <Shopping
          className="shop_header"
          category={category}
          showMessage={(index) => this.showMessage(index)}
        ></Shopping>
        <div>{category[showIndex]}</div>
        {/* <div>{sum}</div> */}
        {/* <HelloWord addCount={(count) => this.addCount(count)}></HelloWord> */}
        {/* <AppFunc></AppFunc> */}
      </div>
    );
  }
}
export default App;
