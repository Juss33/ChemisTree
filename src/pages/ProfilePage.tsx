import { useParams } from "react-router-dom";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import PostCard from "../components/PostCard";
import "../styles/ProfilePage.scss"
import { Container, Image } from "react-bootstrap";

const ProfilePage = () => {
  const { username } = useParams();
  const posts = useQuery(api.post.userPosts, {
    authorUsername: username || "",
  });
  const stats = useQuery(api.users.getPublicUser, {username: username || ""})
  if (stats === undefined) {
    return (
      <Container>
      <div className="profile-header">
        <Image
          src="/default-profile-pic.png" // TODO
          alt="Profile"
          roundedCircle
          className="profile-pic"
        />
        <h2 className="mb-0">u/{username}</h2>
      </div>
      <div className="profile-container">
        <p>Loading profile...</p>
      </div>
    </Container>
    );
  }
  if (stats?.isError) {
    return (
      <Container>
        <p>User not found!</p>
      </Container>
    ); 
  }; 

  console.log(stats);

  return (
    <Container>
      <div className="profile-header">
        <Image
          src={stats?.userData?.userPfpUrl || "/default-profile-pic.png"} // TODO
          alt="Profile"
          roundedCircle
          className="profile-pic"
        />
        <h2 className="mb-0">u/{username}</h2>
      </div>
      <div className="profile-container">
        {stats?.userData?.userBio ? (
          <>
            <h5>User bio</h5>
            <p>
              {stats?.userData?.userBio || ""}
            </p>
          </>
        ) : (<></>) 
        }
        <h5>Posts</h5>
        <p>Count: {stats?.postCount ?? 0}</p>
        {
          posts === undefined ? (
            <div className="profile-container">Loading posts...</div>
          ) : posts.length === 0 ? (
            <div className="profile-container">
              <p>No posts yet</p>
            </div>
          ) : (
            posts.map((post) => (
              <PostCard key={post._id} post={post} showSubreddit={true} />
            ))
          )
        }
      </div>
    </Container>
  );
};

export default ProfilePage;