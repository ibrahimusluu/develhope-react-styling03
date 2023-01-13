// import { Hello } from "./Hello";
import React from "react";
// import { TodoList } from "./TodoList";
// import { Counter } from "./Counter";
// import { ClickTracker } from "./ClickTracker";
// import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
// import { UncontrolledLogin } from "./UncontrolledLogin";

// const todos = [
//   { id: 1, title: "Call Katherine about the trip", completed: false },
//   { id: 2, title: "Buy tickets", completed: true },
//   { id: 3, title: "Finish the presentation", completed: false },
//   { id: 4, title: "Invite John", completed: true },
//   { id: 5, title: "Rent a car", completed: false },
// ];

export class App extends React.Component {
  // defaultLoginStatus = {
  //   status: "failure!",
  // };

  render() {
    return (
      <div>
        {/* <Hello /> */}
        {/* <Counter
          initialValue={0}
          incrementAmount={2}
          incrementInterval={1000}
        /> */}
        {/* <ClickTracker /> */}
        {/* <InteractiveWelcome /> */}
        <Login login="test" />
        {/* <UncontrolledLogin login={this.defaultLoginStatus} /> */}
        {/* <TodoList /> */}
      </div>
    );
  }
}
