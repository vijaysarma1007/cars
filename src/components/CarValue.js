import { useSelector } from "react-redux";
function CarValue() {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
    const filtererdCars = data.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    return filtererdCars.reduce((acc, car) => {
      return acc + car.cost;
    }, 0);
  });
  return <div className="car-value">Total Cost: ${totalCost}</div>;
}

export default CarValue;
