import type { Paciente, Prescricao } from '@prisma/client'
import InputTexto from '../shared/InputTexto'
import InputArea from '../shared/InputArea'

export interface FormularioPrescricaoProps {
  paciente: Partial<Paciente>
  prescricao: Partial<Prescricao>
  onChange: (prescricao: Partial<Prescricao>) => void
  salvarPrescricao: (
    prescricao: Partial<Prescricao>,
    paciente: Partial<Paciente>
  ) => void
  retornarRec: () => void
  removerPrescricao: () => void
}

export default function FormularioPrescricao(props: FormularioPrescricaoProps) {
  return (
    <div className="flex flex-col gap-5 text-zinc-900">
      <InputTexto
        label="Nome do paciente"
        type="text"
        readOnly
        className="bg-zinc-300 p-2 rounded-md outline-none"
        value={props.paciente.nome}
      />
      <InputTexto
        label="Palavras-chave (opcional)"
        type="text"
        className="bg-zinc-300 p-2 rounded-md outline-none"
        value={props.prescricao.palavrasChave || ''}
        onChange={e =>
          props.onChange?.({
            ...props.prescricao,
            palavrasChave: e.target.value,
          })
        }
      />
      <InputArea
        label="Prescrição"
        className="bg-zinc-300 p-2 rounded-md outline-none"
        value={props.prescricao.prescricao || ''}
        onChange={e =>
          props.onChange?.({ ...props.prescricao, prescricao: e.target.value })
        }
      />
      <div className="flex justify-between">
        <div className="flex gap-5">
          <button
            type="button"
            className="bg-purple-800 text-zinc-50 px-4 py-2 rounded-md"
            onClick={() =>
              props.salvarPrescricao(props.prescricao, props.paciente)
            }
          >
            Salvar
          </button>
          <button
            type="button"
            className="bg-zinc-300 text-zinc-900 px-4 py-2 rounded-md"
            onClick={props.retornarRec}
          >
            Cancelar
          </button>
        </div>
        <button
          type="button"
          className="bg-red-500 text-zinc-50 px-4 py-2 rounded-md"
          onClick={props.removerPrescricao}
        >
          Remover
        </button>
      </div>
    </div>
  )
}
