import { Container } from "react-bootstrap";
import { Milkdown, MilkdownProvider, useEditor } from "@milkdown/react";
import { MilkdownEditor } from "../components/MilkdownEditor";

const defaultMarkdown = 
`# This is a sample text

\`\`\`js
console.log("Hello world!"); 
\`\`\`

Chemistree is the goat


Feel free to type here...

Click on [this link](https://bongo.cat/) to get a cute cat!

- sample list
- this will be fixed
- I HATE TROUBLESHOOTING
`



const PostCreatePage = () => {

    return (
        <Container>
            <MilkdownProvider>
                <MilkdownEditor defaultMarkdown={defaultMarkdown} canEdit={true} />
            </MilkdownProvider>
        </Container>
    )
}

export default PostCreatePage;