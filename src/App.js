import React from "react";
import Navbar from "../src/components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import { Testimonio } from "./components/Testimonio";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div>
        <h1>Testimonios de Programadores</h1>
        <Testimonio
          nombre="Sam"
          pais="Suecia"
          imagen="img1"
          cargo="Ingeniero de Software"
          empresa=" Spotify"
          testimonio="Mi experiencia en Spotify, donde pude aplicar mis habilidades en React, ha sido un verdadero punto de transformación en mi carrera. Colaborar con Laura Jones fue un privilegio; su maestría en React y su capacidad para transmitir conocimientos me impulsaron hacia niveles inexplorados. Gracias a su orientación, no solo profundicé mi comprensión de React, sino que también conseguí el trabajo que siempre anhelé. En mi libro, Laura encarna a la perfección la mentoría inspiradora."
        />
        <Testimonio
          nombre="Daniel Ramirez"
          pais="Argentina"
          imagen="img2"
          cargo="Ingeniero de Software"
          empresa=" Apple"
          testimonio="Mi travesía en Apple fue como un emocionante viaje hacia el futuro tecnológico. Como ingeniero en hardware, pude presenciar de cerca la innovación en acción. Trabajar junto a equipos apasionados, como el de Laura Jones, ingeniera en software, fue esencial para lograr productos icónicos. La colaboración entre expertos como Laura y yo realmente encarna el espíritu de la creatividad y la excelencia que define a Apple"
        />
        <Testimonio
          nombre=" Emily Chen"
          pais="Brasil"
          imagen="img3"
          cargo="Senior Frontend"
          empresa="Google "
          testimonio="Mi paso por Google marcó el inicio de mi camino hacia lo desconocido. Trabajar en un entorno donde la excelencia es la norma me llevó a buscar desafíos más allá. La influencia de colegas como Laura Jones, ingeniera en software, fue vital. Juntas enfrentamos proyectos audaces, como integrar tecnologías AI en servicios clave. En retrospectiva, mi tiempo en Google, junto a mentores como Laura, forjó mi tenacidad para explorar lo inexplorado"
        />
        <Testimonio
          nombre="Luisa Anderson"
          pais="Chile"
          imagen="img4"
          cargo="Ingeniera en Software"
          empresa="Amazon "
          testimonio="Amazon siempre representó más que una empresa para mí; fue una escuela de innovación y crecimiento continuo. Como líder en el equipo de logística, tuve el privilegio de cruzarme con mentes brillantes como la de Laura Jones, ingeniera en software. Colaboramos para mejorar la eficiencia de las operaciones, donde su dominio tecnológico dejó una huella imborrable. Amazon no solo nos reunió, sino que nos inspiró a elevar constantemente la barra de la excelencia."
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
