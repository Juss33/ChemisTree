import { Container } from "react-bootstrap";
import { defaultValueCtx, Editor, rootCtx } from "@milkdown/kit/core";
import { commonmark } from "@milkdown/kit/preset/commonmark";
import { Milkdown, MilkdownProvider, useEditor } from "@milkdown/react";

const defaultMarkdown = 
`# This is a sample text

\`\`\`js
console.log("Hello world!"); 
\`\`\`

Chemistree is the goat


Feel free to type here...
`


const MilkdownEditor: React.FC = () => {
    const { get } = useEditor((root) =>
        Editor.make()
        // .config(nord)
        .config((ctx) => {
            ctx.set(rootCtx, root);
            ctx.set(defaultValueCtx, defaultMarkdown); 
        })
        .use(commonmark),
    );

    return <Milkdown />;
};
const PostCreatePage = () => {

    return (
        <Container>
            <MilkdownProvider>
                <MilkdownEditor />
            </MilkdownProvider>
        </Container>
    )
}

export default PostCreatePage;