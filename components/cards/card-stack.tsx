"use client";
import { useMemo, useState } from "react";
import Image from "next/image";

// import specs for stack
// assign index to each and use for cards
interface CardStackProps {
  children: CardProps[];
  className?: string;
}

interface CardProps {
  photo: string;
  heading: string;
  description: string;
}


export default function CardStack({ children, className }: CardStackProps) {
  // derive list of keys for children
  const childKeys = useMemo(() => {
    return children.map((_, index) => index).reverse();
  }, [children]);


  const [cards, setCards] = useState(childKeys);
  const [animating, setAnimating] = useState(false);

  const displayCards = useMemo(() => [...cards], [cards]);
  console.log("displayCards", displayCards);

  function handleClick(card: number) {
    if (animating) return;

    // Only allow clicking the top card
    if (card !== displayCards.at(-1)) return;

    setAnimating(true);

    setTimeout(() => {
      setCards((prev) => {
        const copy = [...prev];
        const top = copy.pop()!;
        copy.unshift(top);
        return copy;
      });

      setAnimating(false);
    }, 700);
  }

  return (
    <div className={`relative h-[500px] w-[500px] ${className || ""}`}>
      {displayCards.map((card, index) => {
        const cardProps = children[card];
        const total = displayCards.length;
        const nthLast = total - index;

        let translateX = "translateX(-50%)";
        let scale = 1;
        let shadow =
          "0 5px 10px rgba(0,0,0,.25), 0 15px 20px rgba(0,0,0,.15)";

        if (nthLast >= 4) {
          translateX = "translateX(calc(-50% + 30px))";
          scale = 0.9;
          shadow = "0 0 1px rgba(0,0,0,.1)";
        } else if (nthLast === 3) {
          translateX = "translateX(calc(-50% + 15px))";
          scale = 0.95;
        } else if (nthLast === 2) {
          translateX = "translateX(-50%)";
          scale = 1;
        } else {
          translateX = "translateX(calc(-50% - 15px))";
          scale = 1.05;
        }

        const isTop = nthLast === 1;
        
        return (
          <div
            key={card}
            onClick={() => handleClick(card)}
            className={[
              "absolute",
              "grid h-[90%] w-[75%] place-items-center",
              "overflow-hidden rounded-lg",
              "card-surface card-surface-hover rotate-2",
              "transition-transform duration-100",
              isTop && animating ? "animate-card-swap" : "",
            ].join(" ")}
            style={{
              transform: `translate(-50%,0) ${translateX} scale(${scale})`,
              boxShadow: shadow,
              cursor: isTop ? "pointer" : "default",
            }}
          >
            <Image src={cardProps ? cardProps.photo : ""} alt={cardProps ? cardProps.heading : ""} fill className="object-cover" />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative flex h-full flex-col gap-3 p-7">
              <span className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
                with {cardProps?.heading}
              </span>
              <h3 className="text-lg font-semibold text-foreground">
                {cardProps?.description}
              </h3>
            </div>
        </div>
        );
      })}
    </div>
  );
}