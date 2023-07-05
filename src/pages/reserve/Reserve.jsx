import React from "react";
import "./Reserve.css";

const Reserve = () => {
  return (
    <>
      <div>
        <div class="col-md-5">
          <div class="form-group">
            <div class="input-group date" id="datetimepicker6">
              <input type="text" class="form-control" value="hjasdb" />
              <span class="input-group-addon">
                <span class="glyphicon glyphicon-calendar"></span>
              </span>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default Reserve;
