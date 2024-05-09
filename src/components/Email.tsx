import { myContent } from "../constants";

export default function Email() {
    return (
        <a className="underline" href={myContent.link}>{myContent.email}</a>
    )
}
