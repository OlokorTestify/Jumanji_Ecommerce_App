import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import ReactLoading from "react-loading";
import { getAllProducts } from "../../store/actions";
import history from "../../utils/history";
import Favorites from "../../assets/image/star.png";
import NewFavorites from "../../assets/image/green-star.png";
import "./style.css";

const Landing = () => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const { products } = useSelector((state) => state.product);

  const [renderedProducts, setRenderedProducts] = useState([]);

  const [clicked, setClicked] = useState(
    renderedProducts.map((element) => false),
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const response = await dispatch(getAllProducts());
        setRenderedProducts(response);
        setLoading(false);
      } catch (error) {
        if (error.message) {
          toast.error(error.message, {
            pauseOnHover: true,
            position: "bottom-right",
          });
          setLoading(false);
          return;
        }
        toast.error(error, {
          pauseOnHover: true,
          position: "top-center",
        });
        setLoading(false);
      }
    };
    getProducts();
  }, [dispatch]);

  const handleChange = (e, index) => {
    const newStatus = [...clicked];
    newStatus[index] = !clicked[index];
    setClicked(newStatus);
    e.stopPropagation();
  };

  const handleClick = (id) => {
    history.push(`/item/${id}`);
  };

  return (
    <section className="main">
      <Fade top>
        <div className="inputMain">
          <input
            className="input"
            type="text"
            placeholder="Search"
            onChange={(e) => {
              setSearch(e.target.value.toLowerCase());
            }}
          />
          <button
            className="button"
            onClick={() => {
              if (search === "") {
                setRenderedProducts(products);
              } else {
                const filteredProducts = products.filter((product) =>
                  product.name.toLowerCase().includes(search),
                );
                setRenderedProducts(filteredProducts);
              }
            }}
          >
            SEARCH
          </button>
        </div>
      </Fade>

      {loading && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ReactLoading
            type={"spokes"}
            color={"green"}
            height={100}
            width={100}
          />
        </div>
      )}

      {!loading && renderedProducts && (
        <section className="product_section">
          {renderedProducts.map((item, index) => {
            return (
              <div
                className="make3D"
                key={item.id}
                onClick={() => handleClick(item.id)}
              >
                <div className="product-front">
                  <div className="shadow">
                    <img src={item.image_url} alt="" />
                  </div>
                  <button
                    onClick={(e) => handleChange(e, index)}
                    className="button-image"
                  >
                    <img
                      src={clicked[index] ? NewFavorites : Favorites}
                      alt=""
                    ></img>
                  </button>
                  <div className="stats">
                    <div className="stats-container">
                      <p className="product_name">{item.name}</p>
                      <p className="product_category">
                        Category: {item.category}
                      </p>
                      <p className="product_price">
                        NGN {item.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      )}
    </section>
  );
};

export default Landing;
