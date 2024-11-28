import { IHook } from "@/types";
import { useNavigate } from "react-router-dom";

export default function HookItem({ hook }: { hook: IHook }) {
  const navigate = useNavigate();

  function handleNavigation(slug: string) {
    navigate(`/tutorial/${slug}`);
  }

  return (
    <div
      className={`bg-slate-600/10 border-[1px] border-slate-600 ${hook.size} w-auto flex items-center justify-center hover:cursor-pointer hover:scale-[1.03] transition-transform duration-300`}
      onClick={() => handleNavigation(hook.slug)}
    >
      <p className="text-slate-400 font-saira font-extralight tracking-widest text-lg lg:text-2xl">
        {hook.name}
      </p>
    </div>
  );
}
