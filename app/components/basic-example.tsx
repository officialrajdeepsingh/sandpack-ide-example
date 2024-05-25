"use client"

import { Sandpack } from '@codesandbox/sandpack-react';

export  function SandboxBasic() {
  return (
      <Sandpack
        theme="light"
        template="react"
        files={{
            "/App.js": `export default function app() {

  return (<p>Hello, World!</p>)

}`
        }}
      />
  )
}
