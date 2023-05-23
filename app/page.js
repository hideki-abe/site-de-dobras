'use client';
import { createContext } from 'react';
import Image from 'next/image'
import styles from './page.module.css'
import dobraz from '../public/dobra-z.png'
import dobrau from '../public/dobra-u.png'
import dobraaba from '../public/dobra-aba.png'
import dobrazInterno from '../public/dobra-z-interno.png'
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

 const [valor, setValor] = useState(valorInicialDobraZExterno)
 const [valor2, setValor2] = useState(valorInicialDobraAba)
 const [valor3, setValor3] = useState(valorInicialDobraU)

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

 const submitA = () => {
  const desconto = parseInt(valor.dobraz_a) + parseInt(valor.dobraz_b) + parseInt(valor.dobraz_c) - parseInt(4*(valor.dobraz_espessura))
  setValor({...valor, ["resultado"]: desconto})
}

const submitB = () => {
  const desconto = parseInt(valor2.aba_a) + parseInt(valor2.aba_b) + 
                    parseInt(valor2.aba_c) + parseInt(valor2.aba_d)  - parseInt(8*(valor2.aba_espessura))
  setValor2({...valor2, ["aba_resultado"]: desconto})
}

const submitC = () => {
  const desconto = parseInt(valor3.dobrau_a) + parseInt(valor3.dobrau_b) + 
                    parseInt(valor3.dobrau_c) - parseInt(4*(valor3.dobrau_espessura))
  setValor3({...valor3, ["dobrau_resultado"]: desconto})
}

const submitD = () => {
  const desconto = parseInt(valor.dobrazInterno_a) + parseInt(valor.dobrazInterno_b) + parseInt(valor.dobrazInterno_c) - parseInt(4*(valor.dobrazInterno_espessura))
  setValor({...valor4, ["dobrazInterno_resultado"]: desconto})
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
          <Image src={dobraz} style={{height:'200px', width:'300px'}}></Image>
          <form style={{marginTop: '20px'}}>
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
          <button 
          className='btn btn-primary'
          onClick={submitA}
          >
          CALCULAR
          </button>
          <h4>RESULTADO: {valor.resultado}</h4>
          </div>
          <div className='box'>
            <h3>DOBRA U COM ABA COM A, B, C E D EXTERNOS</h3>
            <Image src={dobraaba} style={{height:'230px', width:'300px'}}></Image>
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
          <button
          className='btn btn-primary' 
          onClick={submitB}
          >
          CALCULAR
          </button>
          <h4>RESULTADO: {valor2.aba_resultado}</h4>
          </div>
          <div className='box'>
            <h3>DOBRA U SEM ABA</h3>
            <Image src={dobrau} style={{height:'230px', width:'300px'}}></Image>
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
          <button
          className='btn btn-primary' 
          onClick={submitC}
          >
          CALCULAR
          </button>
          <h4>RESULTADO: {valor3.dobrau_resultado}</h4>
          </div>
          <div className='box'>
            <h3>DOBRA Z COM B INTERNO</h3>
            <Image src={dobrazInterno} style={{height:'230px', width:'300px'}}></Image>
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
          <button
          className='btn btn-primary' 
          onClick={submitC}
          >
          CALCULAR
          </button>
          <h4>RESULTADO: {valor3.dobrau_resultado}</h4>
          </div>
      </main>
      </>
    )
}
