export interface Tech {
    title: string,
    iconPath: string
    id: number
}

const js: Tech = {title: "JavaScript", iconPath: "src/assets/js.png", id: 0}
const ts: Tech = {title: "TypeScript", iconPath: "src/assets/ts-logo-512.png", id: 1}
const swift: Tech = {title: "Swift, SwiftUI", iconPath: "src/assets/Swift_logo_color.svg", id: 2}
const react: Tech = {title: "React, React libraries", iconPath: "src/assets/react-logo.svg", id: 3}
const git: Tech = {title: "Git, github", iconPath: "src/assets/Swift_logo_color.svg", id: 4}
const figma: Tech = {title: "Figma", iconPath: "src/assets/ts-logo-512.png", id: 5}
const agile: Tech = {title: "Agile, Scrum, Kanban", iconPath: "src/assets/react-logo.svg", id: 6}
// const firma: Tech = {title: "Git, github", iconPath: "src/data/Swift_logo_color.svg", id: 5}
// const firma: Tech = {title: "Git, github", iconPath: "src/data/Swift_logo_color.svg", id: 5}


export const techData: Tech[] = [js,ts,swift, react, git, figma, agile,js,ts,swift,figma,agile]
console.log(techData.length);

