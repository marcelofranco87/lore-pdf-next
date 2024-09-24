import React, { useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print'
import type { Paciente, Receita } from '@prisma/client'

import CampoData from '../shared/CampoData'
import CampoNome from '../shared/CampoNome'
import CampoPresc from '../shared/CampoPresc'

import Image from 'next/image'
import header from '../../img/header.png'
import footer from '../../img/footer.png'

export interface GerarPrescricaoProps {
  paciente: Partial<Paciente>
  receita: Partial<Receita>
  onChange: (paciente: Partial<Paciente>) => void
  salvarPaciente: () => void
  onCancel: () => void
  removerPaciente: () => void
}

export default function GerarPrescricao(props: GerarPrescricaoProps) {
  const componentRef = useRef(null)
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: props.paciente.nome,
  })

  const hoje = new Date()
  const [showDate, setShowDate] = useState(false)

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <button
          type="button"
          className="flex items-center gap-2 bg-purple-800 text-zinc-50 px-4 py-2 rounded-md"
          onClick={handlePrint}
        >
          Imprimir
        </button>
        <label className="m-2">
          <input
            type="checkbox"
            checked={showDate}
            onChange={() => setShowDate(!showDate)}
            className="m-1"
          />
          Incluir data
        </label>
      </div>
      <div ref={componentRef} className="flex flex-col gap-5 text-zinc-900">
        <div className="container-fluid header w-full">
          <Image src={header} alt="Cabeçalho" />
        </div>
        <div className="grid grid-cols-6 gap-2">
          <div className="col-span-5 p-2">
            <CampoNome
              label="Nome do paciente"
              type="text"
              className="rounded outline-none"
              value={props.paciente.nome}
            />
          </div>
          {showDate && (
            <div className="col-span-1 p-2">
              <CampoData
                label="Data"
                type="text"
                className="rounded outline-none text-right mr-2"
                value={hoje.toLocaleDateString()}
              />
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 p-2">
          <CampoPresc
            label="Prescrição"
            className="rounded outline-none resize-none"
            value={props.receita.receita || ''}
          />
        </div>
        <footer>
          <div className="container-fluid footer w-full absolute bottom-0">
            <div className="flex justify-center">
              ______________________________________
            </div>
            <div className="flex justify-center">
              Dra Lore Campagnaro Chaves
            </div>
            <div className="flex justify-center">CRM/MG: 57.833</div>
            <Image src={footer} alt="Rodapé" />
          </div>
        </footer>
      </div>
    </div>
  )
}
