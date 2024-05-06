import { AboutSection } from "../components/small-views(molecules)/AboutSection"
import { aboutData } from "../data/aboutme"



export default function About() {
    return ( 
        aboutData && aboutData.length > 0 ?
        aboutData.map((aboutItem, index) => 
            <AboutSection aboutContent={aboutItem} key={index}/>
        )
        :
        <div>Some kind of an error</div>
    )
}
