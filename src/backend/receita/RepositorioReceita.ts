import type { Paciente, Receita } from '@prisma/client'
import { PrismaClient } from '@prisma/client'

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export default class RepositorioReceita {
  private static db = new PrismaClient()

  static async salvarReceita(
    receita: Receita,
    paciente: Paciente
  ): Promise<Receita> {
    // biome-ignore lint/complexity/noThisInStatic: <explanation>
    return await this.db.receita.upsert({
      where: { id: receita.id },
      update: receita,
      create: { ...receita, pacienteId: paciente.id },
    })
  }

  static async obterTodas(): Promise<Receita[]> {
    // biome-ignore lint/complexity/noThisInStatic: <explanation>
    const receitas = await this.db.receita.findMany()

    return receitas
  }

  static async obterPorPaciente(pacienteId: string): Promise<Receita[]> {
    // biome-ignore lint/complexity/noThisInStatic: <explanation>
    const receitas = await this.db.receita.findMany({
      where: { pacienteId },
    })

    return receitas
  }

  static async obterPorId(id: string): Promise<Receita> {
    // biome-ignore lint/complexity/noThisInStatic: <explanation>
    const receita = await this.db.receita.findUnique({
      where: { id },
    })

    return receita as Receita
  }

  static async removerReceita(id: string): Promise<void> {
    // biome-ignore lint/complexity/noThisInStatic: <explanation>
    await this.db.receita.delete({
      where: { id },
    })
  }
}
