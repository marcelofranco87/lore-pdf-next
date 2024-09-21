import type { Prescricao } from '@/core/model/Prescricao'
import InputTexto from '../shared/InputTexto'
import InputArea from '../shared/InputArea'

export interface FormularioPrescricaoProps {
  prescricao: Partial<Prescricao>
  onChange: (prescricao: Partial<Prescricao>) => void
  salvarPresc: () => void
  cancelarPresc: () => void
  removerPacientePresc: () => void
}

export default function FormularioPrescricao(props: FormularioPrescricaoProps) {
  return (
    <div className="flex flex-col gap-5 text-zinc-900">
      <InputTexto
        label="Paciente"
        type="text"
        className="bg-zinc-300 p-2 rounded-md outline-none"
        value={props.prescricao.pacienteId}
      />
      <InputArea
        label="Prescrição"
        className="bg-zinc-300 p-2 rounded-md outline-none"
        value={props.prescricao.detalhes || ''}
        onChange={e =>
          props.onChange?.({ ...props.prescricao, detalhes: e.target.value })
        }
      />
      <div className="flex justify-between">
        <div className="flex gap-5">
          <button
            type="button"
            className="bg-purple-800 text-zinc-50 px-4 py-2 rounded-md"
            onClick={props.salvarPresc}
          >
            Salvar
          </button>
          <button
            type="button"
            className="bg-zinc-300 text-zinc-900 px-4 py-2 rounded-md"
            onClick={props.cancelarPresc}
          >
            Cancelar
          </button>
        </div>
        <button
          type="button"
          className="bg-red-500 text-zinc-50 px-4 py-2 rounded-md"
          onClick={props.removerPacientePresc}
        >
          Remover
        </button>
      </div>
    </div>
  )
}
