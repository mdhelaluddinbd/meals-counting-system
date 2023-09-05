import React from "react";
import two from "../Assets/one.jpg";
import one from "../Assets/two.jpg";

const MealCount = () => {
  return (
    <div className="container mb-5">
      <div className="">
        <h1 className="fw-bold mt-5 ">Welcome to Meal Counting System</h1>
        <hr />
      </div>

      <div className="mt-5">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4 justify-content-center border pb-4 shadow rounded">
          <div class="col  " style={{ width: "25rem" }}>
            <div class="card h-100">
              <img src={one} class="card-img-top h-50 " alt=" " />
              <div class="card-body mt-1 p-0">
                <a
                  href="https://forms.gle/g7PFwHr2cvpAioyT8"
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
              <img src={two} class="card-img-top h-50 " alt=" " />
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
      <div className="mt-5 bg-light p-3">
        <p>© Copyright 2023 MealDB. All rights reserved.</p>
      </div>
    </div>
  );
};

export default MealCount;
