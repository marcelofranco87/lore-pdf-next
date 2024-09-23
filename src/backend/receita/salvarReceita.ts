'use server'

import type { Paciente, Receita } from '@prisma/client'
import Id from '@/core/utils/Id'
import RepositorioReceita from './RepositorioReceita'

export default async function salvarReceita(
  receita: Receita | Partial<Receita>,
  paciente: Partial<Paciente>
) {
  const novaReceita = {
    ...receita,
    id: receita.id ?? Id.novo,
    pacienteId: paciente.id,
  }

  return RepositorioReceita.salvarReceita(
    novaReceita as Receita,
    paciente as Paciente
  )
}
