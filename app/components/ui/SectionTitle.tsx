interface SectionTitleProps {
  title: string;
  subtitle: string;
  tag?: string;
}

export default function SectionTitle({ title, subtitle, tag }: SectionTitleProps) {
  return (
    <div className="section-title">
      {tag && <span className="section-tag">{tag}</span>}
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}
