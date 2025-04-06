export const skills = [{
    key: "html5",
    imgLocation: "https://static-00.iconduck.com/assets.00/html5-icon-505x512-zls0uohx.png",
    description: 'HTML 5',
}, {
    key: 'css3',
    imgLocation: 'https://static-00.iconduck.com/assets.00/css3-plain-icon-450x512-vh7r7l9e.png',
    description: 'CSS 3',
}, {
    key: 'js',
    imgLocation: 'https://static-00.iconduck.com/assets.00/javascript-icon-512x512-34hjwczx.png',
    description: 'Javascript',
}, {
    key: 'reactJS',
    imgLocation: 'https://static-00.iconduck.com/assets.00/file-type-reactjs-icon-512x455-5au546uy.png',
    description: 'React JS',
}, {
    key: 'tailwindCSS',
    imgLocation: 'https://static-00.iconduck.com/assets.00/file-type-tailwind-icon-512x307-l0anq79h.png',
    description: 'Tailwind CSS',
}, {
    key: 'bootstrap',
    imgLocation: 'https://static-00.iconduck.com/assets.00/bootstrap-plain-icon-512x512-fqd6tfaa.png',
    description: 'Bootstrap',
}, {
    key: 'nodeJS',
    imgLocation: "https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png",
    description: 'Node JS',
}, {
    key: 'express',
    imgLocation: 'https://static-00.iconduck.com/assets.00/express-original-icon-512x298-28hzbsin.png',
    description: 'Express',
}, {
    key: 'mongoDB',
    imgLocation: 'https://static-00.iconduck.com/assets.00/file-type-mongo-icon-230x512-g17cul1f.png',
    description: 'Mongo DB',
}, {
    key: 'mui',
    imgLocation: 'https://static-00.iconduck.com/assets.00/material-ui-icon-512x406-fhnu85xg.png',
    description: 'Material UI'
}, {
    key: 'ts',
    imgLocation: 'https://static-00.iconduck.com/assets.00/file-type-typescript-official-icon-512x512-873ff1r9.png',
    description: 'TypeScript'
}, {
    key: 'git',
    imgLocation: 'https://static-00.iconduck.com/assets.00/git-icon-512x512-61zfmvxk.png',
    description: 'Git',
}, {
    key: 'github',
    imgLocation: 'https://static-00.iconduck.com/assets.00/github-icon-512x500-7p3xy9uj.png',
    description: 'GitHub',
}]

export const toolsOverview = [{
    key: 'vsCode',
    imgLocation: "https://static-00.iconduck.com/assets.00/vs-code-icon-512x512-ipycpzlh.png",
    description: 'VS Code',
}, {
    key: 'postman',
    imgLocation: "https://cdn.iconscout.com/icon/free/png-256/free-postman-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-2945092.png?f=webp&w=256",
    description: "Postman"
}, {
    key: 'chrome',
    imgLocation: "https://static-00.iconduck.com/assets.00/chrome-icon-512x512-5ln6wbyk.png",
    description: "Chrome"
}]

import authPage from '../assets/img/authPage.PNG'
import pomodoro from '../assets/img/pomodoro.PNG'

export const projects = [{
    key: "authPage",
    img: authPage,
    projectName: 'Auth Page'
},{
    key: "pomodoro",
    img: pomodoro,
    projectName: 'Pomodoro Timer'
}]

import resume from "../assets/file/Resume.pdf"

export const handleDownloadResume = () => {
    const pdfUrl = resume;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Kshitij_Raj_FullStack_Developer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    fetch(
      "https://api.github.com/repos/Kshitij0211/portfolio-stats/dispatches",
      {
        method: "POST",
        headers: {
          Accept: "application/vnd.github.v3+json",
          Authorization: `Bearer ${import.meta.env.VITE_GH_PAT}`,
        },
        body: JSON.stringify({ event_type: "update_downloads" }),
      }
    );
  };
