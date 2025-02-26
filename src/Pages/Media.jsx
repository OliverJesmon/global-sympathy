
import './Media.css'
// Image array excluding First.jpg & 1.jpg
const images = [
         'https://res.cloudinary.com/dtoatvbkq/image/upload/v1740575980/2_fnl1w9.jpg',
         'https://res.cloudinary.com/dtoatvbkq/image/upload/v1740575973/3_iqes2j.jpg',
         'https://res.cloudinary.com/dtoatvbkq/image/upload/v1740575975/4_mo5f8v.jpg',
         'https://res.cloudinary.com/dtoatvbkq/image/upload/v1740575977/5_ai3awz.jpg',
         'https://res.cloudinary.com/dtoatvbkq/image/upload/v1740576029/6_knhfkm.jpg',
         'https://res.cloudinary.com/dtoatvbkq/image/upload/v1740576028/7_o4852s.jpg',
         'https://res.cloudinary.com/dtoatvbkq/image/upload/v1740576030/8_zbyl7m.jpg',
         'https://res.cloudinary.com/dtoatvbkq/image/upload/v1740576032/9_fnfgt0.jpg',
         'https://res.cloudinary.com/dtoatvbkq/image/upload/v1740576031/10_tetcag.jpg',
         'https://res.cloudinary.com/dtoatvbkq/image/upload/v1740576033/11_etcmh5.jpg',
         'https://res.cloudinary.com/dtoatvbkq/image/upload/v1740576109/12_mdurxd.jpg',
         'https://res.cloudinary.com/dtoatvbkq/image/upload/v1740576110/13_ut1ged.jpg',
         'https://res.cloudinary.com/dtoatvbkq/image/upload/v1740576113/14_x2vizi.jpg',
         'https://res.cloudinary.com/dtoatvbkq/image/upload/v1740576115/15_fihdts.jpg',
         'https://res.cloudinary.com/dtoatvbkq/image/upload/v1740576116/16_yyoqts.jpg',
         'https://res.cloudinary.com/dtoatvbkq/image/upload/v1740576118/17_r1xynx.jpg'];

const Media = () => {
  return (
    <>
    <div className="newspaper-container">

      {/* First row */}
      <div className="first-row">
        <img src='https://res.cloudinary.com/dtoatvbkq/image/upload/v1740576356/First_z8qs5e.jpg' alt="Newspaper Clip First" className="first-image" />
        <img src='https://res.cloudinary.com/dtoatvbkq/image/upload/v1740575712/1_ogq9xu.jpg' alt="Newspaper Clip 1" className="first-image" />
      </div>
      <div>
      </div>
      {/* Grid layout */}
      <div className="newspaper-grid">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Newspaper Clip ${index + 2}`}
            className="newspaper-image"
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default Media;
