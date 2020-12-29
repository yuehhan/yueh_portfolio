const info = {
    name: "Yueh Han",
    flat_picture: require('./src/assets/yueh.png'),
    description: 
    "My name is Yueh Han and I am currently working as a software developer in the NY area. I discovered software 2 years ago and it has quickly become my main passion. "+
    "I often think about the quote from Marc Andreessen that 'software is eating the world'. This rings true especially today. My background in tech sales allowed me to see the importance of software applications " +
    "in businesses. I saw the speed of our innovation and thought to myself: 'why only <u>sell</u> software when I can learn to <u>create</u> software'. So, I taught myself to code on nights and weekends. "+
    "<br><br>" +
    "I enjoy the problem-solving aspects of programming and I'll never shy away from a challenge. Whether it is a front-end issue that may require a creative touch, " +
    "or something in the backend that prioritizes efficiency and optimization, I enjoy finding the best solution for all of it. I am constantly curious to learn new technologies, or to just improve the " +
    "ol' programming muscles. Feel free to contact me if you have questions!",

    links: {
        linkedin: "https://www.linkedin.com/in/yueh-han-656b91171/",
        github: "https://github.com/yuehhan/",
        resume: "./src/assets/pdfs/yueh_han_resume.pdf",
        email: "mailto:yuehwhan@gmail.com"
    },
    skills: [
        {
            title: 'languages',
            info: ['Python', 'Javascript', 'PHP', 'MYSQL', 'NoSQL', 'HTML/CSS'],
            icon: 'fa fa-code'
        },
        {
            title: 'frameworks & libraries',
            info: ['Codeigniter', 'Vue.js', 'React.js', 'Django', 'jQuery', 'Node.js', 'Express.js', 'Gatsby.js', 'Handlebars.js', 'Bootstrap'],
            icon: 'fas fa-sitemap'
        },
        {
            title: 'tools & others',
            info: ['Docker', 'Git/Github','AWS S3', 'LAMP stack', 'Ubuntu', 'Apache', 'Agile', 'Scrum', 'JIRA', 'Heroku', 'Firebase'],
            icon: 'fas fa-wrench'
        },
    ],
    portfolio: [
        {
            name: 'Travel Log Platform',
            pictures: [
                {
                    img:  require('./src/assets/portfolio/location/view.jpg'),
                },
                {
                    img:  require('./src/assets/portfolio/location/register.jpg'),
                },
                {
                    img:  require('./src/assets/portfolio/location/login.jpg'),
                }
            ],
            technologies: ['React.js', 'Express.js', 'Node.js', 'MongoDB', 'Google Maps API', 'Javascript', 'Heroku', 'HTML/CSS'],
            category: 'Website',
            date: 'January 2020',
            github: 'https://github.com/yuehhan/MyLocation',
            visit: 'https://yuehwhan.com/MyLocation/',
            description: 'This is a social media site where users can create a profile and share their traveling experiences. Users can attach images, write about their experience, and tag their location using Google Maps. I first thought of this ' +
            "after vacationing in Seattle. I wanted a social media site that could also be a travel log. This app is built using the MERN stack. So that is React as the front end, Express and Node for the backend to handle all of the API calls and authentication/authorization, "+
            "and MongoDB as the database. The frontend is hosted on Github pages and the backend is hosted on Heroku. This is my first full-stack project I've really enjoyed creating this app, not to mention all of the lessons learned."
        },
        {
            name: 'Programming Blog',
            pictures: [
                {
                    img:  require('./src/assets/portfolio/blog/main.jpg'),
                },
                {
                    img:  require('./src/assets/portfolio/blog/register.jpg'),
                },
                {
                    img:  require('./src/assets/portfolio/blog/profile.jpg'),
                },
                {
                    img:  require('./src/assets/portfolio/blog/post.jpg'),
                },
                {
                    img:  require('./src/assets/portfolio/blog/login.jpg'),
                }
            ],
            technologies: ['Python', 'Django', 'AWS S3', 'Bootstrap', 'HTML/CSS', 'Heroku'],
            category: 'Website',
            date: 'November 2019',
            github: 'https://github.com/yuehhan/DjangoBlog',
            visit: 'https://mynewdjangoblogapp.herokuapp.com',
            description: 'This is a personal blog I created with Python and Django. Although it is a simple CRUD application, it was also the first framework I\'d ever learned so it introduced many key concepts. Users can create an account and post entries on their programming progress. '+
            'They can look at other users\' posts or delete their own. All profile pictures are also stored in an AWS S3 bucket. I would like to jump back to this project eventually and expand to allow users to post comments on blog entries.'
        },
        {
            name: 'Misc. Apps & Scripts',
            pictures: [
                {
                    img: require('./src/assets/portfolio/misc/weather.jpg'),
                },
                {
                    img: require('./src/assets/portfolio/misc/beatmaker.gif'),
                },
                {
                    img: require('./src/assets/portfolio/misc/todolist.png'),
                },
                {
                    img: require('./src/assets/portfolio/misc/pizzamaker.png'),
                }
            ],
            technologies: ['Python', 'Javascript', 'PHP', 'HTML/CSS', 'Jquery', 'etc'],
            category: 'Algorithms, Website, Web Scraping',
            github: 'https://github.com/yuehhan',
            date: '',
            visit: '',
            description: 'There seems to be a set procedure for learning a new technology. And that is to create a simple app to gain an understanding of how the technology works. I have ' +
            'done this multiple times, whether it is learning PHP for my job, playing around with new ideas in javascript, or writing scripts in Python to try to automate my daily life. '+
            'I want to share a few simple projects to show my curiosity towards programming. I have used APIs found online to create weather apps and recipe book apps. I have created a  '+
            'a simple beatmaker with javascript to mimic a music looper software. And I have used Python for web scraping to check the price of Ebay items and check if a server is live. '+
            'These little experiments can be found on my github, please let me know if you have any interesting ideas you\'d like to share as well!'
        },

    ],
}

export default info;