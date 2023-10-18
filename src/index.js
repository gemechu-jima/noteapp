import React from "react";
import ReactDOM  from "react-dom/client";
import { NoteProvider } from "./Context/Context";
import App from "./App";

const el=document.getElementById("root");
const root =ReactDOM.createRoot(el);
root.render(
    <NoteProvider>
    <App/>
    </NoteProvider>
    )