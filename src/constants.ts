interface Content {
    highlights: string;
    value: string;
    portfolio: string;
    technologies: string;
    projects: string;
    intro: string;
    education: string;
    workExperience: string;
    email: string;
    link: string;
}

class MyContent implements Content {
    highlights = "Highlights";
    value = "My values";
    portfolio = "Portfolio";
    technologies = "Technologies";
    projects = "Projects";
    intro = "Intro";
    education = "Education and training";
    workExperience = "Work experience";
    email = "galina.aleks1012@gmail.com";
    link = `mailto:${this.email}`;
}

export const myContent = new MyContent()