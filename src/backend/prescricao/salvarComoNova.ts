'use server'

import type { Paciente, Prescricao } from '@prisma/client'
import Id from '@/core/utils/Id'
import RepositorioPrescricao from './RepositorioPrescricao'

export default async function salvarComoNova(
  prescricao: Prescricao | Partial<Prescricao>,
  paciente: Partial<Paciente>
) {
  const novaPrescricao = {
    ...prescricao,
    updatedAt: new Date(),
    id: Id.novo,
    pacienteId: paciente.id,
  }

  return RepositorioPrescricao.salvarComoNova(
    novaPrescricao as Prescricao,
    paciente as Paciente
  )
}
