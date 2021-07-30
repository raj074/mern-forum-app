import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createTag } from "../../../redux/actions/adminAction";

const CreateTag = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const initialState = {
    tagName: "",
    details: "",
  };
  const [userData, setUserData] = useState(initialState);
  const { tagName, details } = userData;


  useEffect(() => {
    if (auth.token) history.push("/");
  }, [auth.token, history]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(createTag({userData, auth}));
    setUserData(initialState);
  };

  return (
    <div className="create_tag_page">
      <form onSubmit={handleSubmit} className="inner-shadow">
        <h3 className="text-uppercase text-center mb-1 auth-heading">
          Campus Connect
        </h3>
        <div className="mb-3">
          <label htmlFor="fullname" className="form-label">
            Tag name
          </label>
          <div className="outer-shadow hover-in-shadow form-input-wrap">
            <input
              type="text"
              className="form-control"
              id="fullname"
              onChange={handleChangeInput}
              value={tagName.toLowerCase().replace(/ /g, "")}
              name="tagName"
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Tag Details
          </label>
          <div className="outer-shadow hover-in-shadow form-input-wrap">
            <textarea
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              onChange={handleChangeInput}
              value={details}
              name="details"
            />
          </div>
        </div>

        

        <button
          type="submit"
          className="btn-1 w-100 d-flex outer-shadow hover-in-shadow justify-content-center"
        >
          Create Tag
        </button>
      </form>
    </div>
  );
};

export default CreateTag;
