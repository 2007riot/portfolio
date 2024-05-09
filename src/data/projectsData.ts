export interface Project {
    id: number,
    title: string,
    description: string,
    githubLink?: string,
    appStoreLink?: string,
    img: string,
    color: string,
    tech: string,
}



const project1: Project = {
    id: 0,
    title: "Make Soap",
    description: "Simple and accurate soap making calculator made with SwiftUI",
    githubLink: "https://github.com/2007riot/MakeSoap",
    appStoreLink: "https://apps.apple.com/ge/app/make-soap/id1627081052",
    img: "src/assets/MakeSoapImg.png",
    color: "custom1" ,
    tech: "Swift, SwiftUI, UIkit"
}

const project2: Project = {
    id: 1,
    title: "This website",
    description: "lol",
    githubLink: "https://apps.apple.com/ge/app/make-soap/id1627081052",
    appStoreLink: "https://apps.apple.com/ge/app/make-soap/id1627081052",
    img: "src/assets/MakeSoapImg.png",
    color: "custom2" ,
    tech: "TypeScript, Tailwind, React"
}

const project3: Project = {
    id: 2,
    title: "Adopta Amor",
    description: "Final project during Frontend BootCamp at Factoria F5, Barcelona",
    githubLink: "https://github.com/2007riot/Proyecto-final",
    img: "src/assets/AdoptaAmorDesktop.png",
    color: "custom3",
    tech: "JavaScript, React, Css, Git, Agile" 
    
}

export const projectData: Project[] = [project1, project2, project3]
