"use client"

import { Sandpack } from '@codesandbox/sandpack-react';

export function SandboxReadOnly() {
  return (
    <Sandpack
      options={{
        readOnly: true,
      }}
      theme="dark"
      template="react"
      files={{
        "/App.js": `export default function app() {

  return (<p>Hello, World!</p>)

}`
      }}
    />
  )
}
