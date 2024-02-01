import './Banner.css';
import MyPhoto from '../../../../assets/images/16990274875310.jpg';

function Banner() {
  return (
    <section className="banner">
      <div className="image">
        <img src={MyPhoto} alt="" className="img-maelle" />
      </div>

      <div>
        <h1>Maëlle Nioche</h1>
        <strong>Développeuse web</strong>
      </div>
    </section>
  );
}

export default Banner;
