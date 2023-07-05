'use client';
import { createContext } from 'react';
import Image from 'next/image'
import styles from './page.module.css'
import dobraz from '../public/dobra-z.png'
import dobrau from '../public/dobra-u.png'
import dobraaba from '../public/dobra-aba.png'
import dobrazInterno from '../public/dobra-z-interno.png'
import desenvolvimento from '../public/desenvolvimento.png'
import React, { useEffect, useState } from "react";
import "bootswatch/dist/minty/bootstrap.min.css"

export default function Home() {


 const valorInicialDobraZExterno = {
  dobraz_a: 0,
  dobraz_b: 0,
  dobraz_c: 0,
  dobraz_espessura: 0,
  dobraz_resultado: 0
 }

 const valorInicialDobraAba = {
  aba_a: 0,
  aba_b: 0,
  aba_c: 0,
  aba_d: 0,
  aba_espessura: 0,
  aba_resultado: 0
 }

 const valorInicialDobraU = {
  dobrau_a: 0,
  dobrau_b: 0,
  dobrau_c: 0,
  dobrau_espessura: 0,
  dobrau_resultado: 0
 }

 const valorInicialDobraZInterno = {
  dobrazInterno_a: 0,
  dobrazInterno_b: 0,
  dobrazInterno_c: 0,
  dobrazInterno_espessura: 0,
  dobrazInterno_resultado: 0
 }

 const valorInicialDesenvolvimento = {
  desenvolvimento_a: 0,
  desenvolvimento_b: 0,
  desenvolvimento_c: 0,
  desenvolvimento_d: 0,
  desenvolvimento_espessura: 0,
  desenvolvimento_resultado: 0
 }

 const [valor, setValor] = useState(valorInicialDobraZExterno)
 const [valor2, setValor2] = useState(valorInicialDobraAba)
 const [valor3, setValor3] = useState(valorInicialDobraU)
 const [valor4, setValor4] = useState(valorInicialDobraZInterno)
 const [valor5, setValor5] = useState(valorInicialDesenvolvimento)

 function handleChangeA(event) {
  const { name, value } = event.target;
  setValor({...valor, [name]: value});
 }

 function handleChangeB(event) {
  const { name, value } = event.target;
  setValor2({...valor2, [name]: value});
 }

 function handleChangeC(event) {
  const { name, value } = event.target;
  setValor3({...valor3, [name]: value});
 }

 function handleChangeD(event) {
  const { name, value } = event.target;
  setValor4({...valor4, [name]: value});
 }

 function handleChangeE(event) {
  const { name, value } = event.target;
  setValor5({...valor5, [name]: value});
 }

 const submitA = () => {
  const desconto = parseFloat(valor.dobraz_a) + parseFloat(valor.dobraz_b) + parseFloat(valor.dobraz_c) - parseFloat(4*(valor.dobraz_espessura))
  setValor({...valor, ["resultado"]: desconto.toFixed(2)})
}

const submitB = () => {
  const desconto = parseFloat(valor2.aba_a) + parseFloat(valor2.aba_b) + 
                    parseFloat(valor2.aba_c) + parseFloat(valor2.aba_d)  - parseFloat(8*(valor2.aba_espessura))
  setValor2({...valor2, ["aba_resultado"]: desconto.toFixed(2)})
}

const submitC = () => {
  const desconto = parseFloat(valor3.dobrau_a) + parseFloat(valor3.dobrau_b) + 
                    parseFloat(valor3.dobrau_c) - parseFloat(4*(valor3.dobrau_espessura))
  setValor3({...valor3, ["dobrau_resultado"]: desconto.toFixed(2)})
}

const submitD = () => {
  const desconto = parseFloat(valor4.dobrazInterno_a) + parseFloat(valor4.dobrazInterno_b) + parseFloat(valor4.dobrazInterno_c) - parseFloat(4*(valor4.dobrazInterno_espessura))
  setValor4({...valor4, ["dobrazInterno_resultado"]: desconto.toFixed(2)})
}

const submitE = () => {
  const diametro = parseFloat(valor5.desenvolvimento_b) + parseFloat(valor5.desenvolvimento_espessura)
  const calc1 = parseFloat(valor5.desenvolvimento_a) + parseFloat(valor5.desenvolvimento_d)
  const calc2 = 2*parseFloat(valor5.desenvolvimento_c)
  const calc3 = - diametro
  const calc4 = Math.PI*(parseFloat(diametro)/2)
  let desenvolvimento = parseFloat(calc1 + calc2 + calc3 + calc4)

  console.log(calc1)
  console.log(calc2)
  console.log(calc3)
  console.log(calc4)

  if(calc1 != 0) {
    desenvolvimento = desenvolvimento - 4*parseFloat(valor5.desenvolvimento_espessura)
  }

  setValor5({...valor5, ["desenvolvimento_resultado"]: desenvolvimento.toFixed(2)})

}

    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">AÇOS YAMADA COMÉRCIO DE FERROS</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">

        </div>
        </div>
      </nav>
      <main style={{marginTop: '3em', marginLeft: '1em'}}>
        <div className='box'>
          <h3>DOBRA Z COM B EXTERNO</h3>
          <Image className='img' src={dobraz}></Image>
          <form >
            <div>
              <label>Medida A: </label>
              <input 
              name="dobraz_a"
              type="number"
              onChange={e => handleChangeA(e)}>
              </input>
            </div>
            <div>
              <label>Medida B: </label>
              <input
              name="dobraz_b" 
              type={'number'}
              onChange={e => handleChangeA(e)}>
              </input>
            </div>
            <div>
              <label>Medida C: </label>
              <input
              name="dobraz_c" 
              type={'number'}
              onChange={e => handleChangeA(e)}>
              </input>
            </div>
            <div>
              <label>Espessura da chapa: </label>
              <input 
              type={'number'}
              name="dobraz_espessura"
              onChange={e => handleChangeA(e)}>
              </input>
            </div>
          </form>
          <div className='teste'>
            <div className='botao'>
              <button 
              className='btn btn-primary'
              onClick={submitA}
              >
              CALCULAR
              </button>
            </div>
            <h4>RESULTADO: {valor.resultado}</h4>
            </div>
          </div>
          <div className='box'>
            <h3>DOBRA U COM ABA COM A, B, C E D EXTERNOS</h3>
            <Image className='img' src={dobraaba}></Image>
            <form>
            <div>
              <label>Medida A: </label>
              <input 
              name="aba_a"
              type="number"
              onChange={e => handleChangeB(e)}>
              </input>
            </div>
            <div>
              <label>Medida B: </label>
              <input
              name="aba_b" 
              type={'number'}
              onChange={e => handleChangeB(e)}>
              </input>
            </div>
            <div>
              <label>Medida C: </label>
              <input
              name="aba_c" 
              type={'number'}
              onChange={e => handleChangeB(e)}>
              </input>
            </div>
            <div>
              <label>Medida D: </label>
              <input
              name="aba_d" 
              type={'number'}
              onChange={e => handleChangeB(e)}>
              </input>
            </div>
            <div>
              <label>Espessura da chapa: </label>
              <input 
              type={'number'}
              name="aba_espessura"
              onChange={e => handleChangeB(e)}>
              </input>
            </div>
          </form>
          <div className='botao'>
            <button
            className='btn btn-primary' 
            onClick={submitB}
            >
            CALCULAR
            </button>
          </div>
          <h4>RESULTADO: {valor2.aba_resultado}</h4>
          </div>
          <div className='box'>
            <h3>DOBRA U SEM ABA</h3>
            <Image className='img' src={dobrau}></Image>
            <form>
            <div>
              <label>Medida A: </label>
              <input 
              name="dobrau_a"
              type="number"
              onChange={e => handleChangeC(e)}>
              </input>
            </div>
            <div>
              <label>Medida B: </label>
              <input
              name="dobrau_b" 
              type={'number'}
              onChange={e => handleChangeC(e)}>
              </input>
            </div>
            <div>
              <label>Medida C: </label>
              <input
              name="dobrau_c" 
              type={'number'}
              onChange={e => handleChangeC(e)}>
              </input>
            </div>
            <div>
              <label>Espessura da chapa: </label>
              <input 
              type={'number'}
              name="dobrau_espessura"
              onChange={e => handleChangeC(e)}>
              </input>
            </div>
          </form>
          <div className='botao'>
            <button
            className='btn btn-primary' 
            onClick={submitC}
            >
            CALCULAR
            </button>
          </div>
          <h4>RESULTADO: {valor3.dobrau_resultado}</h4>
          </div>
          <div className='box'>
            <h3>DOBRA Z COM B INTERNO</h3>
            <Image className='img' src={dobrazInterno} ></Image>
            <form>
            <div>
              <label>Medida A: </label>
              <input 
              name="dobrazInterno_a"
              type="number"
              onChange={e => handleChangeD(e)}>
              </input>
            </div>
            <div>
              <label>Medida B: </label>
              <input
              name="dobrazInterno_b" 
              type={'number'}
              onChange={e => handleChangeD(e)}>
              </input>
            </div>
            <div>
              <label>Medida C: </label>
              <input
              name="dobrazInterno_c" 
              type={'number'}
              onChange={e => handleChangeD(e)}>
              </input>
            </div>
            <div>
              <label>Espessura da chapa: </label>
              <input 
              type={'number'}
              name="dobrazInterno_espessura"
              onChange={e => handleChangeD(e)}>
              </input>
            </div>
          </form>
          <div className='botao'>
            <button
            className='btn btn-primary' 
            onClick={submitD}
            >
            CALCULAR
            </button>
          </div>
          <h4>RESULTADO: {valor4.dobrazInterno_resultado}</h4>
          </div>
          <div className='box'>
            <h3>DESENVOVIMENTO DE CALANDRA</h3>
            <Image className='img' src={desenvolvimento}></Image>
            <form>
            <div>
              <label>Medida A: </label>
              <input 
              name="desenvolvimento_a"
              type="number"
              onChange={e => handleChangeE(e)}>
              </input>
            </div>
            <div>
              <label>Medida B: </label>
              <input
              name="desenvolvimento_b" 
              type={'number'}
              onChange={e => handleChangeE(e)}>
              </input>
            </div>
            <div>
              <label>Medida C: </label>
              <input
              name="desenvolvimento_c" 
              type={'number'}
              onChange={e => handleChangeE(e)}>
              </input>
            </div>
            <div>
              <label>Medida D: </label>
              <input
              name="desenvolvimento_d" 
              type={'number'}
              onChange={e => handleChangeE(e)}>
              </input>
            </div>
            <div>
              <label>Espessura da chapa: </label>
              <input 
              type={'number'}
              name="desenvolvimento_espessura"
              onChange={e => handleChangeE(e)}>
              </input>
            </div>
          </form>
          <div className='botao'>
            <button
            className='btn btn-primary' 
            onClick={submitE}
            >
            CALCULAR
            </button>
          </div>
          <h4>RESULTADO: {valor5.desenvolvimento_resultado}</h4>
          </div>
      </main>
      </>
    )
}
