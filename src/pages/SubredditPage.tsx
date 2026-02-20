import "../styles/SubredditPage.css";
import { useParams } from "react-router-dom";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import PostCard from "../components/PostCard";
import "../styles/SubredditPage.css";
import "../styles/SideBar.css";
import { Container } from "react-bootstrap";

const SubredditPage = () => {
  const { subredditName } = useParams();
  const subreddit = useQuery(api.subreddit.get, { name: subredditName || "" });

  if (subreddit === undefined) return <p>Loading...</p>;

  if (!subreddit) {
    return (
    <Container>
      <div className="not-found">
        <h2>Subreddit Not Found</h2>
        <p>The subreddit r/{subredditName} does not exist.</p>
      </div>
    </Container>
  )}
  return (
    <Container>
      <div className="subreddit-banner">
        <h1>r/{subreddit.name}</h1>
        {subreddit.description && <p>{subreddit.description}</p>}
      </div>
      <div className="posts-container">
        {subreddit.posts?.length === 0 ? (
        <div className="no-posts">
          <p>No posts yet. Posts will be displayed here.</p>
        </div>
        ) : (
          subreddit.posts?.map((post) => (
            <PostCard key={post._id} post={post} />
          ))
        )
        }
      </div>
    </Container>
  );
}

export default SubredditPage;