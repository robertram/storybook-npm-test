import React from "react";
//import sinon from "sinon";

import { Button } from "./Button";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<Button />", () => {
  it("renders three <Button /> components", () => {
    const wrapper = shallow(
      <Button label="Hola" primary backgroundColor="red" size="small" />
    );
    expect(wrapper.to.have.lengthOf(1));
  });

  test("drinks returns", () => {
    const drink = jest.fn(() => true);

    drink();

    expect(drink).toHaveReturned();
  });
});
