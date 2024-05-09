import { myContent } from "../../constants";

export default function ContactButton({ title }: { title: string }) {
  function openMail() {
    window.open(myContent.link);
  }
  return (
    <button
      className="border-2 border-black rounded-full px-16 py-4 text-xl hover:bg-black hover:text-white"
      onClick={openMail}
    >
      {title}
    </button>
  );
}
