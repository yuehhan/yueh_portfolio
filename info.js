const info = {
    name: "Yueh Han",
    flat_picture: require('./src/assets/yueh.png'),
    description: 
    "My name is Yueh and I've been captivated with writing software ever since I started 2 years ago. To follow this passion, " +
    "I spent my nights and weekends learning computer science from the beginning, using online resources like MIT's open courseware. " +
    "I am now working as a full-stack developer in the Greater NY area." + 
    "<br></br> "+ 
    "I enjoy the problem-solving aspects of programming the most. Whether it is a front-end issue that may require a creative touch, " +
    "or something in the backend that prioritizes efficiency and optimization, finding the best solution is always rewarding. " +
    "I love learning about design principles and I'm always experiementing with new ideas. Feel free to contact me if you have any questions!",

    links: {
        linkedin: "https://www.linkedin.com/in/yueh-han-656b91171/",
        github: "https://github.com/yuehhan/",
        resume: "https://drive.google.com/file/d/13DBqu0K7z9HXNRCYYnpOuNlZ1pcPTxeB/view?usp=sharing",
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
            info: ['Codeigniter', 'Vue.js', 'React.js', 'Django', 'jQuery', 'Node.js', 'Express.js', 'Gatsby.js', 'Handlebars.js', 'Bootstrap', 'D3.js'],
            icon: 'fas fa-sitemap'
        },
        {
            title: 'tools & others',
            info: ['Docker', 'Git/Github','AWS', 'LAMP stack', 'Ubuntu', 'Apache', 'Agile', 'Scrum', 'JIRA', 'Heroku', 'Firebase'],
            icon: 'fas fa-wrench'
        },
    ],
    portfolio: [
        {
            name: 'Safe Travels',
            pictures: [
                {
                    img:  require('./src/assets/portfolio/location/safe_travels.gif'),
                },
                {
                    img:  require('./src/assets/portfolio/location/safe_travels1.png'),
                },
                {
                    img:  require('./src/assets/portfolio/location/safe_travels2.png'),
                },
                {
                    img:  require('./src/assets/portfolio/location/safe_travels3.png'),
                },
                {
                    img:  require('./src/assets/portfolio/location/safe_travels4.png'),
                },
                {
                    img:  require('./src/assets/portfolio/location/safe_travels5.png'),
                }
            ],
            technologies: ['React.js', 'Express.js', 'Node.js', 'MongoDB', 'Google Maps API', 'AWS S3', 'Javascript', 'Heroku', 'HTML/CSS'],
            category: 'Website',
            date: 'January 2020',
            github: 'https://github.com/yuehhan/MyLocation',
            visit: 'https://safetravels.netlify.app/',
            description: 'This is a traveler\'s log, users can create a profile and share their experiences from around the world. They can attach images, write about their experience, and tag their location using Google Maps. I first thought of this ' +
            "after vacationing in Seattle. I wanted a playform site that I could use keep track of my travels. This app is built using the MERN stack. That is React as the front end, Express and Node for the backend to handle all of the API calls and authentication/authorization, "+
            "and MongoDB as the database. The frontend is hosted on Netlify and the backend is hosted on Heroku. I've really enjoyed creating this app, not to mention all of the lessons learned."
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
            description: 'This is a personal blog I created with Python and Django. Although it is a simple CRUD application, it was the first framework I\'d ever learned and was introduced to many key concepts. In this blog, users can create an account and post entries on their programming thoughts. '+
            'They can look at other users\' posts or delete their own. All profile pictures are also stored in an AWS S3 bucket. I would like to jump back to this project eventually and expand it with the knowledge I have now. Namely, to allow users to post comments on blog entries.'
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
            date: 'March 2019',
            visit: '',
            description: 'I have a routine when it comes to learning new technologies, and that is to create a simple app to gain a basic understanding. This is ' +
            'a collection of every time I learned something new, and experimented with a simple application. In this collection you will find projects for learning PHP for my job, playing around with new ideas in JavaScript, or writing scripts in Python to try to automate my daily life. '+
            'I want to share these projects to show my curiosity towards programming. I have used APIs found online to create weather apps and recipe book apps. I have created a  '+
            'simple beatmaker with javascript to mimic music looping software. And I have used Python for web scraping to check the price of Ebay items and check if a server is live. '+
            'I will always be experimenting so please let me know if you have any interesting ideas you\'d like to share as well!'
        },

    ],
}

export default info;