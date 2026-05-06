export const skills = [{
    key: "html5",
    imgLocation: "icons/html5",
    description: 'HTML 5',
}, {
    key: 'css3',
    imgLocation: 'icons/css3',
    description: 'CSS 3',
}, {
    key: 'js',
    imgLocation: 'icons/js',
    description: 'Javascript',
}, {
    key: 'reactJS',
    imgLocation: 'icons/reactJs',
    description: 'React JS',
}, {
    key: 'tailwindCSS',
    imgLocation: 'icons/tailwindCss',
    description: 'Tailwind CSS',
}, {
    key: 'bootstrap',
    imgLocation: 'icons/bootstrap',
    description: 'Bootstrap',
}, {
    key: 'nodeJS',
    imgLocation: "icons/nodeJs",
    description: 'Node JS',
}, {
    key: 'express',
    imgLocation: 'icons/express',
    description: 'Express',
}, {
    key: 'mongoDB',
    imgLocation: 'icons/mongoDB',
    description: 'Mongo DB',
}, {
    key: 'mui',
    imgLocation: 'icons/mui',
    description: 'Material UI'
}, {
    key: 'ts',
    imgLocation: 'icons/ts',
    description: 'TypeScript'
}, {
    key: 'git',
    imgLocation: 'icons/git',
    description: 'Git',
}, {
    key: 'github',
    imgLocation: 'icons/github',
    description: 'GitHub',
}]

export const toolsOverview = [{
    key: 'vsCode',
    imgLocation: "icons/vsCode",
    description: 'VS Code',
}, {
    key: 'postman',
    imgLocation: "icons/postman",
    description: "Postman"
}, {
    key: 'chrome',
    imgLocation: "icons/chrome",
    description: "Chrome"
}]

import authPage from '../assets/img/authPage.PNG'
import pomodoro from '../assets/img/pomodoro.PNG'

export const projects = [{
    key: "authPage",
    img: authPage,
    projectName: 'Auth Page',
    url: 'https://kshitij-project.netlify.app/loginSignUp'
},{
    key: "pomodoro",
    img: pomodoro,
    projectName: 'Pomodoro Timer',
    url: 'https://kshitij-project.netlify.app/pomodoro'
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