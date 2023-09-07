import React from "react";
import two from "../Assets/one.jpg";
import one from "../Assets/two.jpg";

const MealCount = () => {
  return (
    <div className="container mb-5">
      <div className="">
        <h1 className="fw-bold mt-5 ">Welcome to Meal Counting System</h1>
        <div className="d-flex align-items-center justify-content-center">
          <hr className="" style={{ width: "50rem" }}></hr>
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-center mt-4 ">
        <div
          className="  d-flex align-items-center justify-content-center  "
          style={{ width: "55rem" }}
        >
          <div class="row bg-info-subtle row-cols-1 row-cols-md-2 row-cols-lg-2 g-3 justify-content-evenly border  pt-0 pb-3 shadow rounded">
            <div class="col  " style={{ width: "25rem" }}>
              <div class="card h-100">
                <img src={one} class="card-img-top h-75 " alt=" " />
                <div class="card-body mt-1 p-0">
                  <a
                    href="https://forms.gle/NozWw8nPnr5QYDja6"
                    target=" "
                    className="btn btn-primary fw-bold w-100 rounded-0 "
                    size="lg"
                  >
                    Meals
                  </a>
                </div>
                <div class="card-footer bg-light p-3"></div>
              </div>
            </div>

            <div class="col" style={{ width: "25rem" }}>
              <div class="card h-100">
                <img src={two} class="card-img-top h-75 " alt=" " />
                <div class="card-body mt-1 p-0 ">
                  <a
                    href="https://forms.gle/g7PFwHr2cvpAioyT8"
                    target=" "
                    className="btn btn-warning fw-bold w-100 rounded-0"
                    size="lg"
                  >
                    Expenses
                  </a>
                </div>
                <div class="card-footer bg-light p-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 bg-light p-3">
        <p>© Copyright 2023 MealDB. All rights reserved.</p>
      </div>
    </div>
  );
};

export default MealCount;
