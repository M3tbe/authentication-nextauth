import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen bg-black">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <label className="swap swap-flip text-9xl my-6">
          <input type="checkbox" />
          <div className="swap-on">😈</div>
          <div className="swap-off">😇</div>
        </label>
        <div className="text-center max-w-screen-sm mb-10">
          <h1 className="text-stone-200 font-bold text-4xl">
            Amazing Software Landing Page
          </h1>
          <p className="text-stone-400 mt-8">
            Imagine It&rsquo;s a product landing page for an outstanding
            money-making SaaS.
          </p>
          <p className="text-stone-400 mt-5">
            You are engaged in a demo that aims to demonstrate the
            authentication process between the landing page and the app
            dashboard itself.
            <p className="text-stone-400 mt-5">
              The technologies used are Next.js, NextAuth, ReactJS, TailwindCSS,
              PostgreSQL, and Prisma for the persistence of created profiles.
            </p>
          </p>
        </div>
        <Link href="/protected" prefetch={false} className="btn btn-primary">
          Get started for free
        </Link>
      </div>
    </div>
  );
}
