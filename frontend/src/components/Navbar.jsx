function Navbar({ refreshNews }) {

  return (

    <div className="navbar">

      <h2>
        AI News Intelligence Dashboard
      </h2>

      <button
        className="refresh-btn"
        onClick={refreshNews}
      >
        Refresh News
      </button>

    </div>

  );
}

export default Navbar;