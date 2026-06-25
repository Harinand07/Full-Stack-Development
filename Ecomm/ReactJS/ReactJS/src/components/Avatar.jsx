function Avatar({image,movie,year,name,age}) {

    // console.log(props);
    
  return (
    <div>
      <img src={image} alt="" />
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <h3>Movie Name: {movie}</h3>
      <p>Year: {year}</p>
      <button>Know More</button>
    </div>
  );
};
export default Avatar
