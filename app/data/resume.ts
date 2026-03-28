export interface ResumeItem {
  id: string;
  title: string;
  period: string;
  institution?: string;
  location?: string;
  url?: string;
  description: string;
  bullets: string[];
  icon: string; // react-icons bi name
}

export const education: ResumeItem[] = [
  {
    id: "itcareerswitch",
    title: "IT Career Switch Coding Course",
    period: "2023 – Present",
    url: "https://itcareerswitch.co.uk/",
    description:
      "Intensive course covering coding fundamentals, hands on projects, and collaborative development, with an exam and senior reviewed projects leading to a professional portfolio.",
    bullets: [
      "Built and deployed <strong>full stack applications</strong> using industry best practices",
      "Passed a <strong>rigorous technical exam</strong>, demonstrating strong coding proficiency",
      "Developed a <strong>professional portfolio</strong>, showcasing front end and back end expertise",
      "Completed this intensive program <strong>while working full time as a Retail Store Manager</strong>, demonstrating strong time management and dedication",
    ],
    icon: "BsCodeSquare",
  },
  {
    id: "codecademy",
    title: "Codecademy Full Stack Engineering Career Path",
    period: "2023 – 2024",
    url: "https://www.codecademy.com/profiles/CannElliot",
    description:
      "Comprehensive program covering front end and back end development, databases, version control, deployment, DevOps, testing, and debugging. Earned certificates in Full Stack Engineering, PHP, Bootstrap, Python, and jQuery.",
    bullets: [
      "<strong>Collaborated with developers</strong> on real world coding challenges, enhancing teamwork",
      "Mastered <strong>Git and collaborative workflows</strong>, ensuring clean version control",
      "Developed <strong>dynamic web solutions</strong>, integrating databases, authentication, and APIs",
      "Earned <strong>five industry recognised certificates</strong>, validating expertise across multiple technologies",
    ],
    icon: "BsPcDisplayHorizontal",
  },
];

export const experience: ResumeItem[] = [
  {
    id: "vodafone",
    title: "Vodafone Retail Store Manager",
    period: "2021 – Present",
    location: "Vodafone Witney, Oxfordshire",
    description:
      "Results driven leader with a proven track record in sales, team development, and operational excellence. Managed a high performing team of five, driving success in one of the UK's leading telecom brands. Committed to store excellence, employee growth, and delivering top tier customer service.",
    bullets: [
      "Consistently <strong>exceeded sales targets</strong>, driving revenue growth",
      "<strong>Won Franchise Store of the Year 2024</strong>, recognised for outstanding performance and leadership",
      "Mentored and developed <strong>top sales performers</strong>, with team members breaking records",
      "Passed <strong>Vodafone executive audits and visits</strong> with excellence",
      "Achieved <strong>outstanding customer service ratings</strong> on Trustpilot and internal reviews",
      "Created a <strong>high energy, motivated team culture</strong>, boosting morale and productivity",
    ],
    icon: "BsShop",
  },
];
