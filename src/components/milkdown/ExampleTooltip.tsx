import { Editor } from "@milkdown/kit/core"
import { tooltipFactory, TooltipProvider } from "@milkdown/kit/plugin/tooltip"
import { toggleStrongCommand } from "@milkdown/kit/preset/commonmark"
import { callCommand } from "@milkdown/kit/utils"
import type { EditorView } from "@milkdown/kit/prose/view"
import type { PluginView } from "@milkdown/kit/prose/state"
import { createRoot } from "react-dom/client"

export const tooltip = tooltipFactory('Text');

function BoldButton({ editor }: { editor: Editor }) {
    return (
        <button
            className="text-gray-600 bg-slate-200 px-2 py-1 rounded-lg hover:bg-slate-300 border hover:text-gray-900"
            onMouseDown={(e) => {
                // Use `onMouseDown` with `preventDefault` to prevent the editor from losing focus.
                console.log("shit works"); 
                e.preventDefault(); 
                editor.action(callCommand(toggleStrongCommand.key))
            }}
        >
            Bold
        </button>
    )
}

export const tooltipView = (view: EditorView, editor: Editor): PluginView => {
    const content = document.createElement('div'); 
    content.className = "position-absolute tooltip";
    const ctntRoot = createRoot(content); 
    ctntRoot.render(
        <BoldButton editor={editor} />
    ); 

    const provider = new TooltipProvider({
        content, 
    })

    return {
        update: (updatedView, prevState) => {
            provider.update(updatedView, prevState)
        }, 
        destroy: () => {
            ctntRoot.unmount();
            provider.destroy(); 
            content.remove(); 
        }
    }
}