'use server'

import RepositorioPrescricao from './RepositorioPrescricao'

export default async function removerPrescricao(id: string) {
  return RepositorioPrescricao.removerPrescricao(id)
}
