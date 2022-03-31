import CityCard from "./components/CityCard";
import Header from "./components/Header";
import Input from "./components/Input";
import Layout from "./components/layout/Layout";
import ListContainer from "./components/ListContainer";

function App() {
  const displayedCity = [
    {
      name: "Ha noi",
      timeZone: "+7",
    },
    {
      name: "Ho Chi Minh",
      timeZone: "+7",
    },
  ];

  return (
    <Layout>
      <Header />
      <Input />

      <ListContainer>
        {displayedCity.map((city) => {
          return <CityCard cityName={city.name} cityTimeZone={city.timeZone} />;
        })}
      </ListContainer>
    </Layout>
  );
}

export default App;
