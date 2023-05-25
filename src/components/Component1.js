import React from "react";
import layer1 from "../img/blogs/PramodWaikar.jpeg";

const Component1 = () => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <img
            src={layer1}
            alt="Image description"
            className="rounded-top rounded-bottom"
          />
          <h3>Pramod Waikar</h3>
        </div>
      </div>
    </div>
  );
};

export default Component1;
