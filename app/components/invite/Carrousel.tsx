import { useEffect, useState } from "react";

const FOTOS_BODA = [
  "/assets/love-story/carrousel/Z61_9233.jpg",
  "/assets/love-story/carrousel/Z61_9248.jpg",
  "/assets/love-story/carrousel/Z61_9256.jpg",
  "/assets/love-story/carrousel/Z61_9391-Edit.jpg",
  "/assets/love-story/carrousel/Z62_2435.jpg",
  "/assets/love-story/carrousel/Z62_2492.jpg",
  "/assets/love-story/carrousel/Z62_2581.jpg",
  "/assets/love-story/carrousel/Z62_2686.jpg",
  "/assets/love-story/carrousel/Z62_2719.jpg",
];

export default function PhotoCarrousel() {
  return (
    <section className="py-24 bg-primary overflow-hidden select-none">
      
      {/* Contenedor principal que enmascara las fotos fuera de la pantalla */}
      <div className="relative w-full flex">
        
        {/* TIRA DE IMÁGENES ANIMADA (Doble grupo para el bucle infinito) */}
        {/* <div className="flex gap-6 animate-marquee whitespace-nowrap min-w-full"> */}
          <div className="flex flex-nowrap w-max gap-6 animate-marquee">
          {/* Grupo 1 */}
          {FOTOS_BODA.map((src, index) => (
            <div 
              key={`g1-${index}`} 
              className="w-[280px] md:w-[340px] aspect-[2/3] shrink-0 overflow-hidden rounded-xl shadow-md border border-[#e6ded2]/40 bg-gray-100"
            >
              <img
                src={src}
                alt={`Momento Sacha & Olivia ${index + 1}`}
                className="w-full h-full object-cover  transition-all duration-700 ease-in-out"
              />
            </div>
          ))}

          {/* Grupo 2 (Copia idéntica para rellenar el vacío mientras corre el primero) */}
          {FOTOS_BODA.map((src, index) => (
            <div 
              key={`g2-${index}`} 
              className="w-[280px] md:w-[340px] aspect-[2/3] shrink-0 overflow-hidden rounded-xl shadow-md border border-[#e6ded2]/40 bg-gray-100"
            >
              <img
                src={src}
                alt={`Momento Sacha & Olivia Copia ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}