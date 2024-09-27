'use client'
import ListaReceitas from '@/app/components/receita/ListaReceitas'
import ListaPacientes from '@/app/components/paciente/ListaPacientes'
import FormularioReceita from '@/app/components/receita/FormularioReceita'
import Pagina from '@/app/components/template/Pagina'
import Titulo from '@/app/components/template/Titulo'
import usePacientes from '@/app/data/hooks/usePacientes'
import useReceitas from '@/app/data/hooks/useReceitas'
import { IconPlus, IconUser } from '@tabler/icons-react'
import CampoNome from '@/app/components/shared/CampoNome'

export default function Page() {
  const {
    receitas,
    receita,
    salvarReceita,
    removerReceita,
    retornarRec,
    verReceita,
  } = useReceitas()

  const { pacientes, paciente, verPaciente } = usePacientes()

  return (
    <Pagina className="flex flex-col gap-10">
      <Titulo icone={IconUser} texto="Receitas" />

      {paciente ? (
        <>
          {receita ? (
            <FormularioReceita
              paciente={paciente}
              receita={receita}
              onChange={verReceita}
              retornarRec={retornarRec}
              salvarReceita={salvarReceita}
              removerReceita={removerReceita}
            />
          ) : (
            <>
              <div className="flex-justify-end">
                <button
                  type="button"
                  className="flex items-center gap-2 bg-purple-800 text-zinc-50 px-4 py-2 rounded-md"
                  onClick={() => verReceita({})}
                >
                  <IconPlus />
                  <span>Nova Receita</span>
                </button>
              </div>
              <CampoNome
                label="Nome do paciente"
                type="text"
                className="bg-zinc-300 p-2 outline-none"
                value={paciente?.nome}
              />
              <ListaReceitas
                receitas={receitas}
                onClick={verReceita}
                pacienteId={paciente.id || ''}
              />
            </>
          )}
        </>
      ) : (
        <>
          <ListaPacientes pacientes={pacientes} onClick={verPaciente} />
        </>
      )}
    </Pagina>
  )
}
