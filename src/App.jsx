import "bootstrap/dist/css/bootstrap.min.css";
import Informacion from "./components/Informacion";
import Contador from "./components/Contador";

function App() {
  return (
    <main className="container my-4">
      <h1 className="text-center">Primer Proyecto React</h1>
      <p>
        Lorem ipsum dolor, sit amet <br></br> consectetur adipisicing elit. Ipsa
        dolore illo minima nisi consequatur
        <br /> similique nesciunt, voluptates ratione! Recusandae reprehenderit
        laudantium laborum, atque facilis, consectetur quidem reiciendis
        repellat voluptas dicta necessitatibus sapiente cupiditate assumenda
        ullam accusantium temporibus fuga ea eligendi ipsam aspernatur! Rerum
        accusantium asperiores iusto molestiae quos iste reiciendis.
      </p>
      {/*aqui invoco a los componentes para poder usarlos, se hace como etiqueta html */}
      <Informacion></Informacion>
      <Contador></Contador>
    </main>
  );
}

export default App;
