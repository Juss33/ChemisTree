import { Container } from "react-bootstrap";
import { MilkdownProvider } from "@milkdown/react";
import { MilkdownEditor, MilkdownEditorControls } from "../components/MilkdownEditor";

const defaultMarkdown = 
`# This is a sample text

\`\`\`js
console.log("Hello world!"); 
\`\`\`

Chemistree is the goat


Feel free to type here...
$$
\\int_0^\\infty e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}
$$
Click on [this link](https://bongo.cat/) to get a cute cat!

- sample list
- this will be fixed
- I HATE TROUBLESHOOTING
`



const PostCreatePage = () => {

    return (
        <Container>
            <MilkdownProvider>
                <MilkdownEditor defaultMarkdown={defaultMarkdown} canEdit={true}/>
                <MilkdownEditorControls />
            </MilkdownProvider>
        </Container>
    )
}

export default PostCreatePage;