import { render } from "@testing-library/react";
import MapComponent from "../MapComponent";

jest.mock("mapbox-gl", () => ({
  Map: jest.fn(() => ({
    on: jest.fn(),
    addControl: jest.fn(),
    addSource: jest.fn(),
    addLayer: jest.fn(),
    setTerrain: jest.fn(),
  })),
  NavigationControl: jest.fn(),
  GeolocateControl: jest.fn(),
}));

jest.mock("../../lib/env", () => ({
  ENV: {
    mapboxToken: "test-token",
  },
}));

describe("MapComponent Tests", () => {
  it("should render MapComponent", () => {
    render(<MapComponent />);
  });
});
