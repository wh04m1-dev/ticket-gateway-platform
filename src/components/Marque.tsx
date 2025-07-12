"use client"
import Image from "next/image";
import { cn } from "@/utils/index"
import Marquee from "react-fast-marquee"

const reviews = [
  { name: "Jack", username: "@jack", body: "I've never seen anything like this before. It's amazing. I love it.", img: "https://avatar.vercel.sh/jack" },
  { name: "Jill", username: "@jill", body: "I don't know what to say. I'm speechless. This is amazing.", img: "https://avatar.vercel.sh/jill" },
  { name: "John", username: "@john", body: "I'm at a loss for words. This is amazing. I love it.", img: "https://avatar.vercel.sh/john" },
  { name: "Jane", username: "@jane", body: "I'm at a loss for words. This is amazing. I love it.", img: "https://avatar.vercel.sh/jane" },
  { name: "Jenny", username: "@jenny", body: "I'm at a loss for words. This is amazing. I love it.", img: "https://avatar.vercel.sh/jenny" },
  { name: "James3", username: "@james", body: "I'm at a loss for words. This is amazing. I love it.", img: "https://avatar.vercel.sh/james" },
  { name: "James4", username: "@james", body: "I'm at a loss for words. This is amazing. I love it.", img: "https://avatar.vercel.sh/james" },
  { name: "James5", username: "@james", body: "I'm at a loss for words. This is amazing. I love it.", img: "https://avatar.vercel.sh/james" },
  { name: "James6", username: "@james", body: "I'm at a loss for words. This is amazing. I love it.", img: "https://avatar.vercel.sh/james" },
  { name: "James", username: "@james", body: "I'm at a loss for words. This is amazing. I love it.", img: "https://avatar.vercel.sh/james" },
  { name: "James7", username: "@james", body: "I'm at a loss for words. This is amazing. I love it.", img: "https://avatar.vercel.sh/james" },
  { name: "James58", username: "@james", body: "I'm at a loss for words. This is amazing. I love it.", img: "https://avatar.vercel.sh/james" },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 mx-2",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width={32}
          height={32}
          alt={`${name}'s avatar`}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  )
}

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      {/* First Marquee - Left to Right */}
      <Marquee
        pauseOnHover
        speed={20}
        className="py-4"
      >
        {firstRow.map((review, index) => (
          <ReviewCard key={`${review.username}-${index}`} {...review} />
        ))}
      </Marquee>

      {/* Second Marquee - Right to Left */}
      <Marquee
        pauseOnHover
        direction="right"
        speed={20}
        className="py-4"
      >
        {secondRow.map((review, index) => (
          <ReviewCard key={`${review.username}-${index}`} {...review} />
        ))}
      </Marquee>

      {/* Gradient Overlay for better visibility */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
    </div>
  )
}