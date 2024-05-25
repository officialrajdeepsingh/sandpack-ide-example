import { NPM } from "./components/NPM-Dependencies";
import { SandboxReadOnly } from "./components/Read-only";
import { SandboxBasic } from "./components/basic-example";
import { Configuration } from "./components/configurations";
import { SandboxIDEOptions } from "./components/options";

export default function Home() {
  return (
    <main className="flex w-[1224px] h-[724px]  mx-auto flex-col items-center justify-between pt-24">

      <h2 className="text-6xl mb-5"> Basic Example:</h2>
      <SandboxBasic />

      <h2 className="text-6xl my-5"> Configuration </h2>
      <Configuration />

      <h2 className="text-6xl my-5"> NPM dependencies </h2>
      <NPM />

      <h2 className="text-6xl my-5"> Options </h2>
      <SandboxIDEOptions />

      <h2 className="text-6xl my-5"> Read Only</h2>
      <SandboxReadOnly />

    </main>
  );
}
