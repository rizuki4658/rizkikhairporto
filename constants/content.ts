import { About, Socmed, Skill, Experience } from '../types'

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