import previewMacenger from './assets/images/macenger.jpg';
import previewMusish from './assets/images/musish.jpg';
import previewNeene from './assets/images/neene1.jpg';

export default {
  name: 'Brychan',
  fullName: 'Brychan Bennett-Odlum',
  siteDomain: 'brychan.io',
  biography:
    "I'm a computer science student from the United Kingdom currently interning as a <strong>software engineer</strong>\n for <strong>Cisco Systems</strong> in the San Francisco Bay Area. I focus on designing and developing quality\n web, iOS, and macOS apps\n with <strong>Swift</strong>, <strong>React</strong>, <strong>Java</strong>, <strong>JavaScript</strong>, <strong>HTML</strong>,\n and <strong>CSS</strong>.",
  experience: [
    {
      position: 'Software Engineer (intern)',
      company: 'Cisco Systems',
      location: 'San Jose, California',
      time: 'August 2018 - July 2019',
      achievements: [
        "Developed a React based interface for the company's multicloud provisioning platform, allowing business units to provision their own cloud infrastructure across a range of providers.",
        "Created a high performant Node microservice for providing data to the platform's user interface.",
        'Worked closely with UX teams to design new interactions and features for the product.',
      ],
    },
    {
      position: 'Software Developer',
      company: 'InPvP',
      location: 'Remote',
      time: 'June 2016 - Oct 2017',
      achievements: [
        'Designed, implemented, and maintained server software and game features / content for the rapidly growing Minecraft multiplayer games network owned by Mobcrush and partnered with Microsoft.',
        'Wrote and maintained core game engine, custom event systems, and game world caching to improve server uptime by profiling our .NET server stack to reduce memory leaks, redundant locks, expensive operations, and resolving exceptions.\n',
        'Developed server monitoring software to automatically handle service restarts upon critical exceptions, deadlocks, and other failed health checks to improve uptime and fulfil SLAs provided by Microsoft.',
        'Rapidly developed functionality and content required to support 10,000+ concurrent users.\nWrote algorithms for generating balanced game inventories, item handling, and other specific tasks.',
        'Developed a prototype, but now defunct, iOS app to handle payments; defunct due to MS Marketplace.',
      ],
    },
    {
      position: 'Peer Tutor',
      company: 'University of Kent',
      location: 'Canterbury, United Kingdom',
      time: 'October 2017 - June 2018',
      achievements: [
        'Working at the university as a peer tutor mentoring first year computer science students assisting them with study skills, class tasks, and assignments during my own study.',
      ],
    },
    {
      position: 'Freelancer',
      company: 'Freelance',
      location: 'Remote',
      time: 'January 2010 - March 2016',
      achievements: [
        '[Dec 2016] Worked freelance for Leet, Inc., a large-scale cloud game server host developing their website and iOS app (which is used by over a million subscribers to the platform) single handedly based on a provided specification and API routes.',
      ],
    },
  ],
  projects: [
    {
      name: 'Macenger (coming soon)',
      url: null,
      preview: previewMacenger,
      previewTitle: 'Macenger',
      previewType: 'laptop',
      description:
        'Developing an open source Facebook Messenger client for macOS natively with Swift. The project is spanning into the development of multiple new frameworks, soon to be released on Github.',
      skills: ['Swift', 'GraphQL', 'Reverse Engineering'],
    },
    {
      name: 'Musish',
      url: 'https://musi.sh/',
      preview: previewMusish,
      previewTitle: 'https://musi.sh/',
      previewType: 'window',
      description:
        'Led development of the open source Apple Music client for your web browser supporting over 50,000 users. Built with React, MusicKit JS, the Apple Music API, and a serverless backend powered by AWS.',
      skills: ['React', 'JavaScript', 'CSS', 'Serverless', 'AWS Lambda'],
    },
    {
      name: 'Neene',
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
