export default {
    translate: {
        title: 'Choose the language'
    },
    basic: {
        shortName: 'Ian',
        fullName: 'Ian Welerson',
        title: 'Frontend Engineer' 
    },
    social: {
        email: `hello{'@'}ianwelerson.com`,
        linkedin: 'https://www.linkedin.com/in/ianwelerson/',
        github: 'https://github.com/ianwelerson',
        codepen: 'https://codepen.io/ianwelerson',
    },
    meta: {
        title: '{name} - {page}',
        description: 'I\'m a front-end engineer with more than {years} of experience. Click here to check out more information about me'
    },
    home: {
        entry: {
            greetings: 'Hello from brazil',
            introduction: {
                start: 'My name is',
                middle: 'and I\'m a',
            },
            cta: 'ABOUT ME'
        },
        about: {
            description: {
                start: 'I\'m a frontend engineer and Information Systems bachelor with {years}+ years of experience, dedicated to creating exceptional user experiences.',
                middle: 'I started as a full-stack developer, handling platforms like WordPress and Laravel. Later, I focused on frontend technologies, mastering HTML, CSS, JavaScript, Vue.js, TypeScript, and Tailwind.',
                end: 'I\'ve collaborated with Brazilian and US-based companies, cultivating adaptability in diverse work environments.'
            },
            cta: 'Check out my frontend challenges',
            stack: [
                'JavaScript',
                'TypeScript',
                'Vue.js',
                'SASS/LESS',
                'Tailwind',
                'Jest',
                'Cypress',
            ]
        }
    },
    challenges: {
        list: {
            title: 'Frontend Challenges',
            entry: {
                text: 'Explore my frontend challenges page. Here you can find small challenges, and you can find the source codes on my',
                link: 'https://github.com/ianwelerson/ianwelerson.com/tree/main/src/views/frontend-challenges/challenges',
                linkText: 'GitHub',
            },
            noContent: 'No challenges available for now...',
            items: [
                {
                    id: 'social-links-profile',
                    title: 'Social Links Profile',
                    level: 0,
                    showAsEmbed: false,
                    links: [
                        {
                            type: 'DESIGN',
                            title: 'Frontend Mentor',
                            theme: 'white',
                            url: 'https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ'
                        }
                    ],
                },
                {
                    id: 'qr-code-component',
                    title: 'QR Code Component',
                    level: 0,
                    showAsEmbed: false,
                    links: [
                        {
                            type: 'DESIGN',
                            title: 'Frontend Mentor',
                            theme: 'dark',
                            url: 'https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H'
                        }
                    ],
                },
                {
                    id: 'rating-component',
                    title: 'Rating Component',
                    level: 0,
                    showAsEmbed: false,
                    links: [
                        {
                            type: 'DESIGN',
                            title: 'Frontend Mentor',
                            theme: 'white',
                            url: 'https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI'
                        },
                        {
                            type: 'CODEPEN',
                            title: 'Codepen',
                            theme: 'white',
                            url: 'https://codepen.io/ianwelerson/pen/eYXPmMX'
                        }
                    ],
                },
            ]
        },
        level: {
            0: 'Very Easy'
        }
    },
    resume: 'My Resume'
}