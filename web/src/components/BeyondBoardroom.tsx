import Image from "next/image";
import { AnimatedStatNumber } from "@/components/AnimatedStatNumber";

/** Full Beyond the Boardroom body; used on `/beyond`. */
export function BeyondBoardroom() {
  return (
    <div>
      <div className="mx-auto max-w-3xl space-y-6 text-[1.05rem] font-light leading-[1.8] text-text-secondary md:text-[1.08rem]">
        <p>
          Twenty-six countries and three continents called home happened
          because I&apos;ve never needed the safety of the familiar. I&apos;d
          rather get a little lost and find my own way through, speaking
          English, Spanish and Farsi fluently, which means I&apos;m rarely
          stuck for long. That same appetite for the unknown is what let me
          build a business from scratch, back founders before anyone else
          would, and say yes to deals most people would call too risky.
          Curiosity gets you in the door; being willing to take the risk on
          what you find is what gets you somewhere new.
        </p>
        <p>
          Peru is where that curiosity started. It&apos;s where I was born,
          though my heritage is Persian, so travel has always felt like
          piecing together where I come from as much as discovering somewhere
          new. Machu Picchu was every bit as hard as it looks. The altitude
          alone will humble you, let alone the climb. I&apos;ll never forget
          standing on those terraces at sunrise, thinking about everything it
          took, centuries ago, to build something that ambitious in that
          landscape. It&apos;s the same thrill I get from a hard problem: the
          tougher the climb, the better the view.
        </p>
        <p>
          Home now is Melbourne, Australia, on an island continent that&apos;s
          every bit as beautiful as the places I travel to see. Some of my
          best thinking still happens on a beach walk five minutes from my
          door: proof you don&apos;t always need to get on a plane to find a
          bit of perspective.
        </p>
        <p>
          Antarctica&apos;s the one continent I haven&apos;t made it to yet.
          It&apos;s next on the list.
        </p>
      </div>

      <div className="mx-auto mt-12 flex flex-wrap justify-center gap-10 md:gap-16">
        <TravelStat n={26} label="Countries" />
        <TravelStat n={6} label="Continents" />
        <TravelStat n={3} label="Continents Called Home" />
        <TravelStat n={1} label="Bucket List (Antarctica)" />
      </div>

      <div className="mx-auto mt-12 max-w-[min(42rem,92vw)] overflow-hidden rounded-sm border border-brand-navy/45 shadow-[0_10px_26px_-6px_rgba(17,31,57,0.2)]">
        <div className="group relative aspect-[4/3] overflow-hidden bg-brand-navy/10">
          <Image
            src="/images/amelia_machu_picchu_travel.png"
              alt="Travel scenery at Machu Picchu: misty mountain peaks and Inca terraces in Peru"
            fill
            className="object-cover object-[center_30%] transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 92vw, 672px"
          />
        </div>
      </div>
    </div>
  );
}

function TravelStat({ n, label }: { n: number; label: string }) {
  return (
    <div className="text-center">
      <AnimatedStatNumber
        value={n}
        className="font-display text-4xl text-brand-navy md:text-5xl"
      />
      <p className="mt-1 max-w-[10rem] text-xs uppercase tracking-widest text-brand-taupe">
        {label}
      </p>
    </div>
  );
}
