import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Makeup from "../assets/Makeup.jpg";
import Gift from "../assets/Gift.jpg";
import Sanitizer from "../assets/Sanitizer.jpg";
import Button from "@material-ui/core/Button";

const Add = () => {
  return (
    <>
      <div className="container mt-5 mb-2 ">
        <h3 style={{ textAlign: "center", marginBottom: "2rem" }}>
          {" "}
          Pick the daily brands products
        </h3>
        <div className="row ">
          <div className="col-sm-4  ">
            <div
              className="card border  border-warning "
              style={{ maxWidth: "18rem" }}
            >
              <img
                className="card-img-top "
                src={Makeup}
                alt="Card image cap"
              />
            </div>
            <Button variant="contained" color="secondary">
              Click Explore
            </Button>
          </div>
          <div className="col-sm-4">
            <div
              class="card border border-warning"
              style={{ maxWidth: "18rem" }}
            >
              <img className="card-img-top" src={Gift} alt="Card image cap" />
            </div>
            <Button variant="contained" color="secondary">
              Click Explore
            </Button>
          </div>
          <div className="col-sm-4">
            <div
              className="card border border-warning"
              style={{ maxWidth: "18rem" }}
            >
              <img
                className="card-img-top"
                src={Sanitizer}
                alt="Card image cap"
              />
            </div>
            <Button variant="contained" color="secondary">
              Click Explore
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add;
