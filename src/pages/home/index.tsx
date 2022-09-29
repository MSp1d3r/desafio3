import React from 'react';
import Card from '../../components/card';

export default function HomePage() {
  const objeto_card = [
    {
      background: "bg-vermelho",
      titulo: "Titulo do Card",
      texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      background: "bg-roxo",
      titulo: "Titulo do Card",
      texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      background: "bg-verde",
      titulo: "Titulo do Card",
      texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      background: "bg-amarelo",
      titulo: "Titulo do Card",
      texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      background: "bg-azul",
      titulo: "Titulo do Card",
      texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      background: "bg-laranja",
      titulo: "Titulo do Card",
      texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
  ]

  return (
    <>
      <div className="flex w-full h-[560px] justify-center items-center bg-[#d7d5ff]">
        <div className="flex  w-[1240px]">
          <div className="flex flex-col w-[50%] justify-center gap-8">
            <h1 className="flex text-[36px] font-bold">Lorem ipsum dolor sit amet</h1>
            <p className="flex text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu massa sit amet augue consectetur ullamcorper non ac massa.</p>
            <button type="submit" className="flex flex-col w-[132px] h-[40px]  text-white text-[20px] bg-[#6c63ff] px-2 py-2 rounded ring-2 hover:text-black hover:font-bold hover:bg-[#63ecff] justify-center items-center">Botão</button>
          </div>
          <div className="flex w-[50%]] justify-end items-center">
            <img src="./src/assets/imagem.png" alt="" />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center items-center py-[100px]">
        <div className="flex w-[1240px] h-[560px] gap-24 flex-wrap">
          <div className="flex flex-row gap-10 flex-wrap">
            {objeto_card.map((item: any, index: number) => (
              <div className="flex" key={index}>
                <Card background={item.background} titulo={item.titulo} texto={item.texto} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="flex flex-row w-screen h-screen justify-center items-center">
        <div className="flex w-full h-[560px]  bg-[#d7d5ff] justify-center items-center">
          <div className="flex flex-col">
            <div className="flex flex-col  gap-8 justify-center items-center">
              <h1 className="flex text-[36px] mt-10 font-bold">Entre em Contato</h1>
              <form className="flex flex-col space-y-6 justify-center form-horizontal">
                <input type="text" className="flex w-[471px] px-1 py-2 border-2 rounded" placeholder="Nome" />
                <input type="email" className="flex w-[471px] px-1 py-2 border-2 rounded" placeholder="E-mail" />
                <input type="number" className="flex w-[471px] px-1 py-2 border-2 rounded" placeholder="Telefone" />
                <input type="message" className="flex w-[471px] h-[150px] px-1 py-2 border-2 rounded items-start justify-start" placeholder="Digite sua Mensagem" />
                <button type="submit" className="flex flex-col w-[471px] h-[45px]  text-white text-[20px] bg-[#6c63ff] px-1 py-1 rounded ring-2 hover:text-black hover:bg-[#63ecff] justify-center items-center">Enviar Mensagem</button>
              </form>
            </div>
          </div>
        </div>
      </footer>
      <div className="flex w-[100%] h-[100%] mt-[-235px] px-4 py-4 bg-[#d7d5ff] text-black-300 font-bold justify-center items-end">
        Todos Diretos Reservados
      </div>
    </>
  );
}
