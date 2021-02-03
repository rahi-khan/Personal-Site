module.exports = {
  siteTitle: 'Rahi Khan | Web Developer',
  siteDescription:
    'Rahi Khan is a web developer based in Dhaka, Bangladesh who specializes in building (and occasionally designing) exceptional websites, applications, and everything in between.',
  siteKeywords:
    'Rahi Khan, Rahi, Khan, rahikhan, software engineer,  front-end engineer, web developer, javascript, bangladesh',
  siteUrl: 'https://rahikhan.gtsb.io/',
  siteLanguage: 'en_US',
  name: 'Rahi Khan',
  location: 'Dhaka, Bangladesh',
  email: 'rahikhan360@gmail.com',
  github: 'https://github.com/rahi-khan',
  twitterHandle: '@misteranmol',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/rahi-khan',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/rahikhan',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/_rahikhan_',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/rahikhan_dev',
    },
  ],
  lastUpdated: '04-Feb-2021',

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
