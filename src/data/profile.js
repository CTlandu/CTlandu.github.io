// Text fields are { en, zh }; read them through useT() from lib/i18n.
export const contact = {
  email: 'jizhoutang@outlook.com',
  linkedin: 'https://www.linkedin.com/in/colin-tang-983771180/',
  github: 'https://github.com/CTlandu',
  instagram: 'https://www.instagram.com/ctphotography77/',
  resume: {
    en: '/assets/pdf/ColinTang-Resume-SWE.pdf',
    zh: '/assets/pdf/TangJizhou-Resume-SWE-zh.pdf',
  },
}

export const hero = {
  title: { en: 'Hi, I’m Colin.', zh: '你好，我是唐济舟。' },
  intro: {
    en: 'M.S. student in Computational Operations Research at William & Mary. I build products, mostly with AI in the loop, and take photos on the side.',
    zh: '威廉与玛丽学院计算运筹学硕士在读。平时用 AI 做产品，业余拍照。',
  },
  status: { en: 'Open to SWE & PM roles', zh: '在找软件工程 / 产品经理方向的工作' },
}

export const featured = {
  name: 'Favly',
  kind: { en: 'Solo founder · 2025 – now', zh: '独立开发 · 2025 至今' },
  href: 'https://favly.me',
  linkLabel: 'favly.me',
  image: '/assets/img/projects/favly.webp',
  summary: {
    en: 'A link-in-bio for your taste: the films, shows, books, games and music you love, on one page.',
    zh: '展示个人品味的主页：把喜欢的电影、剧、书、游戏和音乐放在同一页。',
  },
  note: { en: '1,000+ active users.', zh: '1,000+ 活跃用户。' },
}

export const work = [
  {
    name: { en: 'TLDR Bilingual Tech News', zh: 'TLDR 中文版' },
    kind: { en: 'Solo founder · 2024 – now', zh: '独立开发 · 2024 至今' },
    href: 'https://www.tldrnewsletter.cn',
    linkLabel: 'tldrnewsletter.cn',
    image: '/assets/img/projects/tldr.webp',
    summary: {
      en: 'A daily tech newsletter in Chinese, translated and published by an automated pipeline. 4,800+ subscribers.',
      zh: '每天把英文科技新闻翻译成中文，抓取、翻译、发布全自动。4,800+ 订阅。',
    },
  },
  {
    name: 'Wordspace',
    kind: { en: 'Internship · Tenth Global · 2026', zh: '实习 · Tenth Global · 2026' },
    href: 'https://www.wordspace.ai/en',
    linkLabel: 'wordspace.ai',
    image: '/assets/img/projects/wordspace.webp',
    summary: {
      en: 'A desktop editor where people and AI agents work on the same files. I took it from spec to signed release.',
      zh: '人和 AI Agent 共用同一批文件的桌面编辑器。我负责把它从需求做到签名发版。',
    },
  },
]

export const experience = [
  {
    org: 'Tenth Global',
    href: 'https://www.wordspace.ai/en',
    role: { en: 'AI Agent Intern', zh: 'AI Agent 实习生' },
    date: { en: 'Apr – Aug 2026', zh: '2026.04 – 2026.08' },
    note: {
      en: 'Shipped the Wordspace desktop app for macOS and Windows.',
      zh: '交付 Wordspace 的 macOS 和 Windows 桌面版。',
    },
  },
  {
    org: 'Waveform.ai',
    href: 'https://waveformai.wm.edu/',
    role: { en: 'Product Manager Intern', zh: '产品经理实习生' },
    date: { en: 'Sep 2024 – Apr 2025', zh: '2024.09 – 2025.04' },
    note: {
      en: 'W&M project putting a custom AI on stage with live musicians.',
      zh: '威廉与玛丽学院的项目，让定制 AI 和真人乐手同台演出。',
    },
  },
  {
    org: { en: 'Virginia Department of General Services', zh: '弗吉尼亚州总务部' },
    href: 'https://dgs.virginia.gov/',
    role: { en: 'Web Marketing Intern', zh: '网站营销实习生' },
    date: { en: 'Jun – Aug 2024', zh: '2024.06 – 2024.08' },
  },
  {
    org: { en: 'Utopilot (SAIC Motor)', zh: '友道智途（上汽集团）' },
    href: 'https://www.saicmotor.com/english/index.shtml',
    role: { en: 'Product Development Intern', zh: '产品开发实习生' },
    date: { en: 'May – Aug 2023', zh: '2023.05 – 2023.08' },
  },
]

