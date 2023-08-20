import { render } from "@testing-library/react";
import {MakeRenderContextComponent} from './factory/MakeRenderComponent'

describe("Loading Spinner Component", () => {
  it("should render if loading context i true", () => {
    const { getByTestId } = render(
      <MakeRenderContextComponent isLoading={true}/>
    );

    expect(getByTestId("loading")).toBeInTheDocument();
  });
  it("not should render component when loading is false", () => {
    const { queryByTestId } = render(
      <MakeRenderContextComponent isLoading={false}/>
    );

    expect(queryByTestId("loading")).not.toBeInTheDocument();
  });
});
