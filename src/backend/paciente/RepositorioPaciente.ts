import type { Paciente } from '@prisma/client'
import { PrismaClient } from '@prisma/client'

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export default class RepositorioPaciente {
  private static db: PrismaClient = new PrismaClient()

  static async salvarPaciente(paciente: Paciente): Promise<Paciente> {
    // biome-ignore lint/complexity/noThisInStatic: <explanation>
    return await this.db.paciente.upsert({
      where: { id: paciente.id },
      update: paciente,
      create: paciente,
    })
  }

  static async obterTodos(): Promise<Paciente[]> {
    // biome-ignore lint/complexity/noThisInStatic: <explanation>
    return await this.db.paciente.findMany({
      orderBy: {
        nome: 'asc',
      },
    })
  }

  static async obterPorId(id: string): Promise<Paciente> {
    // biome-ignore lint/complexity/noThisInStatic: <explanation>
    const paciente = await this.db.paciente.findUnique({
      where: { id },
    })

    return paciente as Paciente
  }

  static async removerPaciente(id: string): Promise<void> {
    // biome-ignore lint/complexity/noThisInStatic: <explanation>
    await this.db.paciente.delete({
      where: { id },
    })
  }
}
