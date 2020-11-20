import React from "react";

function Navbar(props) {
  async function fetchData(e) {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${e.target[0].value}&appid=a271d5ac3c80a5064d384b613ed98328`,
        { mode: "cors" }
      );
      if (response.status !== 200) {
        throw await response.json();
      }
      const data = await response.json();
      props.setCity(data);
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <i class="fas fa-cloud-sun"></i>
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Weather App
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0" onSubmit={fetchData}>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="City"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
