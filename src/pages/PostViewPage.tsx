import { useQuery } from "convex/react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../convex/_generated/api";
import type { Id } from "../../convex/_generated/dataModel";
import { MilkdownProvider } from "@milkdown/react";
import { Container, Image } from "react-bootstrap";
import { MilkdownEditor } from "../components/MilkdownEditor";
import "../styles/PostPage.scss";
import { FaHashtag } from "react-icons/fa";

const PostViewPage = () => {
    const { postId } = useParams<{ postId: Id<"post"> }>();
    const navigate = useNavigate();
    const post = useQuery(api.post.getPost, { id: postId! });

    if (!post) {
        // return skeleton structure
        return (
            <div>pOst not foUnd!</div>
        ); 
    }

    const defaultMarkdown = post.body; 

//     const defaultMarkdown =
//         `
// \`\`\`js
// console.log("Hello world!"); 
// \`\`\`
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente similique a quidem tenetur, quaerat voluptates aliquam ipsa illum optio rerum voluptatibus magni nemo laborum sit assumenda laboriosam veritatis blanditiis delectus?

// Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur adipisci ipsam et quisquam doloribus expedita ea, enim quia! Maxime nostrum ratione necessitatibus beatae laudantium hic consectetur voluptate provident corrupti non.
// Click on [this link](https://bongo.cat/) to get a cute cat!

// - sample list
// - this will be fixed
// - I HATE TROUBLESHOOTING

// # h1
// ## h2
// ### h3
// #### h4
// ##### h5
// ###### h6
// ## in conclusion: 

// Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deleniti adipisci impedit asperiores vitae voluptatibus magni provident necessitatibus similique odit natus rerum id optio consequuntur unde corrupti, voluptatem nisi veniam!
// `

    return (
        <Container className="post-container">
            <div id="post-details">
                <h1>{post.subject}</h1>
                <p><b>{"Subtitle"}</b></p>
                <div className="post-profile-card">
                    <Image
                        src={"https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18zOGF0THJYWnRHMWdsQ3NHSW9qWmdHZ0pzeE0iLCJyaWQiOiJ1c2VyXzM4eEZGQ25OWmtRZk5xNE43TFV0Wkt5Y1Y0MSJ9?width=80"} // TODO
                        alt="Profile"
                        roundedCircle
                        className="profile-pic-3"
                    />
                    <div className="me-2">
                        <p className="mb-0 fw-semibold">
                            <a href={"/u/" + post.author?.username} className="link-hidden">u/{post.author?.username}</a>
                        </p>
                        <span>{new Date(post._creationTime).toLocaleString()}</span>
                    </div>
                </div>
            </div>
            <MilkdownProvider >
                <MilkdownEditor defaultMarkdown={defaultMarkdown} canEdit={false} />
            </MilkdownProvider>
            <div id="post-footer">
                <div className="post-tags mb-1">
                    <div><a href="/search?tag=tag3" className="link-hidden"><FaHashtag className="me-1"/>tag3</a></div>
                    <div><a href="/search?tag=tag4" className="link-hidden"><FaHashtag className="me-1"/>tag4</a></div>
                    <div><a href="/search?tag=tag5" className="link-hidden"><FaHashtag className="me-1"/>tag5</a></div>
                    <div><a href="/search?tag=kaisbigtoes" className="link-hidden"><FaHashtag className="me-1"/>kaisbigtoes</a></div>

                </div>
                {post.subreddit ? (
                    <div id="subreddit" className="">
                        <div>
                            <a href={"/r/" + post.subreddit?.name} className="link-hidden">r/{post.subreddit?.name}</a>
                        </div>
                    </div>) : (<></>)
                }
            </div>
            <div id="comments">
                <h4>Comments (0)</h4>
            </div>
        </Container>
    )
}

export default PostViewPage; 