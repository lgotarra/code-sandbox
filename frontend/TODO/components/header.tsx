import { Link } from "react-router";

export const StickyHeader = (): React.JSX.Element => {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        backgroundColor: "#f8f9fa",
        padding: "10px 20px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        zIndex: 1000,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link to="/">
        <h1 style={{ margin: 0 }}>TODO List</h1>
      </Link>
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <Link to="/use-state">useState</Link>
        <Link to="/use-reducer">useReducer</Link>
      </div>
    </header>
  );
};
