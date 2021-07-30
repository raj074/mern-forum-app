import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {GLOBALTYPES} from '../../redux/actions/globalTypes'
import { createQuestion } from '../../redux/actions/questionAction';
import SearchTags from '../SearchTags';

const AskModal = () => {
    const dispatch = useDispatch();
    const { auth } = useSelector(state => state)
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [questionTags, setQuestionTags] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createQuestion({title, body, questionTags, auth}));

        setBody("");
        setTitle("");
        setQuestionTags([]);
        dispatch({ type: GLOBALTYPES.ASK_MODAL, payload: false });
    }

    const deleteTags = (index) => {
      const newArr = [...questionTags];
      
      newArr.splice(index, 1);
      setQuestionTags(newArr);
    };

    return (
      <div className="ask_modal">
        <form onSubmit={handleSubmit}>
          <div className="askModal_header">
            <h5 className="m-0">Ask a Question</h5>
            <span
              onClick={() =>
                dispatch({ type: GLOBALTYPES.ASK_MODAL, payload: false })
              }
            >
              &times;
            </span>
          </div>
          <div className="askModal_body">
            <div className="position-relative">
              <input
                placeholder="Question title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                name="title"
              />
              <small
              className="text-danger position-absolute d-block"
              style={{
                fontWeight: '800',
                top: "110%",
                right: '0',
                transform: "translateY(-50%)",
              }}
            >{title.length}/150</small>
            </div>

            <textarea
              placeholder="Question body"
              onChange={(e) => setBody(e.target.value)}
              value={body}
              name="body"
            />

{questionTags.length < 5 && questionTags && <SearchTags questionTags={questionTags} setQuestionTags={setQuestionTags} />}       
            { questionTags.length > 0 &&
              <div className="display_selected_tags">
              {
                  questionTags.map((tag, index) => (
                    <div key={index} className="single_tag">
                      <span className="display_single_tag">{tag.name}<span onClick={() => deleteTags(index)} className="remove_tag">&times;</span></span>
                      
                    </div>
                  ))
              }
          </div>
            }
          
      
            
            
          </div>
          <div className="askModal_footer">
            <button type="submit" className="btn btn-primary w-100">
              Post
            </button>
          </div>
        </form>
      </div>
    );
}

export default AskModal
