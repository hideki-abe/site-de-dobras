'use client';
import { createContext } from 'react';
import Image from 'next/image'
import styles from './page.module.css'
import dobraz from '../public/dobra-z.png'
import React, { useEffect, useState } from "react";

export default function Home() {


 const valorInicial = {
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  resultado: 0
 }

 const [valor, setValor] = useState(valorInicial);

 function handleChange(event) {
  //console.log(event.target.value)
  //console.log(event.target.name)
  const { name, value } = event.target;

  setValor({...valor, [name]: value});
 }

  const submit = () => {
    const desconto = parseInt(valor.a) + parseInt(valor.b) + parseInt(valor.c) - parseInt(4*(valor.d))
    console.log(desconto)
    setValor({...valor, ["resultado"]: desconto})
  }

    return (
      <main style={{marginTop: '1em', marginLeft: '1em'}}>

        <h1>DOBRA Z</h1>
        <Image src={dobraz} style={{height:'200px', width:'300px'}}></Image>
        
        <form>
          <div>
            <label>Medida A: </label>
            <input 
            name="a"
            type="number"
            onChange={e => handleChange(e)}>
            </input>
          </div>
          <br></br>
          <div>
            <label>Medida B: </label>
            <input
            name="b" 
            type={'number'}
            onChange={e => handleChange(e)}>
            </input>
          </div>
          <br></br>
          <div>
            <label>Medida C: </label>
            <input
            name="c" 
            type={'number'}
            onChange={e => handleChange(e)}>
            </input>
          </div>
          <br></br>
          <div>
            <label>Espessura da chapa: </label>
            <input 
            type={'number'}
            name="d"
            onChange={e => handleChange(e)}>
            </input>
          </div>
        </form>
        <button 
        style={{marginTop: '1em'}}
        onClick={submit}
        >
        CALCULAR
        </button>
        <h2>RESULTADO: {valor.resultado}</h2>
      </main>
    )
}
