import datas from '../../assets/datas.json';

function Banner() {
  return (
    <section id="banner">
      <div className="image">
        <div className="img-maelle"></div>
      </div>

      <div>
        <h1>Maëlle Nioche</h1>
        <strong>{datas.job}</strong>
      </div>
    </section>
  );
}

export default Banner;
