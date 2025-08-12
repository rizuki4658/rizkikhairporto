import { About, Socmed, Skill, Experience, Work } from '../types'

export const socmed: Socmed[] = [
  {
    name: 'linkedin',
    title: 'My LinkedIn',
    target: '',
    link: 'https://www.linkedin.com/in/rizki-khair-0b5a67186/',
    text: 'rizki khair'
  },
  {
    name: 'github',
    title: 'My Github',
    target: '',
    link: 'https://github.com/rizuki4658',
    text: 'rizuki4658'
  },
  {
    name: 'hackerrank',
    title: 'My Hackerrank',
    target: '',
    link: 'https://www.hackerrank.com/rizkikhair4658?hr_r=1',
    text: 'rizkikhair4658'
  }
]

export const about: About = {
  title: 'Get a closer look at who I am.',
  description: 'I\'m Rizki Khair, a front-end developer from Indonesia with 6 years of hands-on experience in web development. My main expertise is crafting modern, user-focused interfaces using Vue.js, while also being proficient in React.\nOver the years, I\'ve developed solid skills in JavaScript, TypeScript, CSS frameworks, and front-end integration with RESTful APIs through self-taught learning and real-world projects. I\'m passionate about building clean, efficient, and scalable applications—turning ideas into seamless, high-performing user experiences.'
}


export const skills: Skill[] = [
  {
    name: 'HTML',
    value: 90,
    icon: 'html'
  },
  {
    name: 'CSS',
    value: 90,
    icon: 'css'
  },
  {
    name: 'JavaScript',
    value: 85,
    icon: 'js'
  },
  {
    name: 'SCSS',
    value: 80,
    icon: 'sass'
  },
  {
    name: 'VueJs',
    value: 90,
    icon: 'vue'
  },
  {
    name: 'ReactJs',
    value: 75,
    icon: 'react'
  },
  {
    name: 'NuxtJS',
    value: 70,
    icon: 'nuxt'
  },
  {
    name: 'NextJS',
    value: 60,
    icon: 'next'
  },
  {
    name: 'TypeScript',
    value: 80,
    icon: 'ts'
  },
  {
    name: 'Tailwind',
    value: 80,
    icon: 'ts'
  }
]

export const experiences: Experience[] = [
  {
    name: 'REUSELY',
    date: {
      start: '2023-08-01',
      end: null
    },
    link: 'https://id.linkedin.com/company/reusely',
    image: 'reusely.svg',
  },
  {
    name: 'PT. Devixel Teknologi Indonesia',
    date: {
      start: '2021-08-01',
      end: '2023-08-01'
    },
    link: 'https://id.linkedin.com/company/devixel',
    image: 'devixel.png',
    description: 'My responsibilities in this company are the same as in previous companies I worked for, however, here I am more focused on handling bugs and I have gained experience with using the Vue framework version 3 and some other new things such as the use of the ViteJs compiler.'
  },
  {
    name: 'PT. Tradaru Digital Niaga(Popaket)',
    date: {
      start: '2021-03-08',
      end: '2021-07-31'
    },
    link: 'https://www.popaket.com/',
    image: 'popaket.svg',
    description: 'My responsibility in this company is to implement designs that have been done by the UI team, then create, test, and optimize UI/UX products, this includes product compatibility and functionality. The important experience that I got from my current job desk is to know more about the git command line and how to optimize the use of git for work efficiency, then I know how to use Nuxt.js and last now I know what is meant of TypeScript.'
  },
  {
    name: 'PT. Olsera Indonesia Pratama',
    date: {
      start: '2019-08-08',
      end: '2021-02-20'
    },
    link: 'https://www.olsera.com/en/pos',
    image: 'olsera.svg',
    description: 'As a front end developer, my job is to make the appearance of the website looks good and matches the design from the UI / UX team, ensuring the website looks neat when cross-browser. To handling my job and make it easier, I use nodes js as a programming language from the server-side, Vue Js framework to help make websites more interactive, and additional packages for appropriate to the design.'
  }
]

