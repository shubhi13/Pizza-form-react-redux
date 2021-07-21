import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { chooseName, chooseAddress, choosePhoneNo, chooseEmail } from "../../store/user";
import Button from "../common/Button";
const User = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const name = useSelector((state) => state.userReducer.name);
  const address = useSelector((state) => state.userReducer.address);
  const phoneNo = useSelector((state) => state.userReducer.phoneNo);
  const email = useSelector((state) => state.userReducer.email);
  const [userName, setUserName] = useState(name);
  const [userAddress, setUserAddress] = useState(address);
  const [userPhone, setUserPhone] = useState(phoneNo);
  const [userEmail, setUserEmail] = useState(email);
  const onSubmit = () => {
    dispatch(chooseName(userName));
    dispatch(chooseAddress(userAddress));
    dispatch(choosePhoneNo(userPhone));
    dispatch(chooseEmail(userEmail));
    history.push("./result");
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3 col">
        <label htmlFor="userName" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="userName"
          placeholder="Enter your name"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
      </div>

      <div className="mb-3 col">
        <label htmlFor="userAddress" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="userAddress"
          placeholder="Enter your address"
          onChange={(e) => setUserAddress(e.target.value)}
          value={userAddress}
        />
      </div>

      <div className="mb-3 col">
        <label htmlFor="userPhoneNo" className="form-label">
          Phone No
        </label>
        <input
          type="tel"
          className="form-control"
          id="userPhoneNo"
          maxLength={10}
          minLength={10}
          placeholder="Enter your phone no."
          onChange={(e) => setUserPhone(e.target.value)}
          value={userPhone}
        />
      </div>

      <div className="mb-3 col">
        <label htmlFor="userEmail" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="userEmail"
          placeholder="Enter your email"
          onChange={(e) => setUserEmail(e.target.value)}
          value={userEmail}
        />
      </div>

      <Button onSubmit={onSubmit}>Next</Button>
    </form>
  );
};

export default User;