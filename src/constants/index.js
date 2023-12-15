import ensLogo from '../assets/ens-logo.png';
import ege from '../assets/ege.png';
import metu from '../assets/metu.png';
import altinay from '../assets/altinay.png';
import vakif from '../assets/vakif.png';
import tai from '../assets/tai.png';


const education = [
    {institution: 'Ozel Ege Lisesi', department: 'Science/Mathematics', date: '2010-2014', icon: ege, url: 'https://www.egelisesi.k12.tr/'},
    {institution: 'Middle East Technical University', department: 'Aerospace Engineering', date: '2014-2021', icon: metu, url: 'https://www.metu.edu.tr/'},
];

const experience = [
    {institution: 'Altınay Aerospace', department: 'Control & System Engineering', date: '2019', icon: altinay, url: 'https://altinaysavunma.com/en', points: []},
    {institution: 'Vakıf Investment', department: 'Portfolio Management', date: '2020', icon: vakif, url: 'https://www.vakifyatirim.com.tr/', points: []},
    {institution: 'Turkish Aerospace Industry (IDAK)', department: 'System Engineering', date: '2021-2023', icon: tai, url: 'https://www.tusas.com/en', points: []},
];


export {ensLogo, education, experience};