import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams,useHistory, Link } from 'react-router-dom'
import EditProfile from './EditProfile';

const Info = ({auth, profile, dispatch, id}) => {
    const [userData, setUserData] = useState([]);

    const [onEdit, setOnEdit] = useState(false);
    

    useEffect(() => {
      if (id === auth.user._id) {
          setUserData([auth.user]);
      }else{
        const newData = profile.users.filter(user => user._id === id);
        setUserData(newData);
      }
    }, [id, auth, dispatch, profile.users]);

    return (
      <>
      {
        userData.map(user => (
          
<div className="profile_info ">

        <div className="profile_info_img_container ">
          <img
            className="profile_info_img outer-shadow"
            src={user.avatar}
          />
          <div className="profile_info_points">
            <span>{user.points}</span> Points
          </div>
        </div>

        <div className="info_container">
          <div className="info_content">
            <div className="info_content_title">
              <h2>{user.username}</h2>
            </div>

            <h6>
              {user.fullname}
              <span className="color-violet">{user.mobile}</span>
            </h6>
            <p className="m-0">{user.address}</p>
            <h6>{user.email}</h6>
            <a
              style={{ textDecoration: "none" }}
              href={user.website}
              target="_blank"
              rel="noreferrer"
            >
              {user.website}
            </a>
            <p>{user.about}</p>
          </div>
        </div>
        {
          user._id === auth.user._id && 
          <>
          <button
          className="btn-1 outer-shadow hover-in-shadow"
          onClick={() => setOnEdit(true)}
          >
          <span className="material-icons text-info"> create</span> Edit Profile
        </button>
          {onEdit && <EditProfile setOnEdit={setOnEdit} />}
          </>
        }
        
        <div className="profile_info_tags_container">
        <h4>Tags:</h4>
        {
          user.followedTags.length === 0 &&
          <h5 className="text-muted">{user.username} is not following any tags.</h5>
        }
          {
            user.followedTags.map(tag => (
              <Link className="profile_info_tag m-1" to={`/tag/${tag._id}`}>
                {tag.tagName}
              </Link>
            ))
          }
        </div>
        
      </div>
        ))
      }
      </>
    );
}

export default Info
