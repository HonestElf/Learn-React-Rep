import React from "react";
import App, { Title } from "../App";
import { shallow, mount, render } from "enzyme";

import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

describe("Sum 1+2 ===3", () => {
  it("Проверка", () => {
    expect(1 + 2).toEqual(3);
  });

  it("Title have children Welcome to react with shallow", () => {
    const wrapper = shallow(<App />);
    const title = wrapper.find(Title);

    expect(title.props().children).toEqual("Welcome to react");
  });

  it("Title have children Welcome to react with mount", () => {
    const wrapper = mount(<App />);
    const title = wrapper.find(Title);

    expect(title.props().children).toEqual("Welcome to react");
  });

  it("Тестирование статического монтирования", () => {
    const wrapper = render(<App title="Welcome to react" />);
    console.log(wrapper);
    expect(wrapper.find("h1.App-title").text()).toEqual("Welcome to react");
  });
});
