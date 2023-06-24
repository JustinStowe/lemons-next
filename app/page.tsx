"use client";
import Button from "./components/Button";
import { useRouter } from "next/navigation";
export default function HomePage() {
  const router = useRouter();
  const handleClick = (action: string) => {
    switch (action) {
      case "start":
        console.log("start button clicked");
        router.replace("/main_menu");
        break;
      default:
        break;
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-8xl text-center">
        Welcome to my version of <br />
        Lemonade Tycoon
      </h1>
      <section>
        <p className="text-center">
          Lemonade Tycoon, first released as Lemonade Inc. is a Shockwave-based
          game. A free, limited version is available for online play at many
          sites or the full version with no time restrictions can be purchased
          online. The overall goal of Lemonade Tycoon is to sell lemonade for
          profit. The last update (1.1.9) was renamed Lemonade Tycoon Deluxe. In
          2009, Electronic Arts published an iPhone version of Lemonade Tycoon,
          Lemonade Tycoon 2: New York Edition is also available on Mac OS X,
          published by MacPlay
        </p>
        <p className="text-center">
          Lemonade Tycoon has similarities to Lemonade Stand, a computer game
          originally created for the Minnesota Educational Computing Consortium
          in 1973 and was later ported by Apple Computer for use with its
          then-new Apple II platform in 1979. Lemonade Stand also required to
          make business decisions based upon weather, customers, and
          cost/availability of stock.
        </p>
        <p className="text-center">
          <a href="http://www.learningplanet.com">Learning Planet</a>, an
          educational website, created the original version of the game for
          teaching economics and resource management for its students. The
          LearningPlanet.com version of Lemonade Tycoon is visually different
          but functionally identical to the other iterations of the game.
        </p>
      </section>
      <section>
        <p className="text-center">
          While selling lemonade, players must look over many aspects of their
          business. Players decide on a recipe, set prices, and sell lemonade in
          a variety of locations. The game includes changing weather and news,
          which the player must compensate for. To overcome some factors, such
          as long lines and stock, players can buy upgrades, including tools,
          machines, and employees.
        </p>
      </section>
      <Button title="Start Game" onClick={() => handleClick("start")} />
    </main>
  );
}
