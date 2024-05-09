import ContactButton from "./tiny-views(atoms)/ContactButton";

export default function Header() {
  return (
    <div className="flex flex-row items-center mt-28">
      <div className="here one div">
        <h1 className="font-medium text-4xl">Hi, I'm Galina Aleksandrova</h1>
        <p className="font-semibold text-6xl py-9 uppercase">
          Frontend developer
        </p>
        <p className="py-10 text-xl">
          Get to know more about me, my projects, my background and technologies
          I work with
        </p>
        <ContactButton title="Let's connect" />
      </div>
    </div>
  );
}
