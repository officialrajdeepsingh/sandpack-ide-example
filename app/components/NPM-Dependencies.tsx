"use client"

import { Sandpack } from '@codesandbox/sandpack-react';

export function NPM() {
  return (
    <Sandpack
      theme="dark"
      template="react"
      files={{
        "/App.js": `import { Hero } from "./Hero"; \n
export default function app() {

  return <Hero />

}`,
        "/Hero.js": `export  function Hero() {

  return (<section class="w-full bg-white dark:bg-wickeddark">
  <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
    <div class="flex w-full mx-auto text-left">
      <div class="relative inline-flex items-center mx-auto align-middle">
        <div class="pb-12 text-center">
          <h1 class="max-w-5xl text-3xl font-bold leading-none tracking-tighter text-neutral-600 md:text-6xl lg:text-7xl lg:max-w-7xl">
            Long headline to turn <br class="hidden lg:block" />
            your visitors into users
          </h1>
        </div>
      </div>
    </div>

    <div class="mx-auto text-center">
      <div class="grid grid-cols-5 gap-4 mx-auto lg:grid-cols-5">
        <div>
          <img class="h-4 mx-auto lg:h-12" src="https://d33wubrfki0l68.cloudfront.net/5a364f2e7cfeadd0f603cdfeda83f5cd0509770d/3f0ae/images/logos/logoone.svg" alt="Figma"/>
        </div>
        <div>
          <img class="h-4 mx-auto lg:h-12" src="https://d33wubrfki0l68.cloudfront.net/ab0d1eeefb9cddb55f05f1601b2ae3fbae9317a9/5bfbe/images/logos/logotwo.svg" alt="Framer"/>
        </div>
        <div>
          <img class="h-4 mx-auto lg:h-12" src="https://d33wubrfki0l68.cloudfront.net/2fea2d550675d7cf3bb77a515487bce6c086051b/951f5/images/logos/logothree.svg" alt="Sketch "/>
        </div>
        <div>
          <img class="h-4 mx-auto lg:h-12" src="https://d33wubrfki0l68.cloudfront.net/f9b8da8b1442382848d30275dc2d0337d14a04c9/dc8f4/images/logos/logofour.svg" alt="Sketch "/>
        </div>
        <div>
          <img class="h-4 mx-auto lg:h-12" src="https://d33wubrfki0l68.cloudfront.net/07ddf740e29509004147c6a83c09f299366546c9/03a26/images/logos/logofive.svg" alt="Invision"/>
        </div>
      </div>
    </div>
  </div>
</section>
)}`
      }}
    />
  )
}
