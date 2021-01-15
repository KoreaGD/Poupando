import React, { useCallback, useState, forwardRef, useImperativeHandle } from 'react';
import './Modal.css'

const Modal = ({ meta, modalidade, tempo }, ref) => {
  const [state, setState] = useState(false);

  const handleOpenModal = useCallback(() => {
    setState(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setState(false)
  }, []);

  useImperativeHandle(ref, () => {
    return {
      handleOpenModal
    }
  })


  if (!state) return null;
  const meta_ = (meta/tempo);
  if(meta_!== NaN)
  return (
    <div className="modal">
      {modalidade === "mes" ? (
        <h1>
          Você precisa economizar pelo menos R$ {meta_.toFixed(2)} por mês, para alcançar sua meta.
        </h1>
      ):(
        <h1>
          Você precisa economizar pelo menos R$ {meta_.toFixed(2)} por ano, para alcançar sua meta.
        </h1>
      )}

      <button className="close" onClick={handleCloseModal} >Fechar</button>
    </div>
  )
}

export default forwardRef(Modal);