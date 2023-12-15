
import ege from '../assets/timeline/ege.png';
import metu from '../assets/timeline/metu.png';
import altinay from '../assets/timeline/altinay.png';
import vakif from '../assets/timeline/vakif.png';
import tai from '../assets/timeline/tai.png';

import css from '../assets/skills/css.png';
import javascript from '../assets/skills/javascript.png';
import matlab from '../assets/skills/matlab.png';
import nodejs from '../assets/skills/nodejs.png';
import problemSolving from '../assets/skills/problemSolving.svg';
import reactjs from '../assets/skills/reactjs.png';
import solidity from '../assets/skills/solidity.svg';
import systemEngineering from '../assets/skills/systemEngineering.png';
import typescript from '../assets/skills/typescript.png';

import github from '../assets/socials/github.svg';
import ens from '../assets/socials/ens.png';
import linkedin from '../assets/socials/linkedin.png';

const education = [
    {institution: 'Ozel Ege Lisesi', department: 'Science/Mathematics', date: '2010-2014', icon: ege, url: 'https://www.egelisesi.k12.tr/'},
    {institution: 'Middle East Technical University', department: 'Aerospace Engineering', date: '2014-2021', icon: metu, url: 'https://www.metu.edu.tr/'},
];

const experience = [
    {institution: 'Altınay Aerospace', department: 'Control & System Engineering', date: '2019', icon: altinay, url: 'https://altinaysavunma.com/en', points: ["Initiated mathematical modelling of weaponed drones in various aspects like recoil, targeting  or navigation on jammer effect", "Contributed to structural design and software side of the waeponed drone project","Designed a project management tool "]},
    {institution: 'Vakıf Investment', department: 'Portfolio Management', date: '2020', icon: vakif, url: 'https://www.vakifyatirim.com.tr/', points: ["Contributted to the algorithmic trading software",
            "Developed a strong understanding regarding data analysis"]},
    {institution: 'Turkish Aerospace Industry (IDAK)', department: 'Weapon/Autopilot System Engineering', date: '2021-2023', icon: tai, url: 'https://www.tusas.com/en', points: ["Contributed to integration of various ammunition, smart weapons and anti-warfare devices",
"Tested different real life aircraft components both in software and hardware level", "Developed the autopilot laboratory where motion capture cameras and drones transmit data synchronously resulting in an action",
"Built algorithms to make decisions using decentralized consensus mechanisms for the next generation swarm drones"  ]},
];

const skills = [   {name:"System Engineering" , icon: systemEngineering}, {name:"Problem Solving", icon: problemSolving} ,{name: "Solidity" , icon: solidity}, {name: "React",icon: reactjs}, {name: "Typescript", icon: typescript}, {name: "Node.js", icon: nodejs} ,{name: "Javascript", icon: javascript}, {name: "Matlab/Simulink", icon: matlab},{name: "CSS", icon: css}, ];

export {education, experience, skills, github, ens, linkedin};