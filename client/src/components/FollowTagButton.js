import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { follow, unFollow } from '../redux/actions/tagAction';

const FollowTagButton = ({tag}) => {

    const [ followed, setFollowed ] = useState(false);

    const { auth } = useSelector(state => state);
    const dispatch = useDispatch();

    const [load, setLoad] = useState(false);

    const handleFollow = async () => {
        if(load) return;

        setFollowed(true);
        setLoad(true);
        await dispatch(follow({ tag, auth }));
        setLoad(false);
    };

    const handleUnFollow = async () => {
      if (load) return;

      setFollowed(false);
      setLoad(true);
      await dispatch(unFollow({ tag, auth }));
      setLoad(false);
    };

    useEffect(() => {
        if (auth.user.followedTags.find((item) => item._id === tag._id)) {
          setFollowed(true);
        }
        return () => setFollowed(false);
      }, [auth.user.followedTags, tag._id]);

    return (
        <>
        {followed ? (
          <button className="btn-1 hover-in-shadow outer-shadow" onClick={handleUnFollow}>
            Unfollow
          </button>
        ) : (
          <button className="btn-1 hover-in-shadow outer-shadow" onClick={handleFollow}>
            Follow
          </button>
        )}
      </>
    )
}

export default FollowTagButton
