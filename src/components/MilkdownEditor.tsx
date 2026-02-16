import { defaultValueCtx, Editor, editorViewOptionsCtx, rootCtx } from "@milkdown/kit/core";
import { commonmark, linkSchema, } from "@milkdown/kit/preset/commonmark";
import { InputRule, } from "@milkdown/kit/prose/inputrules";
import { $inputRule } from "@milkdown/kit/utils";
import { Milkdown, useEditor } from "@milkdown/react";
import { listItemBlockComponent } from "@milkdown/components/list-item-block"
import { configureLinkTooltip, linkTooltipPlugin } from "@milkdown/kit/component/link-tooltip";

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
    defaultMarkdown: string, 
    /** whether the editor is editable (readonly or not?) */
    canEdit: boolean, 
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
        .use(linkTooltipPlugin)
        .use(AddLinkInputRule)
        ,  
    );

    return <Milkdown />;
};