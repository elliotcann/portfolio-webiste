import { BsTwitterX, BsLinkedin } from "react-icons/bs";
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
    <section id="thoughts" className="section bg-[var(--color-bg-light)]">
      <div className="container mx-auto px-4 max-w-5xl">
        <AnimatedSection animation="fade-up">
          <SectionTitle
            title="Latest Thoughts"
            subtitle="What I've been thinking about in AI, automation, and development"
          />
        </AnimatedSection>

        <ThoughtsCards tweets={tweets} />

        {/* Follow CTAs */}
        <AnimatedSection animation="fade-up" delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[rgba(124,58,237,0.35)] bg-[var(--color-primary-light)] text-[var(--color-primary)] text-sm font-medium hover:bg-[rgba(124,58,237,0.2)] hover:-translate-y-0.5 transition-all duration-200"
            >
              <BsTwitterX size={14} />
              Follow on X
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[rgba(124,58,237,0.35)] bg-[var(--color-primary-light)] text-[var(--color-primary)] text-sm font-medium hover:bg-[rgba(124,58,237,0.2)] hover:-translate-y-0.5 transition-all duration-200"
            >
              <BsLinkedin size={14} />
              Follow on LinkedIn
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
