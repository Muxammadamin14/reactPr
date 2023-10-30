import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

type Product = {
  id: string;
  image: string;
  name: string;
  category: string;
  weight: string;
  price: string;
};

const Details = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1); // Initialize quantity with 1

  let param = useParams();

  const fetchData = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/products/${param.id}`);
      setAllProducts([res.data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const increaseQuantity = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className=" mt-20  ">
      <section className=" bg-bgHeader">
        {allProducts.map((el) => {
          return (
            <div
              key={el.id}
              className="container mx-auto pt-10 flex items-center gap-16"
            >
              <div>
                <img
                  src={el.image}
                  alt=""
                  style={{ width: "630px", height: "647px" }}
                />
              </div>
              <div>
                <p className="text-3xl pb-3 text-textColor font-medium">
                  {el.name}
                </p>
                <p className=" pb-10 text-textColor2">{el.category}</p>
                <p
                  className=" pb-10 text-textColor"
                  style={{ maxWidth: "274px" }}
                >
                  Увлажняющий крем идеально подходит для повседневного ухода за
                  молодой кожей. <br /> Крем равномерно распределяется по
                  поверхности благодаря легкой текстуре, обеспечивает глубокое
                  увлажнение, регенерацию клеток.{" "}
                </p>
                <span
                  className="block bg-textColor2 w-full"
                  style={{ height: "1px", width: "370px" }}
                ></span>
                <div>
                  <div className="flex justify-between  py-4">
                    <p className="text-lg font-medium text-textColor">Состав</p>
                    <img src="/image37.svg" alt="" />
                  </div>
                </div>
                <span
                  className="block bg-textColor2 w-full"
                  style={{ height: "1px", width: "370px" }}
                ></span>
                <div>
                  <div className="flex justify-between  py-4">
                    <p className="text-lg font-medium text-textColor">
                      Способ применения
                    </p>
                    <img src="/image37.svg" alt="" />
                  </div>
                </div>
                <span
                  className="block bg-textColor2 w-full"
                  style={{ height: "1px", width: "370px" }}
                ></span>
                <div className="flex justify-between  py-5">
                  <p className="text-2xl  font-medium text-textColor">
                    {el.price * quantity} P
                  </p>
                  <div className="flex gap-2">
                    <button
                      className="rounded-sm px-4 py-2 text-textColor font-medium"
                      style={{ border: "1px solid #B3BAC1" }}
                      onClick={decreaseQuantity}
                    >
                      -
                    </button>
                    <span className="text-textColor">{quantity}</span>
                    <button
                      className="rounded-sm px-4 py-2 text-textColor font-medium"
                      style={{ border: "1px solid #B3BAC1" }}
                      onClick={increaseQuantity}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="rounded-sm px-6 py-3 text-textColor font-medium"
                    style={{ border: "1px solid #B3BAC1" }}
                  >
                    Добавить в корзину
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      {/* Rest of the code */}
    </div>
  );
};

export default Details;
