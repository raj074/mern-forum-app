import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Info from '../../components/profile/Info';
import Posts from '../../components/home/questions/displayQuestion';
import { useSelector, useDispatch } from "react-redux";
import LoadIcon  from "../../images/loading.gif";
import { getProfileUsers } from "../../redux/actions/profileAction";


const Profile = () => {
  const { profile, auth } = useSelector(state => state);
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const { id } = useParams();
  

  useEffect(() => {
    if(profile.ids.every(item => item !== id )){
        
      dispatch(getProfileUsers({ id, auth }));

    }

  }, [id, auth, dispatch, profile.ids]);

  useEffect(() => {
    profile.posts.forEach((data) => {
      if (data._id === id) {
        setPosts(data.posts);
      }
    });
  }, [profile.posts, id]);

    return (
      <div className="profile">
        <Info auth={auth} profile={profile} dispatch={dispatch} id={id} />

        {profile.loading ? (
          <img className="d-block mx-auto my-4" src={LoadIcon} alt="Loading" />
        ) : (
          <>
            <h2 className="my-3">Questions:</h2>
            <Posts question={posts}  />
            
          </>
        )}
      </div>
    );
}

export default Profile;
