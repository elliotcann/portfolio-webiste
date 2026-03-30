import { BsTwitterX, BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import SectionTitle from "@/app/components/ui/SectionTitle";
import AnimatedSection from "@/app/components/ui/AnimatedSection";
import ThoughtsCards, { type TweetData } from "@/app/components/ui/ThoughtsCards";
import { thoughtsTweetUrls } from "@/app/data/thoughts";

function extractText(html: string): string {
  const pMatch = html.match(/<p[^>]*>([\s\S]*?)<\/p>/);
  if (!pMatch) return "";
  return pMatch[1]
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<a[^>]*>(.*?)<\/a>/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/https:\/\/t\.co\/\S+/g, "")
    .replace(/pic\.twitter\.com\/\S+/g, "")
    .trim();
}

function extractDate(html: string): string {
  const matches = [...html.matchAll(/<a[^>]+>([^<]+)<\/a>/g)];
  return matches.length > 0 ? matches[matches.length - 1][1] : "";
}

async function fetchTweet(url: string): Promise<TweetData> {
  const endpoint = `https://publish.twitter.com/oembed?url=${encodeURIComponent(url)}&dnt=true&omit_script=true`;
  const res = await fetch(endpoint, { next: { revalidate: 3600 } });
  if (!res.ok) throw new Error(`oEmbed failed for ${url}`);
  const data = await res.json();
  return {
    url,
    text: extractText(data.html as string),
    authorName: data.author_name as string,
    authorUrl: data.author_url as string,
    date: extractDate(data.html as string),
  };
}

export default async function Thoughts() {
  const results = await Promise.allSettled(thoughtsTweetUrls.map(fetchTweet));
  const tweets = results
    .filter((r): r is PromiseFulfilledResult<TweetData> => r.status === "fulfilled")
    .map((r) => r.value);

  return (
    <section id="thoughts" className="section bg-[var(--color-bg-light)] relative overflow-hidden">
      {/* Ambient glow */}
      <div aria-hidden className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-700/7 rounded-full blur-3xl pointer-events-none -translate-x-1/4 translate-y-1/3" />
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <AnimatedSection animation="fade-up">
          <SectionTitle
title="Latest Thoughts"
            subtitle="What I've been thinking about in AI, automation, and development"
          />
        </AnimatedSection>

        <ThoughtsCards tweets={tweets} />

        {/* Follow CTAs */}
        <AnimatedSection animation="fade-up" delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            {[
              { href: "https://github.com/elliotcann", icon: <BsGithub size={14} />, label: "Follow on GitHub" },
              { href: "https://www.linkedin.com/in/elliotcann", icon: <BsLinkedin size={14} />, label: "Follow on LinkedIn" },
              { href: "https://x.com/elliot_cann", icon: <BsTwitterX size={14} />, label: "Follow on X" },
              { href: "https://www.instagram.com/elliot.cann", icon: <BsInstagram size={14} />, label: "Follow on Instagram" },
            ].map(({ href, icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-[rgba(124,58,237,0.5)] text-[var(--color-text-heading)] text-sm font-medium bg-[var(--color-primary-light)] hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all duration-300 hover:-translate-y-0.5 shadow-[0_0_20px_rgba(124,58,237,0.15)]"
              >
                {icon}
                {label}
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
