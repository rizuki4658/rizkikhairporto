import { About, Socmed, Skill, Experience, Work } from '../types'

export const socmed: Socmed[] = [
  {
    name: 'linkedin',
    title: 'My LinkedIn',
    target: '',
    link: 'https://www.linkedin.com/in/rizki-khair-0b5a67186/'
  },
  {
    name: 'github',
    title: 'My Github',
    target: '',
    link: 'https://github.com/rizuki4658'
  }
]

export const about: About = {
  title: 'Get a closer look at who I am.',
  description: 'I\'m Rizki Khair from Indonesia.<br />I have worked as a front-end developer for almost three years. During my career, I always used Vue as a framework for development but I am familiar too with React.<p class="mt-2.5" />All the skills, tools, and frameworks I use,  are self-taught over many years of practice and expanding my horizons.'
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
    name: 'SASS',
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
  }
]

export const experiences: Experience[] = [
  {
    name: 'PT. Devixel Teknologi Indonesia',
    date: {
      start: '2021-08-01',
      end: null
    },
    link: 'https://id.linkedin.com/company/devixel',
    image: 'devixel.png'
  },
  {
    name: 'PT. Tradaru Digital Niaga(Popaket)',
    date: {
      start: '2021-03-08',
      end: '2021-07-31'
    },
    link: 'https://www.popaket.com/',
    image: 'popaket.svg'
  },
  {
    name: 'PT. Olsera Indonesia Pratama',
    date: {
      start: '2019-08-08',
      end: '2021-02-20'
    },
    link: 'https://www.olsera.com/en/pos',
    image: 'olsera.svg'
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
  }
]