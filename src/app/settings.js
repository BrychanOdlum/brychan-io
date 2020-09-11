import previewMacenger from './assets/images/macenger.jpg';
import previewMusish from './assets/images/musish.jpg';
import previewNeene from './assets/images/neene1.jpg';

export default {
  name: 'Brychan',
  fullName: 'Brychan Bennett-Odlum',
  siteDomain: 'brychan.io',
  biography:
    "I'm a UK based UI Engineer working at <strong>Apple</strong>. I focus on designing and developing quality web, iOS, and macOS apps with <strong>React</strong>, <strong>Vue</strong>, <strong>JavaScript</strong>, <strong>Swift</strong>, <strong>HTML</strong>,\n and <strong>CSS / SASS</strong>.",
  experience: [
    {
      position: 'UI Engineer',
      company: 'Apple',
      location: 'England',
      time: 'Sept 2020 - Now',
      achievements: ['Coming soon.'],
    },
    {
      position: 'Software Engineer',
      company: 'Cisco',
      location: 'San Jose, California',
      time: 'August 2018 - Jul 2020',
      achievements: [
        `Worked in an agile team developing a React based interface for the company's Multicloud Manager platform.`,
        'Developed cloud cost calculator tool, added AWS integration, and wrote dozens of React components throughout the platform.',
        'Designed and implemented a scalable Node.js microservice using Koa and SQL for providing statistical data for platform reports to the user interface via a REST API. Wrote Dockerfile and maintained scripts to deploy to OpenShift.',
      ],
    },
    {
      position: 'Software Developer',
      company: 'InPvP',
      location: 'Remote',
      time: 'June 2016 - Oct 2017',
      achievements: [
        'Designed, implemented, and maintained a C# stack for InPvP, the hugely popular Minecraft multiplayer games network partnered with Microsoft.',
        'Developed and maintained game server engine, event system, and game world caching to improve uptime by profiling our .NET stack to reduce memory leaks, redundant locks, expensive operations, and exceptions.',
        'Developed a server monitoring application to automatically handle service restarts when health checks failed to improve uptime and fulfil Microsoft’s SLAs.',
        'Rapidly developed functionality and content required to support 10,000+ concurrent users.',
        'Designed algorithms for generating game inventories, item generation, etc.',
      ],
    },
    {
      position: 'Peer Tutor',
      company: 'University of Kent',
      location: 'Canterbury, United Kingdom',
      time: 'October 2017 - June 2018',
      achievements: ['Mentored and supervised through Java, JavaScript, HTML, PHP, and maths.'],
    },
    {
      position: 'Freelancer',
      company: 'Freelance',
      location: 'Remote',
      time: 'January 2010 - March 2016',
      achievements: [
        '[Dec 2016] Contracted for Leet, Inc., an enterprise-scale cloud game server host. Developing their website and iOS app based on provided specifications, seeing over 3,000,000 downloads on the App Store.',
        '[2010-2015] Developed GiekMafia, a text-based online multiplayer RPG game which attracted over 25,000 users; written in PHP and Node.js with a front end designed in Photoshop and implemented in HTML, CSS, and JavaScript.',
      ],
    },
  ],
  projects: [
    {
      name: `Macenger [eol]`,
      url: null,
      preview: previewMacenger,
      previewTitle: 'Macenger',
      previewType: 'laptop',
      description:
        'An open source Facebook Messenger client for macOS natively with Swift. The project is spawning the development of multiple new frameworks, soon to be released on Github. Discontinued.',
      skills: ['Swift', 'GraphQL', 'Reverse Engineering'],
    },
    {
      name: 'Musish',
      url: 'https://musi.sh/',
      preview: previewMusish,
      previewTitle: 'https://musi.sh/',
      previewType: 'window',
      description:
        'Led development of the open source Apple Music client for your web browser supporting over 250,000 users. Built with React, MusicKit JS, the Apple Music API, and a serverless backend powered by AWS. Left the team in September 2020',
      skills: ['React', 'JavaScript', 'CSS', 'Serverless', 'AWS Lambda'],
    },
    {
      name: 'Neene [eol]',
      url: null,
      preview: previewNeene,
      previewTitle: 'Neene | Discontinued',
      previewType: 'window',
      description:
        "A social network for artists focused on showing off their art rather than their profiles. Responsible for implementing the HTML5, CSS3, and JS UI from as well as the service's backend in PHP and Node.js.",
      skills: ['PHP', 'HTML', 'jQuery', 'Node.js', 'MySQL'],
    },
  ],
};