export const education = [
  {
    school: { en: 'William & Mary', zh: '威廉与玛丽学院' },
    degree: { en: 'M.S., Computational Operations Research', zh: '计算运筹学硕士' },
    date: '2025 – 2027',
  },
  {
    school: { en: 'William & Mary', zh: '威廉与玛丽学院' },
    degree: { en: 'B.S., Computer Science · Minor in Art & Design', zh: '计算机科学学士 · 辅修艺术设计' },
    date: '2022 – 2025',
  },
]

export const research = [
  {
    title: { en: 'Interpretable Routing in Disaster Response Management', zh: '灾害响应管理中的可解释路径规划' },
    href: 'https://www.yutingyuan.net/zero-covid-policy',
    who: { en: 'With Prof. Yuting Yuan', zh: '与 Yuting Yuan 教授合作' },
  },
  {
    title: {
      en: 'Recommendation Systems for Matching Students with Research Advisors',
      zh: '为学生匹配研究导师的推荐系统',
    },
    who: { en: 'With Prof. Yuting Yuan', zh: '与 Yuting Yuan 教授合作' },
  },
]

export const award = {
  href: 'https://www.instagram.com/p/C_twhg3oUM2/',
  label: { en: 'Winner, AAP Magazine #41: B&W', zh: 'AAP Magazine 第 41 期黑白组获奖' },
}

export const photoStrip = [
  { src: '/assets/img/portraits/HK/1.webp', alt: 'Portrait in a retro Hong Kong interior', to: '/photography/portraits' },
  { src: '/assets/img/portraits/sea/1.webp', alt: 'Portrait by the water holding reeds', to: '/photography/portraits' },
  { src: '/assets/img/OBX/4.webp', alt: 'Sea Foam motel sign at dusk, Outer Banks', to: '/photography/outerbanks_vid' },
  { src: '/assets/img/portraits/zjw/1.webp', alt: 'Black and white portrait by a window', to: '/photography/portraits' },
  { src: '/assets/img/Travel/5.webp', alt: 'Waves on a rocky coastline', to: '/photography/travels' },
]

export const archive = [
  {
    slug: '2025',
    href: '/archive/2025/',
    cover: '/assets/img/archive/2025.webp',
    period: { en: 'Dec 2025 – Oct 2026', zh: '2025.12 – 2026.10' },
    title: { en: 'React rewrite', zh: 'React 重写版' },
    summary: {
      en: 'Rebuilt from scratch with React and Tailwind, with Favly and TLDR up front.',
      zh: '用 React 和 Tailwind 从头重写，首页放上了 Favly 和 TLDR。',
    },
  },
  {
    slug: '2024',
    href: '/archive/2024/',
    cover: '/assets/img/archive/2024.webp',
    period: { en: 'Sep 2024 – Dec 2025', zh: '2024.09 – 2025.12' },
    title: { en: 'Senior year', zh: '大四版' },
    summary: {
      en: 'Same Jekyll theme, rewritten: experience, projects and a tech stack.',
      zh: '同一个 Jekyll 主题的大改版，加了经历、项目和技术栈。',
    },
  },
  {
    slug: '2023',
    href: '/archive/2023/',
    cover: '/assets/img/archive/2023.webp',
    period: { en: 'Sep 2023 – Sep 2024', zh: '2023.09 – 2024.09' },
    title: { en: 'First site', zh: '第一版' },
    summary: {
      en: 'Built on the al-folio Jekyll theme in junior year: about me, research and photography.',
      zh: '大三时基于 al-folio（一个 Jekyll 学术主题）搭的，放了自我介绍、研究和摄影。',
    },
  },
]
