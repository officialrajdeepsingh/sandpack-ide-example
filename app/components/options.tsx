"use client"

import { Sandpack } from '@codesandbox/sandpack-react';
import { autocompletion, completionKeymap } from "@codemirror/autocomplete";

export  function SandboxIDEOptions() {
  return (<Sandpack
          customSetup={{
            dependencies: {
              "react-markdown": "latest"
            }
          }}
          extensions={[autocompletion()]}
          extensionsKeymap={[completionKeymap]}
          options={{
            showTabs: true,
            showConsoleButton: true,
            showConsole: true,
            showNavigator: true,
            showLineNumbers: true, // default - true
            showInlineErrors: true, // default - false
            wrapContent: true, // default - false
            editorHeight: 764, // default - 300
            editorWidthPercentage: 80, // default - 50
          }}
          theme="dark"
          template="react"
          files={{
            "/App.js": `import ReactMarkdown from 'react-markdown';

export default function App() {
  return (
    <ReactMarkdown>
      A **paragraph** with *emphasis* and **strong importance**.
    </ReactMarkdown>
  )
}`,
            "/Main.js": `import ReactMarkdown from 'react-markdown';

export default function App() {
  return (
    <ReactMarkdown>
     # Hello World
    </ReactMarkdown>
  )
}`

          }}
        />

  )
}
