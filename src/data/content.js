// ---------------------------------------------------------------------------
// Everything personal lives here. Swap these values for your own and the whole
// site updates. Nothing else needs editing to make the site yours.
// ---------------------------------------------------------------------------

export const profile = {
  signature: 'GreYat Labs',        // the script logo in the header
  firstName: 'GREAT',
  lastName: 'OJIETOHAMEN',
  // The rotating job titles in the hero. Numbers are the pause in ms.
  roles: [
    'Software Developer', 2000,
    'Blockchain Developer', 2000,
    'Cybersecurity Specialist', 2000,
    'Data Analyst', 2000,
    'Researcher', 2000,
  ],
  intro:
    "Hello there, and welcome to my portfolio. I'm an independent software engineer and security researcher building at GreYat Labs, working across Rust, Solana, Sui and Bitcoin. I've published more than twenty open-source projects and filed documented findings against live protocols and SDKs. I believe in clean, verifiable code, and in software that still works on a low-end phone and an unreliable connection.",
  hireMeLink: '#contact',
  resumeLink: '/resume.pdf',
};

export const socials = {
  resume: '/resume.pdf',
  github: 'https://github.com/G-ojies',
  linkedin: 'https://www.linkedin.com/in/greatojietohamen',
  mail: 'mailto:greatojies@gmail.com',
  twitter: 'https://x.com/Great_ojies',
  telegram: 'https://t.me/G_Ojies',
};

export const about = {
  heading: 'About me',
  lead: "I'm a final-year Computer Science student at the University of Benin, and an independent software engineer and security researcher working across blockchain infrastructure, applied AI and data tooling.",
  body: [
    "Most of my work happens at GreYat Labs, where I design and ship end to end: Solana and Sui programs in Rust and Move, Bitcoin tooling, autonomous agents, and the interfaces that sit on top of them. I've published more than twenty open-source projects, several of them built for and submitted to hackathons and bounty programmes including the Solana Foundation, Superteam, Immunefi and LOL Ventures.",
    "The other half of what I do is taking systems apart. I run independent security reviews of third-party codebases and write up structured findings with reproductions and severity assessments: sixteen defects in a Rust confidential-computing SDK, eight in an agent-orchestration framework, and a mainnet fund-loss review of a privacy pool. Alongside that I do desk research and publish verified knowledge products, most recently a link-checked data-science library for medical laboratory science. I care about code that is clean, reviewable and honest about its limits, and about software that still works on a low-end phone and an unreliable connection.",
  ],
  stats: [
    { value: 4, suffix: '+', label: ['Years', 'Building'] },
    { value: 20, suffix: '+', label: ['Open-Source', 'Projects'] },
    { value: 20, suffix: '+', label: ['Security', 'Findings'] },
    { value: 4, suffix: '', label: ['Chains', 'Shipped On'] },
    { value: 150, suffix: '', label: ['Sources', 'Verified'] },
  ],
};

export const services = {
  heading: 'What I Do.',
  subheading: 'Major Highlights of My Capabilities...',
  items: [
    {
      name: 'Blockchain Engineering',
      description:
        'I design and ship on-chain systems end to end: Solana programs in Rust and Anchor, Move packages on Sui, and Bitcoin tooling down to raw transaction encoding. Recent work includes role-based access control as a Solana program, a BTC-collateralized lending vault, and a 2-of-3 FROST threshold wallet. You get working code, tests, deploy scripts and an interface, not a prototype that only runs on my machine.',
      link: '#contact',
    },
    {
      name: 'Security Review',
      description:
        'I take systems apart and write up what I find. Sixteen defects in a Rust confidential-computing SDK, eight in an agent-orchestration framework, and a mainnet fund-loss review of a privacy pool. Every finding ships with a reproduction, an impact assessment and a suggested fix, ranked so you know what to patch first. Smart contracts, agent frameworks and the infrastructure around them.',
      link: '#contact',
    },
    {
      name: 'Software Development',
      description:
        'Full-stack product work: React and Next.js on the front, Rust, Node and Python behind it, deployed and monitored. I build for the conditions my users actually have, so the things I ship stay fast on a low-end phone, degrade gracefully offline and load without a spinner farm. Clean state, honest error handling, and a codebase the next person can read.',
      link: '#contact',
    },
    {
      name: 'Data and Research',
      description:
        'Turning messy sources into something you can act on. I build indexers and pipelines that pull on-chain and market data into analysis, then report the result plainly, with the limits stated. On the desk-research side I produce verified knowledge products, most recently a link-checked data-science library for medical laboratory science built from over 150 checked sources.',
      link: '#contact',
    },
  ],
};

