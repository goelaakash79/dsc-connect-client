import React from "react";

export default function Homepage() {
  const CommCard = (
    <div className="col-lg-4">
      <div className="card p-3 mb-4" style={{ borderRadius: "12px" }}>
        <div className="row">
          <div className="col-12">
            <img
              className="img-fluid"
              src="./assets/images/dsc.png"
              alt=""
              width="40"
              style={{ marginRight: 8 }}
            />
            DSC VIT Pune
          </div>
        </div>
        <a href="#" className="mt-1">
          www.dscvitpune.tech
        </a>
        <p className="mt-3 mb-0">
          Location: <strong>Pune, India</strong>
        </p>
        <p>
          Team Size: <strong>32</strong>
        </p>
        <div>
          <span class="badge b-w mr-2">Web</span>
          <span class="badge b-m mr-2">ML</span>
          <span class="badge b-c mr-2">Cloud</span>
          <span class="badge b-f mr-2">Flutter</span>
        </div>
        <div className="mt-3">
          <h6>Social Profiles</h6>
          <img
            className="img-fluid mr-1"
            src="./assets/images/circle.svg"
            alt=""
            height="10%"
            width="10%"
          />
          <img
            className="img-fluid mr-1"
            src="./assets/images/circle.svg"
            alt=""
            height="10%"
            width="10%"
          />
          <img
            className="img-fluid mr-1"
            src="./assets/images/circle.svg"
            alt=""
            height="10%"
            width="10%"
          />
          <img
            className="img-fluid mr-1"
            src="./assets/images/circle.svg"
            alt=""
            height="10%"
            width="10%"
          />

          <img
            className="img-fluid"
            src="./assets/images/circle.svg"
            alt=""
            height="10%"
            width="10%"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <div
            className="card p-4"
            style={{
              height: "100%",
              fontSize: "20px",
              borderRadius: "8px"
            }}
          >
            <div>
              <p style={{ fontWeight: "600" }}>Filter</p>
              <form>
                <div class="form-group">
                  <label for="county">Country</label>
                  <select class="form-control" id="country">
                    <option>India</option>
                    <option>Sri Lanka</option>
                    <option>Australia</option>
                    <option>Japan</option>
                    <option>Russia</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="work">Works on</label>
                  <select class="form-control" id="work">
                    <option>Blockchain</option>
                    <option>Web Development</option>
                    <option>Mobile Development</option>
                    <option>Machine Learning</option>
                    <option>Cloud</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="search">Search</label>
                  <input
                    type="text"
                    class="form-control"
                    id="search"
                    placeholder="Type here"
                  />
                </div>
                <div className="float-right">
                  <button type="button" class="px-3 btn btn-warning reset-btn">
                    Reset
                  </button>
                </div>
              </form>
              <br />
              <div className="text-center" style={{ bottom: 16 }}>
                <img
                  className="img-fluid"
                  src="./assets/images/learn.svg"
                  alt=""
                />
              </div>
              <div
                className=""
                style={{
                  fontSize: "10px",
                  fontWeight: "700",
                  alignItems: "center"
                }}
              >
                <p>developed by community; for communities</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="list">
            <h3>
              <strong>Developer Student Clubs Listing</strong>
            </h3>
            <p style={{ color: "#707070", fontWeight: 600 }}>
              Connect with communities, the people and help each to make the
              sustainable and better world
            </p>
            <div className="row">
              {CommCard}
              {CommCard}
              {CommCard}
              {CommCard}
              {CommCard}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
