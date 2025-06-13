import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, beforeEach, vi, expect, type Mock } from "vitest";
import "@testing-library/jest-dom";
import { SearchEngine } from "./searchEngine";
import { filterSearchResults } from "./searchFilter";
import { VirtuosoMockContext } from "react-virtuoso";

// Mocks
vi.mock("./searchFilter", () => ({
  filterSearchResults: vi.fn(),
}));

vi.mock("./mock", () => ({
  data: ["Result 1", "Result 2", "Result 3"],
}));

const customRender = (ui: React.ReactElement) =>
  render(ui, {
    wrapper: ({ children }) => (
      <VirtuosoMockContext.Provider
        value={{ viewportHeight: 500, itemHeight: 50 }}
      >
        {children}
      </VirtuosoMockContext.Provider>
    ),
  });

describe("SearchEngine Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the search input", () => {
    customRender(<SearchEngine />);
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });

  it("displays filtered results when search input changes", () => {
    (filterSearchResults as Mock).mockReturnValue(["Result 1"]);

    customRender(<SearchEngine />);
    fireEvent.change(screen.getByPlaceholderText("Search..."), {
      target: { value: "Result" },
    });

    expect(filterSearchResults).toHaveBeenCalledWith(
      ["Result 1", "Result 2", "Result 3"],
      "Result"
    );
    expect(screen.getByText("Result 1")).toBeInTheDocument();
  });

  it("displays 'No results found.' when no results match the search", () => {
    (filterSearchResults as Mock).mockReturnValue([]);

    customRender(<SearchEngine />);
    fireEvent.change(screen.getByPlaceholderText("Search..."), {
      target: { value: "NoMatch" },
    });

    expect(filterSearchResults).toHaveBeenCalledWith(
      ["Result 1", "Result 2", "Result 3"],
      "NoMatch"
    );
    expect(screen.getByText("No results found.")).toBeInTheDocument();
  });

  it("renders all results when search input is empty", () => {
    (filterSearchResults as Mock).mockReturnValue([
      "Result 1",
      "Result 2",
      "Result 3",
    ]);

    customRender(<SearchEngine />);
    fireEvent.change(screen.getByPlaceholderText("Search..."), {
      target: { value: "" },
    });

    expect(filterSearchResults).toHaveBeenCalledWith(
      ["Result 1", "Result 2", "Result 3"],
      ""
    );
    expect(screen.getByText("Result 1")).toBeInTheDocument();
    expect(screen.getByText("Result 2")).toBeInTheDocument();
    expect(screen.getByText("Result 3")).toBeInTheDocument();
  });
});
