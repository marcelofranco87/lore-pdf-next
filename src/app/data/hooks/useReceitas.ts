import Backend from '@/backend'
import type { Paciente, Receita } from '@prisma/client'
import { useEffect, useState } from 'react'

export default function useReceitas() {
  const [receitas, setReceitas] = useState<Receita[]>([])
  const [receita, setReceita] = useState<Partial<Receita> | null>(null)

  useEffect(() => {
    Backend.receitas.obterTodas().then(setReceitas)
  }, [])

  async function salvarReceita(
    receita: Receita | Partial<Receita>,
    paciente: Paciente | Partial<Paciente>
  ) {
    if (!receita) return
    await Backend.receitas.salvarReceita(receita, paciente)
    if (paciente.id) {
      const receitas = await Backend.receitas.obterPorPaciente(paciente.id)
      setReceitas(receitas)
      setReceita(null)
    }
  }

  async function removerReceita() {
    if (!receita || !receita.id) return
    await Backend.receitas.removerReceita(receita.id)
    const receitas = await Backend.receitas.obterTodas()
    setReceitas(receitas)
    setReceita(null)
  }

  return {
    receitas,
    receita,
    salvarReceita,
    removerReceita,
    retornarRec: () => setReceita(null),
    verReceita: (receita: Partial<Receita> | null) => setReceita(receita),
  }
}
