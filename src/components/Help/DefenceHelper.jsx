import { Shield, MapPin } from "react-feather";
import {
  HoverCard,
  HoverCardArrow,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

export function DefenceHelper({ children, active, onNext }) {
  return (
    <HoverCard open={active}>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent sideOffset={12}>
        <HoverCardArrow />
        <div className="mb-2 flex items-center gap-2">
          <div className="inline-flex items-center justify-center rounded bg-indigo-900 p-2">
            <Shield className="h-4 w-4 text-white" />
          </div>
          <p className="font-medium">Posição defensiva</p>
        </div>
        <p className="mb-4 text-sm">
          Quando ativado move os jogadores para a posição de defesa para receber
          um saque. Necessário ativar o botão{" "}
          <span className="inline-flex items-center justify-center rounded bg-indigo-900 p-1">
            <MapPin className="h-4 w-4 text-white" />
          </span>{" "}
          (Mostrar posicionamento).
        </p>
        <div className="mt-2 flex w-full items-center justify-between">
          <p className="text-sm text-zinc-600">2/3</p>
          <button
            className="cursor-pointer rounded bg-indigo-900 px-4 py-1.5 text-white"
            onClick={onNext}
          >
            Próximo
          </button>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
