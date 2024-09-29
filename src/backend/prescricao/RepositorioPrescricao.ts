import type { Paciente, Prescricao } from '@prisma/client'
import { PrismaClient } from '@prisma/client'

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export default class RepositorioPrescricao {
  private static db = new PrismaClient()

  static async salvarPrescricao(
    prescricao: Prescricao,
    paciente: Paciente
  ): Promise<Prescricao> {
    // biome-ignore lint/complexity/noThisInStatic: <explanation>
    return await this.db.prescricao.upsert({
      where: { id: prescricao.id },
      update: prescricao,
      create: { ...prescricao, pacienteId: paciente.id },
    })
  }

  static async salvarComoNova(
    prescricao: Prescricao,
    paciente: Paciente
  ): Promise<Prescricao> {
    // biome-ignore lint/complexity/noThisInStatic: <explanation>
    return await this.db.prescricao.upsert({
      where: { id: prescricao.id },
      update: prescricao,
      create: { ...prescricao, pacienteId: paciente.id },
    })
  }

  static async obterTodas(): Promise<Prescricao[]> {
    // biome-ignore lint/complexity/noThisInStatic: <explanation>
    const prescricoes = await this.db.prescricao.findMany()

    return prescricoes
  }

  static async obterPorPaciente(pacienteId: string): Promise<Prescricao[]> {
    // biome-ignore lint/complexity/noThisInStatic: <explanation>
    const prescricoes = await this.db.prescricao.findMany({
      where: { pacienteId },
      orderBy: {
        updatedAt: 'desc',
      },
    })

    return prescricoes
  }

  static async obterPorId(id: string): Promise<Prescricao> {
    // biome-ignore lint/complexity/noThisInStatic: <explanation>
    const prescricao = await this.db.prescricao.findUnique({
      where: { id },
    })

    return prescricao as Prescricao
  }

  static async removerPrescricao(id: string): Promise<void> {
    // biome-ignore lint/complexity/noThisInStatic: <explanation>
    await this.db.prescricao.delete({
      where: { id },
    })
  }
}
