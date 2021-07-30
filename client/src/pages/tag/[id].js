import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getTagQuestions } from '../../redux/actions/tagAction'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import Posts from '../../components/home/questions/displayQuestion';
import FollowTagButton from '../../components/FollowTagButton';
import LoadingIcon from '../../images/loading.gif';

const Tags = () => {
    const dispatch = useDispatch();
    const {auth, tags} = useSelector(state => state);
    const {id} = useParams();

    useEffect(async () => {
        await dispatch(getTagQuestions({auth, id}));
        
    }, [dispatch, auth, id])
    return (
        <div>
            {
              tags.loading &&
              <div style={{width:"100%", display: "flex", justifyContent:'center'}}>
                  <img src={LoadingIcon}  />
              </div>
              
          }
            <div className="tag_header">
                <h3>Question tagged [ {tags.tag.tagName} ]</h3>
                <div onClick={() => dispatch({type:GLOBALTYPES.ASK_MODAL, payload: true})} className="btn-1 outer-shadow hover-in-shadow">Ask a Question</div>
            </div>

           <div>
           <span style={{color:"#ec8b0b", margin: '15px'}}><i class="fa fa-fire" aria-hidden="true" />{tags.tag.followers ? tags.tag.followers.length : 0}</span>
           <span >{tags.tagQuestions ? tags.tagQuestions.length : 0} questions</span>
           </div>

            <div className="tag_body">
                {tags.tag.details}
            </div>
            <FollowTagButton tag={tags.tag} />
            <div className="tag_footer">
                <Posts question={tags.tagQuestions} />
            </div>
        </div>
    )
}

export default Tags
