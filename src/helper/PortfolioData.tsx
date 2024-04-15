import skillIllustration from '../assets/skill_illustration.svg'; 
import mobileSkill from '../assets/mobile_development.svg'; 
import websiteSkill from '../assets/website_development.svg'; 
import dbSkill from '../assets/database_development.svg'; 
import cssPic from '../assets/css.png';
import angularPic from '../assets/angular.png';
import htmlPic from '../assets/html.png';
import jsPic from '../assets/js.png';
import typescriptPic from '../assets/typescript.png';
import phpPic from '../assets/php.svg';
import mysqlPic from '../assets/mysql.png';
import laravelPic from '../assets/laravel.png';
import bootstrapPic from '../assets/bootstrap.png';
import tailwindPic from '../assets/tailwind.png';
import awsPic from '../assets/aws.png';
import gitPic from '../assets/git.png';
import reactPic from '../assets/react.png';
import expoPic from '../assets/expo.png';

export const userInfo =  {
    firstName: "Julius Richard",
    middleName: "Avorque",
    lastName: "Acidre",
    nickName: "Juls",
    birthDate: "12-02-1997",
    gender: "Male",
    phoneNumber: "+63 945 521 8507",
    email: "juliusacidre@gmail.com",
    linkedin: "linkedin.com/in/julius-richard-acidre-7729a4279"
};

export const currentYear = (new Date()).getFullYear();

export const fullName = userInfo.firstName + ' ' + userInfo.middleName + ' ' + userInfo.lastName;

export const intro = "As a software developer with a strong foundation in web development, I'm on the hunt for new adventures to broaden my expertise. Bring on the challenges—I'm ready to code beyond the browser!";

export const summary = "With a keen interest in advancing my career and honing my skills, I am a dedicated software developer seeking new challenges and opportunities for growth. My expertise primarily lies in web development, where I have garnered valuable experience and proficiency. However, I am eager to expand my horizons and delve into other domains within the software development realm. Through a proactive approach to learning and a commitment to excellence, I aim to contribute effectively to projects and teams while continuously enhancing my skill set. With a strong foundation in web development, coupled with a passion for innovation and continuous learning, I am poised to tackle diverse challenges and propel my career forward in the dynamic field of software development."

export const skills = [
    {
        name:'Web Development',
        image: websiteSkill,
        details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quisquam ut fuga blanditiis nam enim quae facilis adipisci. Modi dicta officiis corporis minima quas hic id saepe, alias temporibus facilis'
    },
    {
        name:'Database Management',
        image: dbSkill,
        details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quisquam ut fuga blanditiis nam enim quae facilis adipisci. Modi dicta officiis corporis minima quas hic id saepe, alias temporibus facilis'
    },
    {
        name:'Mobile App Development',
        image: mobileSkill,
        details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quisquam ut fuga blanditiis nam enim quae facilis adipisci. Modi dicta officiis corporis minima quas hic id saepe, alias temporibus facilis'
    },
    {
        name:'Api Development and Integration',
        image: skillIllustration,
        details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quisquam ut fuga blanditiis nam enim quae facilis adipisci. Modi dicta officiis corporis minima quas hic id saepe, alias temporibus facilis'
    },  
];

export const techStack = [
    {
        name:'HTML',
        logo: htmlPic,
        yearStarted: 2021,
    },
    {
        name:'CSS / SCSS',
        logo: cssPic,
        yearStarted: 2021,
    },
    {
        name:'JavaScript',
        logo: jsPic,
        yearStarted: 2021,
    },
    {
        name:'TypeScript',
        logo: typescriptPic,
        yearStarted: 2021,
    },
    {
        name:'Angular',
        logo: angularPic,
        yearStarted: 2021,
    },
    {
        name:'PHP',
        logo: phpPic,
        yearStarted: 2021,
    },
    {
        name:'MySQL',
        logo: mysqlPic,
        yearStarted: 2021,
    },
    {
        name:'Laravel',
        logo: laravelPic,
        yearStarted: 2021,
    },
    {
        name:'Bootstrap',
        logo: bootstrapPic,
        yearStarted: 2021,
    },
    {
        name:'Tailwind',
        logo: tailwindPic,
        yearStarted: 2022,
    },
    {
        name:'AWS(Ec2, S3, RDS, Cloudfront, Route 53, ELB)',
        logo: awsPic,
        yearStarted: 2022,
    },
    {
        name:'Git',
        logo: gitPic,
        yearStarted: 2021,
    },
    {
        name:'React && React-native',
        logo: reactPic,
        yearStarted: 2023,
    },
    {
        name:'Expo',
        logo: expoPic,
        yearStarted: 2023,
    },
];

export const experiences = [
    {
        position: "Software Developer",
        location: null,
        company: "Freelance",
        dateStarted: "11-00-2023",
        dateEnd: null,
        description: {
            mainParagraph: "I've been working directly with clients developing websites and applications",
            bullets: [
                'Aside from working in a laravel-react website I also started developing a mobile app, building it with expo and react-native setup. This includes connecting it  to a live web-server, publishing it in both Google Play Store and App store.'
            ]
        }
    },
    {
        position: "Software Developer",
        location: 'Tacloban City',
        company: 'Intechsive Software Development',
        dateStarted: "02-00-2023",
        dateEnd: "11-00-2023",
        description: {
            mainParagraph: "Being promoted as a software developer takes me as the team lead developer of most projects tasked to me.",
            bullets: [
                'Work on two projects simultaneously a full laravel barangay information system that has a wide array of functions that is essential to the barangays as well as a Multi tenanted business management website that uses laravel as backend and angular as the frontend.',
                'Responsible for guiding juniors as well as code reviewing their changes to the project given. Although I am still under the observation of a Senior dev. This allowed me to improve my awareness and responsibility to the project as a whole while cooperating with others.'
            ]
        }
    },
    {
        position: "Junior Software Developer",
        location: 'Tacloban City',
        company: 'Intechsive Software Development',
        dateStarted: "11-00-2021",
        dateEnd: "02-00-2023",
        description: {
            mainParagraph: "Being promoted as a software developer takes me as the team lead developer of most projects tasked to me.",
            bullets: [
                'Work on two projects simultaneously a full laravel barangay information system that has a wide array of functions that is essential to the barangays as well as a Multi tenanted business management website that uses laravel as backend and angular as the frontend.',
                'Responsible for guiding juniors as well as code reviewing their changes to the project given. Although I am still under the observation of a Senior dev. This allowed me to improve my awareness and responsibility to the project as a whole while cooperating with others.'
            ]
        }
    },
];

export const education = [
    {
        schoolName: "Eastern Visayas State University",
        address: "Ormoc City",
        schoolLevel: "College",
        course: "Bachelor of Science in Information Technology"
    }
];

export const Awards = [
    {
        awardName: "INTECHSIVE’s ROOKIE OF THE YEAR 2022",
        imagePath: "",
    },
    {
        awardName: "INTECHSIVE’s MOST IMPROVED PERFORMER 2022",
        imagePath: "",
    }
];