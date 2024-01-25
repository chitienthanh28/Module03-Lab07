import { useAppSelector } from "./hook";

const ShoppingCartPage = () => {
  const dataProducts = useAppSelector((state) => state.shopping);
	console.log("data", dataProducts)
  return (
    <>
      <div>
        {dataProducts?.map((item) => {
          return (
            <div key={item.id}>
              <img id="img01" src={item.imgSrc} alt="" />
              <br />
              
             <img
                id="img02"
                src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png"
                alt=""
              /> <br />
              <span>{item.name}</span>
              <br />
              <span>{item.price}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ShoppingCartPage;
