import { useQuery } from "convex/react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../convex/_generated/api";
import type { Id } from "../../convex/_generated/dataModel";
import { MilkdownProvider } from "@milkdown/react";
import { Container, Image } from "react-bootstrap";
import { MilkdownEditor } from "../components/MilkdownEditor";

const PostViewPage = () => {
//   const { postId } = useParams<{ postId: Id<"post"> }>();
//   const navigate = useNavigate();
//   const post = useQuery(api.post.getPost, { id: postId! });

const defaultMarkdown = 
`
\`\`\`js
console.log("Hello world!"); 
\`\`\`
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente similique a quidem tenetur, quaerat voluptates aliquam ipsa illum optio rerum voluptatibus magni nemo laborum sit assumenda laboriosam veritatis blanditiis delectus?

Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur adipisci ipsam et quisquam doloribus expedita ea, enim quia! Maxime nostrum ratione necessitatibus beatae laudantium hic consectetur voluptate provident corrupti non.
Click on [this link](https://bongo.cat/) to get a cute cat!

- sample list
- this will be fixed
- I HATE TROUBLESHOOTING

# h1
## h2
### h3
#### h4
##### h5
###### h6
## in conclusion: 

Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deleniti adipisci impedit asperiores vitae voluptatibus magni provident necessitatibus similique odit natus rerum id optio consequuntur unde corrupti, voluptatem nisi veniam!
`

    
    return (
        <Container>
            <div id="post-details" className="mb-4">
                <h1>{"Title"}</h1>
                <h4>{"Subtitle"}</h4>
                <div className="d-flex flex-row align-items-center p-2 my-2 bg-ctbg2 " style={{width: "fit-content", borderRadius: "13px"}}>
                    <Image
                    src={"https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18zOGF0THJYWnRHMWdsQ3NHSW9qWmdHZ0pzeE0iLCJyaWQiOiJ1c2VyXzM4eEZGQ25OWmtRZk5xNE43TFV0Wkt5Y1Y0MSJ9?width=80"} // TODO
                    alt="Profile"
                    roundedCircle
                    className="profile-pic-3"
                    />
                    <div className="me-2">
                        <p className="mb-0 fw-semibold">
                            <a href="/u/Username" className="text-black">u/Username</a>
                        </p>
                        <span>2025-02-30 25:16:34</span>
                    </div>
                </div>
            </div>
            <MilkdownProvider >
                <MilkdownEditor defaultMarkdown={defaultMarkdown} canEdit={true}/>
            </MilkdownProvider>
            <div id="post-footer">
                Tags
            </div>
        </Container>
    )
}

export default PostViewPage; 