import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col md:flex-row">
      <div className="md:w-96 mt-0 bg-[#cbd3d4] pt-16 p-8">
        <h1 className="text-5xl p-8 pb-0">Matt</h1>
        <h1 className="text-5xl p-8 pt-0" style={{ letterSpacing: "12px" }}>
          Lee
        </h1>
        <p>
          Developer intrerested in web3 and music tech. Building POLP(Proof of
          Listenership Platform). Exploring web3 social, contributing to open
          source projects, and getting better all the time.
        </p>
      </div>
      <div className="flex-col text-center w-full justify-center p-8">
        <h1 className="text-5xl font-bold p-8">Projects</h1>
        <div className="p-8">
          <a className="text-2xl">POLP</a>
        </div>
        <div className="p-8">
          <a className="text-2xl">AI Music Promo</a>
        </div>
        <div className="p-8">
          <a className="text-2xl">Color Chords</a>
        </div>
        <div className="p-8">
          <a className="text-2xl">Buddha Says</a>
        </div>
      </div>
    </main>
  );
}
