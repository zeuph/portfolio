import mobilappdesign from '../public/img/mobilappdesign.png'
import thesis from '../public/img/thesis.png'
import webbplatsdesign from '../public/img/webbplatsdesign.png'
import sunnyhillsimg from '../public/img/webbprogrammering.png'

const workData = [
  {
    header: 'Webbprogrammering',
    img: sunnyhillsimg,
    url: '/sunnyhills/index.html',
    text: "Sunny hills was produced by me alone during one of the database and API courses where we made requests to an API to fetch and store data in a database. I made a fictional website which include a ordering system, modal and loading animation during payment.\nThe course also included things like history tokens for SAP and how to store history tokens in local storage. Local storage was also used to store certain things like whether you're logged in or not.",
    tagtext: ['HTML', 'CSS', 'JavaScript', 'JQuery', 'SQL', 'API'],
  },
  {
    header: 'Webbplatsdesign',
    img: webbplatsdesign,
    url: '/webbplatsdesign/index.html',
    text: 'Webbplatsdesign was the first and most basic course teaching HTML and CSS. The course ended with a project and I wanted to improve my CSS skills. Therefore I spent a lot of time getting a authentic look, my first try on making a website in school. ',
    tagtext: ['HTML', 'CSS'],
  },
  {
    header: 'Mobilapplikationdesign',
    img: mobilappdesign,
    url: '/mobilappdesign/index.html',
    text: 'Mobilapplikationdesign focused on a mobile-first appraoch and using sensors on modern phones. We utilized Single Page Application and I also created a carousel with swipe functionality.',
    tagtext: ['HTML', 'CSS', 'JavaScript', 'JQuery'],
  },
  {
    header: 'Thesis',
    img: thesis,
    url: '',
    text: `My thesis consisted of a quantitative experiment with analysis of the results. The experiment aims to give further insight in the comparable nature of REST and GraphQL. Each API had their response time measured and later analysed. Furthermore, the thesis also includes two perspectives of server architecture to explore whether the platform has an impact on the response times.\nThe picture above show the visible elements of the software. A tool which automated the whole process of making requests, measuring the requests, cleaning up the data and displaying it as a chart directly on the website.\nPlease note that this is not available to test yet. All code is available on github:\ngithub.com/a20kimar/artifakt`,
    tagtext: [
      'API',
      'REST',
      'GraphQL',
      'Raspberry Pi',
      'Node.JS',
      'JavaScript',
    ],
  },
]

export default workData
