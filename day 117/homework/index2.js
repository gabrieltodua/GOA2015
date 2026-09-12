import React from "react"
import {Component,Component1,Component2,Component3} from "./index1"
import createRoot from "react-dom/client"

let app = document.getElementById("app")
let root = createRoot(app)

root.render(Component)
root.render(Component1)
root.render(Component2)
root.render(Component3)

