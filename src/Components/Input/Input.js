import React from 'react';
import Select from '../Select/Select';
import './Input.css'

const Input = ({ meta, tempo,modalidade }) => {
  return (
    <>
      <input  onChange={e=>meta(e.target.value)} className="meta" placeholder="Qual a sua meta ?" type="text" />
      <input  onChange={e=>tempo(e.target.value)} className="tempo" placeholder="Em quanto tempo ?" type="text" />
      <Select modalidade={modalidade}  className="modalidade" />
    </>
  )
}

export default Input;