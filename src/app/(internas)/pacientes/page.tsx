'use client'
import FormularioPaciente from '@/app/components/paciente/FormularioPaciente'
import ListaPacientes from '@/app/components/paciente/ListaPacientes'
import Pagina from '@/app/components/template/Pagina'
import Titulo from '@/app/components/template/Titulo'
import usePacientes from '@/app/data/hooks/usePacientes'
import { IconPlus, IconUser } from '@tabler/icons-react'

export default function Page() {
  const {
    pacientes,
    paciente,
    salvarPaciente,
    removerPaciente,
    retornarPac,
    verPaciente,
  } = usePacientes()

  return (
    <Pagina className="flex flex-col gap-10">
      <Titulo icone={IconUser} texto="Pacientes" />
      {paciente ? (
        <FormularioPaciente
          paciente={paciente}
          onChange={verPaciente}
          salvarPaciente={salvarPaciente}
          retornarPac={retornarPac}
          removerPaciente={removerPaciente}
        />
      ) : (
        <>
          <div className="flex-justify-end">
            <button
              type="button"
              className="flex items-center gap-2 bg-purple-800 text-zinc-50 px-4 py-2 rounded-md"
              onClick={() => verPaciente({})}
            >
              <IconPlus />
              <span>Novo Paciente</span>
            </button>
          </div>
          <ListaPacientes pacientes={pacientes} onClick={verPaciente} />
        </>
      )}
    </Pagina>
  )
}
