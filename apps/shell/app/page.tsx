import Image from "next/image";

import Icon from './icon.png'

export default function Home() {
    return (
      <main>
        <Image src={Icon} alt="A server surrounded by magic sparkles." />
        <h1>Welcome to this NextJS Course!</h1>
        <p>🔥 Let&apos;s get started! 🔥</p>
      </main>
    );
  }
  