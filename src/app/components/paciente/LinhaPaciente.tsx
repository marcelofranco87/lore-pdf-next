import type { Paciente } from '@prisma/client'

export interface LinhaPacienteProps {
  paciente: Paciente
  onClick?: (paciente: Paciente) => void
  onKeyDown?: (paciente: Paciente) => void
}

export default function LinhaPaciente(props: LinhaPacienteProps) {
  return (
    <div
      className="flex bg-zinc-300 text-zinc-900 items-center gap-5 p-4 rounded-md cursor-pointer"
      onClick={() => props.onClick?.(props.paciente)}
      onKeyDown={() => props.onKeyDown?.(props.paciente)}
    >
      <div className="flex flex-col">
        <span className="text-xl font-black">{props.paciente.nome}</span>
      </div>
    </div>
  )
}
