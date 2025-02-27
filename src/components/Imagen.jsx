import "./styles/Main.css";

const alturas = [260, 153, 300];
const imgs = ["./img/260.jpg", "./img/153.jpg", "./img/300.jpg", "./img/400.jpg", "./img/230.jpg"];

const Imagen = () => {
  const indexRnd = Math.floor(Math.random() * imgs.length);
  const urlImg = imgs[indexRnd];
  const altura = alturas[indexRnd];
  return (
    <img className="Img"
      src={urlImg} alt="texto" width="220px" height={altura} /> );
  };

export default Imagen;
