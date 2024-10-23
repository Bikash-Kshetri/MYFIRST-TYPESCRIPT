// const app = () => {
//   return app(
//     <>
//       <h1>Bikash Rayamajhi</h1>
//     </>
//   );
// };
// export default App;

type TCard = {
  name: string,
  age: number,
  address: string,
};
const Card = ({ name, age, address }: TCard) => {
  return (
    <div>
      <h1 className="bg-red-500">My name is {name}</h1>
      <h2>My age is {age}</h2>
      <h3>My address is {address}</h3>
      <h1>Bikash Rayamajhi </h1>
      <h4>BSc IT </h4>
     
    </div>
  );
};
export default Card;