// `glow` is the coloured drop-shadow behind each card, matching the original's
// per-card shadow colours.
export const portfolio = {
  heading: 'Portfolio',
  intro:
    "I'm passionate about the work and services I render, having synced confidently with teams as well as working independently. Here are a few highlights for your reference...",
  footnote: 'and lots more...',
  projects: [
    {
      title: 'BREACH: an AI-native hacking game on 0G.',
      image: '/projects/breach.jpg',
      link: 'https://breach-ebon.vercel.app',
      glow: 'shadow-emerald-800',
    },
    {
      title: 'FrostVault: BTC-collateralized lending on Sui.',
      image: '/projects/frostvault.jpg',
      link: 'https://frostvault-six.vercel.app',
      glow: 'shadow-sky-800',
    },
    {
      title: 'On-Chain RBAC: role-based access control as a Solana program.',
      image: '/projects/onchain-rbac.svg',
      link: 'https://github.com/G-ojies/onchain-rbac',
      glow: 'shadow-purple-800',
    },
    {
      title: 'Smart Transaction Stack: Yellowstone gRPC and Jito bundles for Solana.',
      image: '/projects/smart-tx.svg',
      link: 'https://github.com/G-ojies/smart-tx-stack',
      glow: 'shadow-teal-800',
    },
    {
      title: 'Praetor: a policy-gated control plane for autonomous clinic-lab agents.',
      image: '/projects/praetor.jpg',
      link: 'https://g-ojies.github.io/praetor/',
      glow: 'shadow-indigo-800',
    },
    {
      title: 'Terminal 3 ADK: an original Rust TEE contract and a 16-finding bug report.',
      image: '/projects/terminal3.svg',
      link: 'https://github.com/G-ojies/terminal3-adk',
      glow: 'shadow-orange-800',
    },
    {
      title: 'Merlin Wallet: a 2-of-3 FROST threshold Bitcoin wallet.',
      image: '/projects/merlin.svg',
      link: 'https://github.com/G-ojies/MPCWallet',
      glow: 'shadow-amber-800',
    },
    {
      title: 'ChainSentry: Bitcoin wallet forensics and fund-flow tracing.',
      image: '/projects/chainsentry.svg',
      link: 'https://github.com/G-ojies/ChainSentry',
      glow: 'shadow-rose-800',
    },
    {
      title: 'Sharp Signal: World Cup betting signals on the TxODDS feed.',
      image: '/projects/sharp-signal.jpg',
      link: 'https://worldcup-sharp-signal.vercel.app',
      glow: 'shadow-violet-800',
    },
  ],
};

export const experience = {
  heading: 'Experience',
  intro:
    "In the course of this awesome journey, I've not been scared to try out new things and ideas. Listed here are relevant tech, languages and frameworks I have theoretical and practical knowledge of. The list isn't exhaustive as some were deliberately left out.",
  skills: [
    { name: 'rust', icon: '/skills/rust.svg', glow: 'shadow-orange-500' },
    { name: 'typescript', icon: '/skills/typescript.svg', glow: 'shadow-blue-500' },
    { name: 'react', icon: '/skills/react.svg', glow: 'shadow-sky-400' },
    { name: 'next.js', icon: '/skills/nextjs.svg', glow: 'shadow-gray-600' },
    { name: 'tailwind', icon: '/skills/tailwind.svg', glow: 'shadow-teal-400' },
    { name: 'solana', icon: '/skills/solana.svg', glow: 'shadow-purple-500' },
    { name: 'anchor', icon: '/skills/anchor.svg', glow: 'shadow-indigo-500' },
    { name: 'solidity', icon: '/skills/solidity.svg', glow: 'shadow-gray-500' },
    { name: 'hardhat', icon: '/skills/hardhat.svg', glow: 'shadow-yellow-400' },
    { name: 'foundry', icon: '/skills/foundry.svg', glow: 'shadow-slate-500' },
    { name: 'sui / move', icon: '/skills/sui.svg', glow: 'shadow-sky-500' },
    { name: 'python', icon: '/skills/python.svg', glow: 'shadow-blue-400' },
    { name: 'c++', icon: '/skills/cpp.svg', glow: 'shadow-blue-700' },
    { name: 'node.js', icon: '/skills/nodejs.svg', glow: 'shadow-green-500' },
    { name: 'flutter', icon: '/skills/flutter.svg', glow: 'shadow-cyan-400' },
    { name: 'webassembly', icon: '/skills/wasm.svg', glow: 'shadow-violet-500' },
    { name: 'docker', icon: '/skills/docker.svg', glow: 'shadow-blue-500' },
    { name: 'bitcoin', icon: '/skills/bitcoin.svg', glow: 'shadow-amber-500' },
    { name: 'git / github', icon: '/skills/github.svg', glow: 'shadow-gray-600' },
    { name: 'vercel', icon: '/skills/vercel.svg', glow: 'shadow-neutral-600' },
  ],
};

export const contact = {
  heading: 'Contact',
  intro: 'Wondering how to get in touch? Submit the form below, I respond swiftly...',
  // Point this at your own form endpoint (Getform, Formspree, your own API, ...).
  action: 'https://getform.io/f/YOUR-FORM-ID',
  placeholders: {
    name: 'Your Name ...',
    email: 'you@example.com',
    message:
      'Hi, I think we need a frontend developer for our product at Company Y. How soon can you jump on a call to discuss this?',
  },
};

export const footer = {
  developedBy: 'Great Ojietohamen',
  year: new Date().getFullYear(),
};
