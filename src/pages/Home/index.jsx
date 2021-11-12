import { useEffect, useState } from "react";
import { useGetPosts } from "../../hooks/useGetPosts";
import { useParams, useHistory } from "react-router";
import { useStyles } from "./styles";
import { useUserContext } from "../../context/UserContext";
import { useFormInput } from "../../hooks/common";
import { axiosGetOthersPosts, axiosCreatePost } from "../../api/postCalls";
import { axiosGetProfile } from "../../api/userCalls";
import HomeInput from "./components/HomeInput";
import HomePostDisplay from "./components/HomePostDisplay";
import MenuOptions from "./components/MenuOptions";
import AdDisplay from "./components/AdDisplay";
import ProfileBio from "./components/ProfileBio";
import {
  SIDE_MENU_OPTIONS,
  GUEST_MENU_OPTIONS,
  AD_LIST,
} from "../../misc/constants";

const HomePage = () => {
  const classes = useStyles();
  const { user } = useUserContext();
  const { posts, getPosts } = useGetPosts();
  const history = useHistory();
  const input = useFormInput();
  let { username } = useParams();

  const [profile, setProfile] = useState({});
  const [profilePosts, setProfilePosts] = useState([]);

  useEffect(() => {
    if (username) {
      getProfileData(username);
      getProfilePosts(username);
    }
  }, []);

  const getProfilePosts = async (username) => {
    let postsResult = await axiosGetOthersPosts({ username: username });
    postsResult = postsResult.sort(
      (a, b) => Number(b.timestamp) - Number(a.timestamp)
    );
    setProfilePosts(postsResult);
  };

  const getProfileData = async (username) => {
    let userResult = await axiosGetProfile({ username: username });
    setProfile(userResult);
  };

  const makePost = async () => {
    try {
      await axiosCreatePost({ postMessage: input.value });
      input.clear();
      getPosts();
    } catch (e) {
      alert("Error creating post");
    }
  };

  const goToUser = (username) => {
    history.push(`/profile/${username}`);
  };

  if (!posts && !user && !user.name) return <div>Loading...</div>;

  return (
    <div className={classes.main}>
      <div className={classes.menu}>
        <MenuOptions options={user ? SIDE_MENU_OPTIONS : GUEST_MENU_OPTIONS} />
      </div>

      <div className={classes.wall}>
        {user && !username && <HomeInput input={input} makePost={makePost} />}
        {username && profile && profile.hex && <ProfileBio profile={profile} />}
        {posts && (
          <HomePostDisplay
            posts={username ? profilePosts : posts}
            goToUser={goToUser}
          />
        )}
      </div>
      <div className={classes.ads}>
        <AdDisplay ads={AD_LIST} />
      </div>
    </div>
  );
};

export default HomePage;
