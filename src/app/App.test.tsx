import { MemoryRouter } from "react-router";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import App from "./App";

const renderApp = () => {
  const client = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return render(
    <QueryClientProvider client={client}>
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    </QueryClientProvider>,
  );
};

describe("App", () => {
  it("홈 페이지가 렌더된다", () => {
    renderApp();
    expect(screen.getByRole("heading", { name: /Hello React 19/i })).toBeInTheDocument();
  });
});
