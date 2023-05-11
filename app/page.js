'use client';
import { createContext } from 'react';
import Image from 'next/image'
import styles from './page.module.css'
import dobraz from '../public/dobra-z.png'
import dobrau from '../public/dobra-u.png'
import dobraaba from '../public/dobra-aba.png'
import React, { useEffect, useState } from "react";

export default function Home() {


 const valorInicialDobraUOuZ = {
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  resultado: 0
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

 const [valor, setValor] = useState(valorInicialDobraUOuZ)
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
  const desconto = parseInt(valor.a) + parseInt(valor.b) + parseInt(valor.c) - parseInt(4*(valor.d))
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
  setValor3({...valor2, ["aba_resultado"]: desconto})
}

    return (
      <main style={{marginTop: '3em', marginLeft: '1em'}}>
        <div className='box'>
          <h2>DOBRA Z OU U</h2>
          <Image src={dobraz} style={{height:'200px', width:'300px'}}></Image>
          <form style={{marginTop: '20px'}}>
            <div>
              <label>Medida A: </label>
              <input 
              name="a"
              type="number"
              onChange={e => handleChangeA(e)}>
              </input>
            </div>
            <br></br>
            <div>
              <label>Medida B: </label>
              <input
              name="b" 
              type={'number'}
              onChange={e => handleChangeA(e)}>
              </input>
            </div>
            <br></br>
            <div>
              <label>Medida C: </label>
              <input
              name="c" 
              type={'number'}
              onChange={e => handleChangeA(e)}>
              </input>
            </div>
            <br></br>
            <div>
              <label>Espessura da chapa: </label>
              <input 
              type={'number'}
              name="d"
              onChange={e => handleChangeA(e)}>
              </input>
            </div>
          </form>
          <button 
          style={{marginTop: '1em'}}
          onClick={submitA}
          >
          CALCULAR
          </button>
          <h2>RESULTADO: {valor.resultado}</h2>
          </div>
          <div className='box'>
            <h2>DOBRA U COM ABA</h2>
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
            <br></br>
            <div>
              <label>Medida B: </label>
              <input
              name="aba_b" 
              type={'number'}
              onChange={e => handleChangeB(e)}>
              </input>
            </div>
            <br></br>
            <div>
              <label>Medida C: </label>
              <input
              name="aba_c" 
              type={'number'}
              onChange={e => handleChangeB(e)}>
              </input>
            </div>
            <br></br>
            <div>
              <label>Medida D: </label>
              <input
              name="aba_d" 
              type={'number'}
              onChange={e => handleChangeB(e)}>
              </input>
            </div>
            <br></br>
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
          style={{marginTop: '1em'}}
          onClick={submitB}
          >
          CALCULAR
          </button>
          <h2 style={{marginBottom: '2em'}}>RESULTADO: {valor2.aba_resultado}</h2>
          </div>
          <div className='box'>
            <h2>DOBRA U SEM ABA</h2>
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
            <br></br>
            <div>
              <label>Medida B: </label>
              <input
              name="dobrau_b" 
              type={'number'}
              onChange={e => handleChangeC(e)}>
              </input>
            </div>
            <br></br>
            <div>
              <label>Medida C: </label>
              <input
              name="dobrau_c" 
              type={'number'}
              onChange={e => handleChangeC(e)}>
              </input>
            </div>
            <br></br>
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
          style={{marginTop: '1em'}}
          onClick={submitC}
          >
          CALCULAR
          </button>
          <h2 style={{marginBottom: '2em'}}>RESULTADO: {valor3.dobrau_resultado}</h2>
          </div>
      </main>
    )
}
