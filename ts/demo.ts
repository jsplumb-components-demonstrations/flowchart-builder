import { newInstance, FlowchartBuilder } from "@jsplumb-components/flowchart"

const flowchart:FlowchartBuilder = newInstance({
    container:document.getElementById("container"),
    palette:{
        container:document.getElementById("palette")
    },
    inspector:{
        container:document.getElementById("inspector")
    },
    undoRedo:{
        undo:document.querySelector("[data-action='undo']"),
        redo:document.querySelector("[data-action='redo']")
    }
})

flowchart.loadUrl("../copyright.json", () => { flowchart.zoomToFit()})

document.getElementById("btnClear").addEventListener("click", function() {
    if (confirm("Clear dataset?")) {
        flowchart.clear()
    }
})
