import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

test("App component renders", () => {
  const wrapper = shallow(<App />);

  expect(wrapper).toExist;
});

// test("CheckboxWithLabel changes the text after click", () => {
//   // Render a checkbox with label in the document
//   const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);
//
//   expect(checkbox.text()).toEqual("Off");
//
//   checkbox.find("input").simulate("change");
//
//   expect(checkbox.text()).toEqual("On");
// });
// it("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
