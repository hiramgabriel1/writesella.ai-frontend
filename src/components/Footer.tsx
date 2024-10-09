import { Logo } from "../../public/img/logo";

export default function Footer() {
    return(
        <footer className="relative border-t-2 border-t-slate-50/10">
          <div className="flex py-10 items-center px-10 gap-5">
            <Logo/>
            <h1 className="font-semibold text-xl text-white">WriteAndSell.IA </h1>
          </div>
        </footer>
    );
}