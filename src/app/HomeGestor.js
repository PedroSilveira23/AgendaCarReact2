import React from "react";
import image from "../images/shoopcar.jpg";
import "./HomeGestor.css";
import "./carousel.css";
import "../App.css";

const Home = () => {
  return (
    <>
      <div class="hero_area">
        <header class="header_section">
          <div class="container">
            <nav class="navbar navbar-expand-lg custom_nav-container pt-3">
              <a class="navbar-brand mr-5" href="/HomeGestor">
                <span>AGENDACAR</span>
              </a>

              <div
                class="collapse navbar-collapse"
                id="navbarSupportedContent"
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <div class="d-flex ml-auto flex-column flex-lg-row align-items-center">
                  <ul class="navbar-nav  ">
                    <li class="nav-item">
                      <a class="nav-link" href="/Marcações">
                        {" "}
                        Marcações{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/Oficinas">
                        Oficinas
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>

        <section class="slider_section position-relative">
          <div class="container">
            <div
              class="row"
              style={{ overflowX: "hidden", overflowY: "hidden" }}
            >
              <div class="col-md-7">
                <div class="detail-box">
                  <div>
                    <h1>
                      Bem-vindo ao <br />
                      <span>AGENDACAR</span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  );
};

export default Home;