export const works: Work[] = [
  {
    name: 'Zenwel Biz',
    image: 'zenwel.png',
    link: 'https://biz.zenwel.com/en',
    description: 'Zenwel is an innovative product born out of that vision in health and beauty. This platform will let you manage service scheduling and customer appointments more efficiently, manage personnel working hours in an organized manner, serve customers more responsively, manage sales neatly, get detailed operational reporting, and open up opportunities to significantly increase sales.'
  },
  {
    name: 'Popaket',
    image: 'popaket.png',
    link: 'https://www.popaket.com/',
    description: 'Popaket is digital logistics platform that makes it easy for you to send packets with a variety of options courier / cargo. Popaket has partnered with 15+ professional couriers in Indonesia. Our service include Intant, Same Day, Express, Regular, and Cargo delivery.'
  },
  {
    name: 'Sellshark',
    image: 'sellshark.png',
    link: 'https://sellshark.com',
    description: 'Sellshark is a digital platform that makes it easy for you to sell electronic goods such as smartphones, laptops, monitors, and much more. They are more ready for an apple product. But they are accepted too from another brand but not much.<br/>Sellshark is a platform under ItechShark and there are several companies affiliated with ItechShark including <a href="https://buybackengineer.com/" target="_blank" class="text-primary-gradient-hover">Buyback Engineer</a>, <a href="https://sell.gettech.com/" target="_blank" class="text-primary-gradient-hover">Gettech</a>, <a href="https://buybackpros.com/" target="_blank" class="text-primary-gradient-hover">Buyback Pros</a>, and many more. All affiliated companies have the same website or platform like a SellShark with only slight differences in content.'
  },
  {
    name: 'SIKS',
    image: 'siks.png',
    link: 'https://siks.anri.sangkuriang.co.id/',
    description: 'SIKS is plaform from KOMINFO, one of the Indonesian ministries. this platform was created for ANRI in carrying out its duties in the field of archives. The Archived will be digitized so that it is safer and avoids damage due to aging.'
  },
  {
    name: 'Global Trade-in & Buy-back SaaS Platform',
    image: 'reusely.png',
    link: 'https://reusely.com',
    description: 'A trade-in and buy-back platform designed for e-commerce merchants worldwide. The platform enables businesses to offer device trade-in programs directly on their websites through an embeddable widget, complete with dynamic pricing, address autocomplete, custom analytics event tracking, and automated logistics integration for shipping and returns.'
  }
]

export const resume = {
  summary: 'Front-end Developer with 6 years of web development experience delivering production-grade applications. Specializes in Vue.js and proficient in React, JavaScript, TypeScript, CSS frameworks, and front-end integration with RESTful APIs. Self-taught with a proven track record in developing clean, maintainable code and building high-performance user interfaces for SaaS, e-commerce, and enterprise platforms.',
  skills: {
    frontend: ['Vue.js', 'React.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SCSS', 'TailwindCSS', 'Nuxt.js', 'Next.js'],
    toolsOthers: ['Git', 'Webpack/Vite', 'n8n', 'Google Cloud Platform', 'Figma (basic)'],languages: ['English (Intermediate), Indonesian (Native)']
  },
  experiences: [
    {
      name: 'Devixel / Sellshark / Reusely',
      role: 'Front-end Developer | August 2021 - Present',
      body: 'Global trade-in & buy-back SaaS platform for e-commerce merchants.',
      desc: [
        'Developed and maintained admin dashboard and trade-in widget for a global trade-in & e-commerce platform specializing in electronics.',
        'Built responsive, reusable UI components using Vue.js, TypeScript, Tailwind CSS, and state management via Vuex and Pinia.',
        'Integrated Google Autocomplete Address API, analytics tracking (Google Analytics, Facebook Ads), and custom event systems for marketing optimization.',
        'Implemented WebSocket-based features for real-time updates and improved user experience.',
        'Collaborated with cross-functional teams to ensure scalability, maintainability, and performance optimization.',
        'Worked on custom client websites during the Sellshark era, handling up to five separate repositories with variations in content structure—combined into a unified platform using Vue and TSX, leveraging both frameworks in a single codebase.'
      ]
    },
    {
      name: 'Popaket',
      role: 'Front-End Developer | March 2021 - July 2021',
      body: 'Digital logistics platform integrating 15+ courier partners.',
      desc: [
        'Digital logistics platform integrating 15+ courier partners.',
        'Developed responsive front-end with Vue.js, TypeScript, and TailwindCSS',
        'Integrated multiple courier APIs for instant and scheduled deliveries.',
        'Improved UI performance, reducing bounce rate by 18%.'
      ]
    },
    {
      name: 'ZenwelBiz',
      role: 'Front-End Developer | 2019 - 2021',
      body: 'Health & beauty scheduling and service management platform.',
      desc: [
        'Built booking widget and service scheduling module with Vue.js & Element UI.','Collaborated with design team to enhance UX and customer retention.',
        'Maintained codebase and improved booking speed by 25%.'
      ]
    },
    {
      name: 'SIKS',
      role: 'Front-End Developer',
      body: 'Digital archiving platform for KOMINFO & ANRI',
      desc: [
        'Developed core UI using Vue.js, Vuetify, and Vuex.',
        'Integrated API for secure document digitization and management.'
      ]
    }
  ],
  education: {
    name: 'Self-taught Front-End Developer',
    desc: 'Learned through one formal online course before starting my professional career, then continued skill development independently through documentation, developer communities, and hands-on projects.'
  }
}