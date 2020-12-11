import React from "react";
export const Inputform = ({inputPlaceholder}) => {
  return (
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder={inputPlaceholder}
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <div class="input-group-append">
        <span class="input-group-text" id="basic-addon2">
          <i className="fa fa-search"></i>
        </span>
      </div>
    </div>
  );
};
