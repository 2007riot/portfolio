export interface Tech {
    title: string,
    iconPath: string
    id: number
}

const js: Tech = {title: "JavaScript", iconPath: "src/assets/js.png", id: 0}
const ts: Tech = {title: "TypeScript", iconPath: "src/assets/ts-logo-512.png", id: 1}
const swift: Tech = {title: "Swift, SwiftUI", iconPath: "src/assets/Swift_logo_color.svg", id: 2}
const react: Tech = {title: "React, React hooks", iconPath: "src/assets/react-logo.svg", id: 3}
const git: Tech = {title: "Git, version control", iconPath: "src/assets/git.svg", id: 4}
const figma: Tech = {title: "Figma, UX/UI", iconPath: "src/assets/figma.png", id: 5}
const agile: Tech = {title: "Agile, Scrum, Kanban", iconPath: "src/assets/agile.png", id: 6}
const html: Tech = {title: "HTML, CSS", iconPath: "src/assets/html.png", id: 7}
const tailwind: Tech = {title: "Tailwind", iconPath: "src/assets/tailwind.png", id: 8}
const ide: Tech = {title: "VSCode, XCode", iconPath: "src/assets/visualStudio.png", id: 9}
const net: Tech = {title: "Networking, Fetch API", iconPath: "src/assets/visualStudio.png", id: 9}
const soft: Tech = {title: "Team player and comunication", iconPath: "src/assets/visualStudio.png", id: 9}
// const firma: Tech = {title: "Git, github", iconPath: "src/data/Swift_logo_color.svg", id: 5}
// const firma: Tech = {title: "Git, github", iconPath: "src/data/Swift_logo_color.svg", id: 5}


export const techData: Tech[] = [js,html, ts, react,tailwind, swift, ide, git, net, figma, agile, soft]
console.log(techData.length);

