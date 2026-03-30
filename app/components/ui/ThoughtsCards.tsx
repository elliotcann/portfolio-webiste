"use client";

import { motion } from "framer-motion";
import { BsTwitterX, BsArrowUpRight } from "react-icons/bs";

export interface TweetData {
  url: string;
  text: string;
  authorName: string;
  authorUrl: string;
  date: string;
}

export default function ThoughtsCards({ tweets }: { tweets: TweetData[] }) {
  if (tweets.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {tweets.map((tweet, i) => (
        <motion.a
          key={tweet.url}
          href={tweet.url}
          target="_blank"
          rel="noopener noreferrer"
          className="card-item flex flex-col gap-4 cursor-pointer no-underline group"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-2">
            <div className="w-8 h-8 rounded-full bg-[var(--color-primary-light)] border border-[rgba(124,58,237,0.2)] flex items-center justify-center shrink-0">
              <BsTwitterX size={14} className="text-[var(--color-primary)]" />
            </div>
            <BsArrowUpRight
              size={14}
              className="text-[var(--color-text-light)] group-hover:text-[var(--color-primary)] transition-colors mt-1 shrink-0"
            />
          </div>

          {/* Tweet text */}
          <p className="text-sm text-[var(--color-text)] leading-relaxed flex-1 whitespace-pre-wrap">
            {tweet.text}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-3 border-t border-[var(--color-border)]">
            <span className="text-xs font-medium text-[var(--color-text-heading)]">
              {tweet.authorName}
            </span>
            {tweet.date && (
              <span className="text-xs text-[var(--color-text-light)]">{tweet.date}</span>
            )}
          </div>
        </motion.a>
      ))}
    </div>
  );
}
