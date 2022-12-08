import { render } from "@testing-library/react";
import { LoadingContext } from "../../contexts/LoadingContext";
import { LoadingSpinner } from "./LoadingSpinner";

describe("Loading Spinner Component", () => {
  it("should render if loading context i true", () => {
    const { getByTestId } = render(
      <LoadingContext.Provider value={{ loading: true }}>
        <LoadingSpinner />
      </LoadingContext.Provider>
    );

    expect(getByTestId("loading")).toBeInTheDocument();
  });
  it("not should render component when loading is false", () => {
    const { queryByTestId } = render(
      <LoadingContext.Provider value={{ loading: false }}>
        <LoadingSpinner />
      </LoadingContext.Provider>
    );

    expect(queryByTestId("loading")).not.toBeInTheDocument();
  });
});
