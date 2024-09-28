'use client'
import ListaPrescricoes from '@/app/components/prescricao/ListaPrescricoes'
import ListaPacientes from '@/app/components/paciente/ListaPacientes'
import FormularioPrescricao from '@/app/components/prescricao/FormularioPrescricao'
import Pagina from '@/app/components/template/Pagina'
import Titulo from '@/app/components/template/Titulo'
import useFuncoes from '@/app/data/hooks/useFuncoes'
import { IconArrowLeft, IconPlus, IconUser } from '@tabler/icons-react'
import CampoNome from '@/app/components/shared/CampoNome'

export default function Page() {
  const {
    pacientes,
    paciente,
    verPaciente,
    retornarPac,
    prescricoes,
    prescricao,
    salvarPrescricao,
    removerPrescricao,
    retornarRec,
    verPrescricao,
  } = useFuncoes()

  return (
    <Pagina className="flex flex-col gap-10">
      <Titulo icone={IconUser} texto="Prescrições" />

      {paciente ? (
        <>
          {prescricao ? (
            <FormularioPrescricao
              paciente={paciente}
              prescricao={prescricao}
              onChange={verPrescricao}
              retornarRec={retornarRec}
              salvarPrescricao={salvarPrescricao}
              removerPrescricao={removerPrescricao}
            />
          ) : (
            <>
              <div className="flex-justify-end">
                <button
                  type="button"
                  className="flex items-center gap-2 my-2 bg-purple-800 text-zinc-50 px-4 py-2 rounded-md"
                  onClick={() => retornarPac()}
                >
                  <IconArrowLeft />
                  <span>Voltar</span>
                </button>

                <button
                  type="button"
                  className="flex items-center gap-2 bg-purple-800 text-zinc-50 px-4 py-2 rounded-md"
                  onClick={() => verPrescricao({})}
                >
                  <IconPlus />
                  <span>Nova Prescrição</span>
                </button>
              </div>

              <CampoNome
                label="Nome do paciente"
                type="text"
                className="bg-zinc-300 p-2 outline-none"
                value={paciente?.nome}
              />
              <ListaPrescricoes
                prescricoes={prescricoes}
                onClick={verPrescricao}
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
