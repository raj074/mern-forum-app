import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataAPI } from "../utils/fetchData";
import { GLOBALTYPES } from "../redux/actions/globalTypes";
// import { Link } from "react-router-dom";

import LoadIcon from "../images/loading.gif";
import DisplayTags from "./DisplayTags";

const SearchTags = ({setQuestionTags, questionTags}) => {
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);

  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);

  

  const handleChange = async (e) => {
    await setSearch(e.target.value.toLowerCase().replace(/ /g, ""));
  };

  const handleSearch = async () => {
    if (!search || search.length === 0) return;

    try {
      setLoad(true);

      const res = await getDataAPI(`search?tag=${search}`, auth.token);

      setTags(res.data.tags);
      setLoad(false);
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: err.response.data.msg },
      });
    }
  };

  const handleClose = () => {
    setSearch("");
    setTags([]);
  };

  useEffect(() => {
    handleSearch();
  }, [search]);

  return (
    <>
     
    <div className="tag_search">
     
      <input
        type="text"
        title="Enter to Search"
        placeholder="Enter to Search tags"
        name="search"
        value={search}
        id="search"
        onChange={handleChange}
      />
      {load && <img className="loading" src={LoadIcon} alt="Loading" />}
        <div
          onClick={handleClose}
          className="close_search"
          style={{ display: tags.length === 0 ? "none" : "block" }}
        >
          &times;
        </div>
        </div>

      <div className="tag_display">
        {search && <DisplayTags questionTags={questionTags} tags={tags} setQuestionTags={setQuestionTags} />}
      </div>
    </>
  );
};

export default SearchTags;
