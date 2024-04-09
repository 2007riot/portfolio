

export default function ContactButton({title}: {title: string}) {
return (
    <button className="bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 rounded-full hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 text-white text-3xl p-7 ">{title}</button>
)
}
