import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col md:flex-row">
      <div className="md:w-96 mt-0 bg-[#cbd3d4] pt-16 p-8 flex flex-col items-center">
        <div className="md:flex-col  ">
          <Image
            src="/LinkedInPFP.jpeg"
            alt="Matt Lee"
            width="160"
            height="160"
            className="rounded-full"
          />
          <div className="mx-auto w-max">
            <h1 className="text-5xl p-8 text-left">
              Matt <br /> Lee
            </h1>
          </div>
        </div>
        <p>
          Developer intrerested in web3 and music tech. Building POLP(Proof of
          Listenership Platform). Exploring web3 social, contributing to open
          source projects, and getting better all the time.
        </p>
      </div>
      <div className="flex-col md:px-16 w-full justify-center p-8">
        <div className="p-8">
          <h2 className="text-slate-500">Project</h2>
          <a
            className="text-2xl hover:text-blue-800"
            href="https://www.polp.app/"
          >
            POLP
          </a>
          <p className=" text-left">
            Proof of Listenership Platform is a music streaming, discovery, and
            community management service that helps musicians find their
            superfans.
          </p>
        </div>
        <div className="p-8">
          <h2 className="text-slate-500">Project</h2>
          <a
            className="text-2xl hover:text-blue-800"
            href="https://www.aimusicpromo.com/"
          >
            AI Music Promo
          </a>
          <p>
            Creates promotional materials for music releases with generative AI
          </p>
        </div>
        <div className="p-8">
          <h2 className="text-slate-500">Project</h2>
          <a className="text-2xl hover:text-blue-800">Color Chords</a>
          <p>
            Plays a unique chord and timbre based on a randomly generated color.
          </p>
        </div>
        <div className="p-8">
          <h2 className="text-slate-500">Project</h2>
          <a
            className="text-2xl hover:text-blue-800"
            href="https://buddhasays.vercel.app/"
          >
            Buddha Says
          </a>
          <p>Chat with The Buddha. Find The Middle Path.</p>
        </div>
      </div>
    </main>
  );
}
