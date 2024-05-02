import './App.css';
import Titulo from './components/Titulo/Titulo';
import Subtitulo from './components/Subtitulo/Subtitulo';
import Card from './components/Card/Card';
import FormCItas from './components/FormCitas/FormCitas';

function App() {
  return (
    <>
      <Titulo></Titulo>
      <div class="container">
        <div class="row">
          <div class="one-half column">
            <Subtitulo nombre='CREAR MI CITA'></Subtitulo>
            <FormCItas></FormCItas>
          </div>
          <div class="one-half column">
            <Subtitulo nombre='ADMINISTRA TUS CITAS'></Subtitulo>
            <Card
              mascota="Nina"
              dueño="Martin"
              fecha="2021-08-05"
              hora="08:20"
              sintomas="Le duele la pierna"
            />
            <Card
              mascota=" Sifon"

              dueño="Flecha"

              fecha="2023-08-05"

              hora="09:24"

              Sintomas="Duerme mucho"
            />

            <Card
              mascota="Floki"

              dueño="Ari"

              fecha="2023-08-05"
              hora="16:15"

              sintomas="No está comiendo"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
