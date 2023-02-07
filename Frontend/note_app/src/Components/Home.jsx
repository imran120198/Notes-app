import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <h1>
          <Link to="/">Home</Link>
        </h1>
      </div>
      <div>
        <h1>
          <Link to="/notes">Note</Link>
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          width: "500px",
          justifyContent: "space-between",
        }}
      >
        <h1>
          <Link to="/login">Login</Link>
        </h1>
        <h1>
          <Link to="/register">Register</Link>
        </h1>
      </div>
    </div>
  );
}

export { Home };
