import { defaultValueCtx, Editor, editorViewOptionsCtx, rootCtx } from "@milkdown/kit/core";
import { commonmark, linkSchema, } from "@milkdown/kit/preset/commonmark";
import { InputRule, } from "@milkdown/kit/prose/inputrules";
import { $inputRule, getMarkdown } from "@milkdown/kit/utils";
import { Milkdown, useEditor, useInstance } from "@milkdown/react";
import { listItemBlockComponent } from "@milkdown/components/list-item-block"
import { configureLinkTooltip, linkTooltipPlugin } from "@milkdown/kit/component/link-tooltip";
import { imageBlockComponent } from "@milkdown/components/image-block"; 
import { history } from '@milkdown/kit/plugin/history'
import { math } from "@milkdown/plugin-math"
import "../styles/MilkdownEditor.scss"

// input rules
/**
 * replaces text with a link on typing the markdown format
 * 
 * \[text\]\(url\)
 * 
 */
const AddLinkInputRule = $inputRule((ctx) => {
    return new InputRule(/\[(.*?)\]\((.*?)\)$/, (state, match, start, end) => {
        const [okay, text, url] = match; 
        const { tr } = state; 
        if (okay) {
            tr.replaceWith(start, end, state.schema.text(text + " "))
                .addMark(
                    start, 
                    start + text.length, 
                    linkSchema.type(ctx).create({ href: url })
                )
        }
        return tr; 
    })
})

/** Options in creating new editor */
interface MilkdownEditorOptions {
    /** Default content to show on load */ 
    defaultMarkdown?: string, 
    /** whether the editor is editable (readonly or not?) */
    canEdit?: boolean, 
}

/** element for the milkdown editor
 * 
 * - editing posts / comments
 * - viewing posts (`MilkdownEditorOptions.canEdit` = false)
 */
export const MilkdownEditor: React.FC<MilkdownEditorOptions> = ({
    defaultMarkdown = "", 
    canEdit = false
}: MilkdownEditorOptions) => {
    // const { get } = 
    useEditor((root) =>
        Editor.make()
        // .config(nord)
        .config((ctx) => {
            ctx.set(rootCtx, root);
            ctx.set(defaultValueCtx, defaultMarkdown);
            ctx.update(editorViewOptionsCtx, (prev) => ({
                ...prev,
                editable: () => canEdit,
            }));
            
        })
        .config(configureLinkTooltip)
        .use(commonmark)
        .use(listItemBlockComponent)
        .use(imageBlockComponent)
        .use(linkTooltipPlugin)
        .use(AddLinkInputRule)
        .use(history)
        .use(math)
        ,  
    );

    return <Milkdown />;
};

export const MilkdownStylingControls: React.FC = () => {
    // I don't know yet
}

export const MilkdownEditorControls: React.FC = () => {
    const [isLoading, getInstance] = useInstance();

    const handleSave = () => {
        if (isLoading) return;

        const editor = getInstance();
        if (!editor) return;

        const content = editor.action(getMarkdown());
        // Do something with the content

        console.log(content); 
    };

    // const handleSaveDraft: () => void

    return (
        <button type="button" title="Save" onClick={handleSave} disabled={isLoading}>
        Save
        </button>
    );
};