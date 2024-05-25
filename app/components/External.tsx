"use client"

import { Sandpack } from '@codesandbox/sandpack-react';
import { amethyst } from "@codesandbox/sandpack-themes"; // import it with npm, yarn and pnpm

export function ExternalBasic() {
  return (
    <Sandpack
      customSetup={{
        dependencies: {
          "title": "latest"
        }
      }}
      options={{
        externalResources: ["https://cdn.tailwindcss.com"]
      }}
      theme={amethyst}
      template="react"
      files={{
        "/App.js": `import { Hero } from "./Hero"; \n
export default function app() {

  return <Hero />

}`,
        "/Hero.js": `import title from 'title';

export  function Hero() {

  return (
       <div class="card">
          <h1>{title('Hello world')}</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          <a href="#" title="read more"> Read more about the offer » </a>
       </div>
)}`
      }}
    />
  )
}
