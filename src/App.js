import './App.css';
import React, { useCallback, useRef, useState } from 'react'
import Banner from './Components/Banner/Banner';
import Input from './Components/Input/Input';
import Logo from './Components/Logo/Logo';
import Modal from './Components/Modal/Modal';

function App() {
  const [meta, setMeta] = useState('');
  const [tempo, setTempo] = useState('');
  const [modalidade, setModalidade] = useState('mes')

  const modalRef = useRef(null)
  const handleOpenModal = useCallback(() => {
    if (typeof (meta * 1) === 'number' && typeof (tempo * 1) === 'number') {
      modalRef.current.handleOpenModal();
    }
    else alert('Por favor insira apenas números');
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Banner />
      </header>
      <section className="App-section">
        <Input meta={setMeta} tempo={setTempo} modalidade={setModalidade} />
      </section>
      <section className="App-Int">
        <button className="gerarCalc" onClick={handleOpenModal}>Gerar Calculo</button>
      </section>
      <Modal ref={modalRef} meta={meta} tempo={tempo} modalidade={modalidade} />
    </div>
  );
}

export default App;
