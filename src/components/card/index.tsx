/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-useless-fragment */
import * as React from 'react';

export interface CardProps {
  background: string;
  titulo: string;
  texto: string;
}

export default function Card(props: CardProps) {
  return (
    <>
      <div className="flex flex-col w-[340px] bg-white shadow-md rounded-md overflow-hidden">
        <div className={`flex w-ful h-[222px] justify-center items-center  ${props.background}`} />
        <div className="flex w-full text-[#2b2b2b] font-bold text-[24px] p-5">
          {props.titulo}
        </div>
        <div className="flex w-full text-[#2b2b2b] text-[16px] pt-0 p-5 pb-10">
          {props.texto}
        </div>
      </div>
    </>
  );
}
