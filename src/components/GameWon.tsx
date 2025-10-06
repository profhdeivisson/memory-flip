import { GameWonProps } from "@/types";
import Link from "next/link";

export function GameWon({ moves, initializeGame }: GameWonProps) {
    return (
        <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl font-bold text-green-400">Parabéns!</h2>
        <p className="mt-2 text-xl">Você venceu em {moves} jogadas.</p>
        <div className="mt-8 flex gap-4">
          <button
            onClick={initializeGame}
            className="rounded-md bg-blue-600 px-6 py-2 text-lg font-semibold hover:bg-blue-700 cursor-pointer"
          >
            Jogar Novamente
          </button>
          <Link
            href="/play"
            className="rounded-md bg-neutral-600 px-6 py-2 text-lg font-semibold hover:bg-neutral-700 cursor-pointer"
          >
            Mudar Tema
          </Link>
          <Link
            href="/"
            className="rounded-md bg-neutral-600 px-6 py-2 text-lg font-semibold hover:bg-neutral-700 cursor-pointer"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    )
}