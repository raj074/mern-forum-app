import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllTags } from '../redux/actions/tagAction'
import LoadingIcon from '../images/loading.gif';

const Tags = () => {
    const dispatch = useDispatch();
    const {auth, tags} = useSelector(state => state);
    

    useEffect(() => {
        dispatch(getAllTags(auth.token));
        console.log(tags)
    }, [dispatch, auth])
    return (
        <div>
            <div className="tag_header">
                <h3>Tags </h3>
               
            </div>
            {
              tags.loading &&
              <div style={{width:"100%", display: "flex", justifyContent:'center'}}>
                  <img src={LoadingIcon}  />
              </div>
              
          }
            <div className="tag_body">
            A tag is a keyword or label that categorizes your question with other, similar questions. Using the right tags makes it easier for others to find and answer your question.
            </div>

            <div className="tag_footer">
                <div className="display_all_tags_container">
                    {
                        tags.tags.map(tag => (
                            <Link className="display_all_tags" to={`/tag/${tag._id}`}>
                                <div className="display_all_tags_header">
                                    <span className="display_all_tags_header_title">{tag.tagName}</span>
                                    <span style={{color:"#ec8b0b"}}><i class="fa fa-fire" aria-hidden="true"></i> { tag.followers.length}</span>
                                </div>
                                <div className="display_all_tags_body">
                                    {tag.details.length < 100 ? tag.details :tag.details.slice(0,100)+"....."}
                                </div>
                                <div className="display_all_tags_footer">
                                    {tag.questions.length} questions
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Tags
