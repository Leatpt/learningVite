import React from "react";
import styles from "./Nav.module.css";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-light bg-dark navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-md">
        <a className="navbar-brand" href="/">
          <img
            src="/images/frogLogo.png"
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-text-top"
          />
        </a>
        <button
          className="navbar-toggler navbar-dark"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasResponsiveLabel">
              Menüü
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              data-bs-target="#offcanvasResponsive"
              aria-label="Close"
            ></button>
          </div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={styles.menuItems} aria-current="page" href="/">
                Avaleht
              </a>
            </li>
            <li className="nav-item">
              <a className={styles.menuItems} aria-current="page" href="/meist">
                Meist
              </a>
            </li>
            <li className="nav-item">
              <a
                className={styles.menuItems}
                aria-current="page"
                href="/kontakt"
              >
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
