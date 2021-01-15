import React from 'react'

const Select = ({className, modalidade}) => {
  return (
    <select onChange={e=>modalidade(e.target.value)} className={className} name="modalidade">
      <option value="ano">Ano</option>
      <option value="mes">Mês</option>
    </select>
  )
}

export default Select;