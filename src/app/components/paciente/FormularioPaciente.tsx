import type { Paciente } from '@/core/model/Paciente'
import InputTexto from '../shared/InputTexto'
import InputArea from '../shared/InputArea'
import Prescricao from './Prescricao'

export interface FormularioPacienteProps {
  paciente: Partial<Paciente>
  onChange: (paciente: Partial<Paciente>) => void
  salvarPaciente: () => void
  onCancel: () => void
  removerPaciente: () => void
}

export default function FormularioPaciente(props: FormularioPacienteProps) {
  return (
    <div className="flex flex-col gap-5 text-zinc-900">
      <InputTexto
        label="Nome do paciente"
        type="text"
        className="bg-zinc-300 p-2 rounded-md outline-none"
        value={props.paciente.nome}
        onChange={e =>
          props.onChange?.({ ...props.paciente, nome: e.target.value })
        }
      />
      <InputArea
        label="Prescrição"
        className="bg-zinc-300 p-2 rounded-md outline-none"
        value={props.paciente.prescricao || ''}
        onChange={e =>
          props.onChange?.({ ...props.paciente, prescricao: e.target.value })
        }
      />
      <div className="flex justify-between">
        <div className="flex gap-5">
          <button
            type="button"
            className="bg-purple-800 text-zinc-50 px-4 py-2 rounded-md"
            onClick={props.salvarPaciente}
          >
            Salvar
          </button>
          <button
            type="button"
            className="bg-zinc-300 text-zinc-900 px-4 py-2 rounded-md"
            onClick={props.onCancel}
          >
            Cancelar
          </button>
        </div>
        <button
          type="button"
          className="bg-red-500 text-zinc-50 px-4 py-2 rounded-md"
          onClick={props.removerPaciente}
        >
          Remover
        </button>
      </div>
    </div>
  )
}
