import { useEffect, useRef, useState } from "react";
import Hero from "~/components/invite/Hero";
import Countdown from "~/components/invite/Countdown";
import Welcome from "~/components/invite/Welcome";
import Venue from "~/components/invite/Venue";
import Schedule from "~/components/invite/Schedule";
import RSVP from "~/components/invite/RSVP";
import Footer from "~/components/invite/Footer";
import PhotoCarrousel from "~/components/invite/Carrousel";
import Divider from "~/components/invite/Divider";
import Story from "~/components/invite/Story";
import DressCode from "~/components/invite/DressCode";
import DetailsAndGifts from "~/components/invite/DetailsAndGifts";

export default function Invite() {
  const audioRef = useRef<HTMLAudioElement>(null);
  // Estado para saber si la música está activa o pausada
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true); // Si el navegador permite reproducir, actualizamos el estado
        })
        .catch((error) => {
          console.log("El autoplay fue bloqueado inicialmente:", error);
          setIsPlaying(false);
        });
    }
  }, []);

  // Función para alternar entre reproducir y pausar
  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.log("Error al reproducir:", err));
    }
  };

  return (
    <>    
      {/* Elemento de audio oculto */}
      <audio 
        ref={audioRef} 
        src="/assets/song-instrumental.mp3" 
        loop 
      />

      <main className="bg-ivory text-sage-dark relative">
        {/* no importa que arriba a la derecha debe haber como un toggle para cambiar de idioma de ingles a espanol por ahora solo quiero el toggle no la funcionalidad */}
        <Hero />
        {/* <Countdown /> */} 
        {/* mover countdown al hero */}
        {/* <Countdown targetDate="2026-12-27T15:00:00" /> */}
        <Divider />
        <Welcome />

        <Story />
        <PhotoCarrousel />
        <Venue />

        {/* anadir en venue detalles importantes como no alcohol LLEGUEN TEMPRANO. No telefonos en  */}

        
        {/* codigo de vestimenta  con link de inspiracion*/}
        <DressCode/>

        {/* confirmacion de asistencia con link a formulario */}
        {/* <Schedule /> */}
        <RSVP />

        {/* contacto */}

        {/* ath movil */}

        <DetailsAndGifts/>

        {/* galeria digital */}

        <Footer />

        {/* BOTÓN FLOTANTE FIJO (Abajo a la derecha) */}
        <button
          onClick={toggleAudio}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-white text-ivory shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
          aria-label={isPlaying ? "Mutear música" : "Escuchar música"}
          title={isPlaying ? "Pausar música" : "Reproducir música"}
        >
          {isPlaying ? (
            /* Icono de Sonido Activo (Ondas) */
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
            </svg>
          ) : (
            /* Icono de Sonido Silenciado (Mute con diagonal) */
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
            </svg>
          )}
        </button>
      </main>
    </>
  );
}