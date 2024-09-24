import type { Paciente, Receita } from '@prisma/client'
import InputTexto from '../shared/InputTexto'
import InputArea from '../shared/InputArea'

export interface FormularioReceitaProps {
  paciente: Partial<Paciente>
  receita: Partial<Receita>
  onChange: (receita: Partial<Receita>) => void
  salvarReceita: (
    receita: Partial<Receita>,
    paciente: Partial<Paciente>
  ) => void
  retornar: () => void
  removerReceita: () => void
}

export default function FormularioReceita(props: FormularioReceitaProps) {
  return (
    <div className="flex flex-col gap-5 text-zinc-900">
      <InputTexto
        label="Nome do paciente"
        type="text"
        readOnly
        className="bg-zinc-300 p-2 rounded-md outline-none"
        value={props.paciente.nome}
      />
      <InputArea
        label="Prescrição"
        className="bg-zinc-300 p-2 rounded-md outline-none"
        value={props.receita.receita || ''}
        onChange={e =>
          props.onChange?.({ ...props.receita, receita: e.target.value })
        }
      />
      <div className="flex justify-between">
        <div className="flex gap-5">
          <button
            type="button"
            className="bg-purple-800 text-zinc-50 px-4 py-2 rounded-md"
            onClick={() => props.salvarReceita(props.receita, props.paciente)}
          >
            Salvar
          </button>
          <button
            type="button"
            className="bg-zinc-300 text-zinc-900 px-4 py-2 rounded-md"
            onClick={props.retornar}
          >
            Cancelar
          </button>
        </div>
        <button
          type="button"
          className="bg-red-500 text-zinc-50 px-4 py-2 rounded-md"
          onClick={props.removerReceita}
        >
          Remover
        </button>
      </div>
    </div>
  )
}
