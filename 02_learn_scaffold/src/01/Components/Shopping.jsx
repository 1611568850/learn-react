import React, { Component } from "react";
import "../index.css";

export class Shopping extends Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
    };
  }
  chooseItem(index) {
    this.setState({
      currentIndex: index,
    });
    this.props.showMessage(index);
  }
  render() {
    const { currentIndex } = this.state;
    const { category } = this.props;
    // console.log("zheli", category);
    return (
      <div className="categoryContainer">
        <ul className="categoryUl">
          {category.map((item, index) => {
            return (
              <div className="categoryItem" key={index}>
                <span
                  className={currentIndex === index ? "highLight" : ""}
                  onClick={(e) => this.chooseItem(index)}
                >
                  {item}
                </span>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Shopping;
