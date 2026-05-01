import { Editor, editorViewCtx } from "@milkdown/kit/core"
import { tooltipFactory, TooltipProvider } from "@milkdown/kit/plugin/tooltip"
import { toggleEmphasisCommand, toggleInlineCodeCommand, toggleStrongCommand } from "@milkdown/kit/preset/commonmark"
import { callCommand } from "@milkdown/kit/utils"
import type { EditorView } from "@milkdown/kit/prose/view"
import type { PluginView } from "@milkdown/kit/prose/state"
import { createRoot } from "react-dom/client"
import type { Ctx } from "@milkdown/kit/ctx"

export const tooltip = tooltipFactory('Text');


function isStylePresent (editor: Editor, style: string): boolean {
    return editor.action((ctx) => {
        const view = ctx.get(editorViewCtx);
        const { state } = view;
        const { from, to, $from } = state.selection;
        const markType = state.schema.marks[style];
        console.log(state.schema.marks); 

        return state.selection.empty
        ? !!markType.isInSet(state.storedMarks || $from.marks())
        : state.doc.rangeHasMark(from, to, markType);
    });
}

function TooltipCtrlsBtn({ editor, active, command, element }: { editor: Editor; active: boolean; command: (ctx: Ctx) => boolean; element: React.ReactNode }) {
    return (
        <button
            className={`ctrls ${active ? "active" : ""}`}
            onMouseDown={(e) => {
                // Use `onMouseDown` with `preventDefault` to prevent the editor from losing focus.
                // console.log("shit works"); 
                e.preventDefault(); 
                // const { selection,  } = editor.action((ctx) => {
                //     const view = ctx.get(editorViewCtx);
                //     return view.state; // returns the editor state containing selection
                // });
                editor.action(command)
            }}
        >
            {element}
        </button>
    )
}

export const tooltipView = (_view: EditorView, editor: Editor): PluginView => {
    const content = document.createElement('div'); 
    content.className = "position-absolute tooltip";
    const ctntRoot = createRoot(content); 

    const provider = new TooltipProvider({
        content, 
    })

    return {
        update: (updatedView, prevState) => {
            provider.update(updatedView, prevState); 
            var isBoldActive = isStylePresent(editor, "strong"); 
            var isItalicsActive = isStylePresent(editor, "emphasis"); 
            var isInlineCodeActive = isStylePresent(editor, "inlineCode"); 

            ctntRoot.render(<> 
                <TooltipCtrlsBtn editor={editor} active={isBoldActive} command={callCommand(toggleStrongCommand.key)} element={<b>B</b>} />
                <TooltipCtrlsBtn editor={editor} active={isItalicsActive} command={callCommand(toggleEmphasisCommand.key)} element={<i>I</i>} />
                <TooltipCtrlsBtn editor={editor} active={isInlineCodeActive} command={callCommand(toggleInlineCodeCommand.key)} element={<>&lt;&gt;</>} />
            </>)
        }, 
        destroy: () => {
            ctntRoot.unmount();
            provider.destroy(); 
            content.remove(); 
        }
    }
}