export interface Project {
    id: number,
    title: string,
    description: string,
    githubLink?: string,
    appStoreLink?: string,
    img: string,
    color: string
}



const project1: Project = {
    id: 0,
    title: "Make Soap",
    description: "lolknfv",
    githubLink: "https://apps.apple.com/ge/app/make-soap/id1627081052",
    appStoreLink: "https://apps.apple.com/ge/app/make-soap/id1627081052",
    img: "src/assets/MakeSoapImg.png",
    color: "custom1" 
}

const project2: Project = {
    id: 1,
    title: "This website",
    description: "lol",
    githubLink: "https://apps.apple.com/ge/app/make-soap/id1627081052",
    appStoreLink: "https://apps.apple.com/ge/app/make-soap/id1627081052",
    img: "src/assets/MakeSoapImg.png",
    color: "custom2" 
}

const project3: Project = {
    id: 3,
    title: "Taylor swift website",
    description: "my taylor swift fan web page blag blah",
    githubLink: "https://apps.apple.com/ge/app/make-soap/id1627081052",
    appStoreLink: "https://apps.apple.com/ge/app/make-soap/id1627081052",
    img: "src/assets/MakeSoapImg.png",
    color: "custom3" 
    
}

export const projectData: Project[] = [project1, project2, project3]
