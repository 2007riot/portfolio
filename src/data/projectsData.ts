export interface Project {
    id: number,
    title: string,
    description: string,
    detailedDescription: string
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
    detailedDescription: "A native iOS app for professional soap makers. It is a soap recipe calculator. It has around 5000 downloads, with most users primarily from the USA. Available for iOS 15+. Built with Swift and SwiftUI. Available in Russian and English, with Spanish coming soon.",
    githubLink: "https://github.com/2007riot/MakeSoap",
    appStoreLink: "https://apps.apple.com/ge/app/make-soap/id1627081052",
    img: "src/assets/MakeSoapImg.png",
    color: "custom1" ,
    tech: "Swift, SwiftUI, UIkit"
}

const project2: Project = {
    id: 1,
    title: "This website",
    description: "Built a personal portfolio webpage to highlight my projects and experience by using React, React router, Tailwind and Typescript.",
    detailedDescription: "Built a personal portfolio webpage to highlight my projects and experience by using React, React router, Tailwind and Typescript.",
    githubLink: "https://github.com/2007riot/portfolio",
    img: "src/assets/portfolio.png",
    color: "custom2" ,
    tech: "TypeScript, Tailwind, React"
}

const project3: Project = {
    id: 2,
    title: "Adopta Amor",
    description: "Final team project during Frontend BootCamp at Factoria F5, Barcelona",
    detailedDescription: "Final project during Frontend BootCamp at Factoria F5. It's a website where you can adapt an animal from a local shelter in Barcelona. We used a tech stack including JavaScript, React, React-router-dom, CSS, JSON-Server, and Axios. Agile (Trello) and Git (GitHub) for team collaboration and version control.",
    githubLink: "https://github.com/2007riot/Proyecto-final",
    img: "src/assets/AdoptaAmorDesktop.png",
    color: "custom3",
    tech: "JavaScript, React, Css, Git, Agile" 
    
}

export const projectData: Project[] = [project1, project2, project3]
