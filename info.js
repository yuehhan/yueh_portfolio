const info = {
    name: "Yueh Han",
    flat_picture: require('./src/assets/yueh.png'),
    description: 
    "My name is Yueh Han and I like programming. How much do I like it you ask? So much so that I taught myself to code, and am now working as a full-stack developer. I have a degree in "+
    "Philosophy so you know I'm a deep thinker. How deep you might ask? Who knows! I also have some experience working tech sales.",

    links: {
        linkedin: "https://www.linkedin.com/in/yueh-han-656b91171/",
        github: "https://github.com/yuehhan/",
        resume: "#",
        email: "mailto:yuehwhan@gmail.com"
    },
    skills: [
        {
            title: 'languages',
            info: ['Python', 'Javascript', 'PHP', 'MYSQL', 'HTML/CSS'],
            icon: 'fa fa-code'
        },
        {
            title: 'frameworks & libraries',
            info: ['Codeigniter', 'Vue', 'React', 'Django', 'jQuery', 'Node.js', 'Express.js', 'Gatsby.js', 'Bootstrap'],
            icon: 'fas fa-sitemap'
        },
        {
            title: 'tools & others',
            info: ['Docker', 'Git/Github','AWS S3', 'LAMP stack', 'Ubuntu', 'Agile', 'Scrum', 'JIRA', 'Heroku'],
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
            description: 'This is a travel logs where users can create a profile and share their experiences. Users can then attach images, write about their experience, and tag the location using the Google Maps.'
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
            description: 'This is a blog I created with Python, Django, and HTML/CSS. It uses AWS S3 for file storage and is deployed on Heroku. Users can create an account, add a profile picture, and create a blog post. The greatest challenge was deploying this application to Heroku, largely due to versioning issues.'
        },
        {
            name: 'Simple Apps & Scripts',
            pictures: [
                {
                    img: '',
                },
                {
                    img: '',
                }
            ],
            technologies: [],
            category: 'Algorithm',
            github: '',
            date: '',
            visit: '',
            description: ''
        },

    ],
}

export default info;