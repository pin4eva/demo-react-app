import React from "react";

const RegistrationForm = () => {
  return (
    <form>
      <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" />
      </div>
      <div className="form-group">
        <label>Confirm Password</label>
        <input type="password" className="form-control" />
      </div>
      <div className="mt-3">
        <button className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
};

export default RegistrationForm;
