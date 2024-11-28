import { FaGithub, FaYoutube , FaTwitter, FaLinkedin, FaFacebook} from "react-icons/fa";
import profileImage from "/src/images/profile.png";
// nav link
export const links = [
    {
        url: "#home",
        text: "Home"
    },
    {
        url: "#features",
        text: "Features"
    },
    {
        url: "#resume",
        text: "Resume"
    },
    {
        url: "#services",
        text: "Services",
    },
    {
        url: "#contact",
        text: "Contact"
    },
];

// social media
export const media = [
    {
        "name": "Linkedin",
        "url": "https://www.linkedin.com/in/ahmed-memar-b0b060296/", // change it to your Linkedin profile link
        "show": true, // turn it to false if you don't have Linkedin
        "icon" : <FaLinkedin className="rounded-full" fill="black"/>
    },
    {
        "name": "Github",
        "url": "https://github.com/Ahmed-Memar", // change it to your Github profile link
        "show": true, // turn it to false if you don't have Github
        'icon' : <FaGithub fill="black"/>
    },
    {
        "name": "Twitter",
        "url": "", // change it to your Twitter profile link
        "show": false, // turn it to false if you don't have Twitter
        "icon" : <FaTwitter fill="black"  />
    },
    {
        "name": "Youtube",
        "url": "", // add your Youtube channel link
        "show": false, // turn it to true if you have Youtube
        "icon" : <FaYoutube fill="black"  />
    },
    {
        "name": "Facebook",
        "url": "", // add your facebook profile link
        "show": false, // turn it to false if have Facebook
        "icon" : <FaFacebook fill="black" />
    },
];

// update this variable with your data
export const userData = {
    name: "AHMED",
    image: profileImage, // you need to put your image in /src/images with the name profile.png
    profession: ['Cybersecurity Specialist', 'System Administrator', 'Web Developer'],
    descriptionText: `Master's student in Cybersecurity, with expertise in vulnerability analysis, infrastructure monitoring, and implementation of protection measures. Experienced in network engineering (network management, VPNs, firewalls) and system administration (Windows/Linux servers, virtualization).\n\nI am seeking a 6-month internship in cybersecurity, network engineering, or systems administration starting in March, where I can further develop my expertise and contribute significantly to a dynamic team.`,
    phoneNumber : "+33 6 01 34 38 07",
    email : "Ahmadmeamar7@gmail.com",
    adress : "Caen 14000, France",
}

// your professions
export const wordToType = ['System Administrator', 'Cybersecurity Specialist', 'Network Engineering'];

// description
export const descriptionText = "I am a self-taught programmer and passionate about cybersecurity.";
