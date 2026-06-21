import Card from "./components/Card";
import Avatar from "./components/Avatar";

function App() {
  // var name = "love";
  // var id = 10;
  // var status = true;
  // var hobby = [1, 2, 3];
  // var fn = function () {
  //   return "hii";
  // };

  const styles = { color: "red", backgroundColor: "teal" };
  return (
    // jsx boundry
    <>
      <Avatar
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaul3GBO7jkalmJeCsm7v5gYdh_7GMBnfgs-jmFNvN3K-bMd8Pw3Fdoh_bXwsZ6BwMTzegzu5vJpB_JJoWBFwhI4V3aQzhX3Zx8063Oje5ew&s=10"
        name="Salman Khan"
        age={60}
        movie="ek tha tiger"
        year={2012}
      />

      <Avatar
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9C8VCVM5RO2Wf31c3zOHjC_weKT815bRGCjf6KfFyH42a9TDigGyMua7MBpTtQTODH_sSIFGIniKSbzFQt-UPsEF0RCccT9p0OK7DguVV&s=10"
        name="sharukh Khan"
        age={50}
        movie="pathaan"
        year={2023}
      />
      {/* <div className="">
        <h1>Hello world</h1>
        <Card />
                <Card />
        <br />
      </div>
      <h1 style={styles}>{name}</h1>
      <h2>{id}</h2>
      <h3>{status ? "yes" : "no"}</h3>
      <h4>{hobby[1]}</h4>
      <p>{fn()}</p> */}
    </>
    // jsx boundry
  );
}

export default App;
