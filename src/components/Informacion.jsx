import Teoria from "./Teoria";

const Informacion = () => {
  //aqui agrego la mayor parte de logica
  return (
    //se puede agregar algo de logica aqui, pero poca
    <section>
      {/*aqui agrego comentario del maquetado puede haber algo de logica, pero es html*/}
      <h2>Introducción a React </h2>
      <p>
        React es una biblioteca de JavaScript desarrollada por Facebook para
        construir interfaces de usuario. Se destaca por su enfoque en la
        creación de aplicaciones web de una sola página SPA y su capacidad para
        manejar la interfaz de manera eficiente mediante el uso de un DOM
        virtual. React permite a los desarrolladores construir interfaces
        dinámicas y reactivas de forma modular, lo que facilita el desarrollo y
        el mantenimiento de aplicaciones a gran escala.React es una biblioteca
        de JavaScript desarrollada por Facebook para construir interfaces de
        usuario. Se destaca por su enfoque en la creación de aplicaciones web de
        una sola <strong>página SPA</strong> y su capacidad para manejar la interfaz de manera
        eficiente mediante el uso de un <span className="parrafoResaltado">DOM virtual</span>. React permite a los
        desarrolladores construir interfaces dinámicas y reactivas de forma
        modular, lo que facilita el desarrollo y el mantenimiento de
        aplicaciones a gran escala.React es una biblioteca de JavaScript
        desarrollada por Facebook para construir interfaces de usuario. Se
        destaca por su enfoque en la creación de aplicaciones web de una sola
        página SPA y su capacidad para manejar la interfaz de manera eficiente
        mediante el uso de un DOM virtual. React permite a los desarrolladores
        construir interfaces dinámicas y reactivas de forma modular, lo que
        facilita el desarrollo y el mantenimiento de aplicaciones a gran escala.
      </p>
    <Teoria></Teoria>
    </section>
  );
};

export default Informacion;
