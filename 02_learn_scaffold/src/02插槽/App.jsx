import React, { Component } from "react";
import ScopeSolt from "./Components/ScopeSolt";
export class App extends Component {
  render() {
    return (
      <div>
        {/* <NavBar>
          <button>按钮1</button>
          <button>按钮1</button>
          <button>按钮1</button>
        </NavBar> */}
        <ScopeSolt
          leftSlot={(item) => <button>{item}</button>}
          CenterSlot={<button>按钮2</button>}
          RightSlot={<button>按钮3</button>}
        ></ScopeSolt>
      </div>
    );
  }
}

export default App;
