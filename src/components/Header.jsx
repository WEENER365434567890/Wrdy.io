import Image from "next/image"
import Link from "next/link"
import Separator from "./Separator"
import { saveAs } from "file-saver";

export default function Header () {
  const saveFile = () => {
    saveAs(
      "https://weener365434567890.github.io/Wrdy/",
      "example.pdf"
    );
  };
  return (
    <section className='bg-orange-500 relative min-h-[30vh]'>
      <header className="h-[20vh] p-6 flex flex-row items-center justify-between">
        <h1 className="text-4xl md:text-5xl font-['Dancing_Script']">Wrdy 🖋️</h1>
        <div>
          <button onClick={saveFile}>To continue using this website you are agreeable to the Terms And Conditions</button>
        </div>
      </header>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
         <Separator />
      </div>
    </section>
  )
}
