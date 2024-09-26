import type { Paciente } from '@prisma/client'
import InputTexto from '../shared/InputTexto'

export interface FormularioPacienteProps {
  paciente: Partial<Paciente>

  onChange: (paciente: Partial<Paciente>) => void
  salvarPaciente: () => void
  retornar: () => void
  removerPaciente: () => void
}

export default function FormularioPaciente(props: FormularioPacienteProps) {
  const handleRemove = async () => {
    const confirmaRemover = confirm(
      'Tem certeza que deseja remover o paciente?\nEsta ação não pode ser desfeita.'
    )

    if (!confirmaRemover) return

    try {
      await props.removerPaciente()
      alert('Paciente removido.')
    } catch (error) {
      console.error('Erro ao remover o paciente:', error)
      alert('Este paciente tem receitas em seu nome e não pode ser removido.')
    }
  }

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
            onClick={props.retornar}
          >
            Cancelar
          </button>
        </div>
        <button
          type="button"
          className="bg-red-500 text-zinc-50 px-4 py-2 rounded-md"
          onClick={handleRemove}
        >
          Remover
        </button>
      </div>
    </div>
  )
}
