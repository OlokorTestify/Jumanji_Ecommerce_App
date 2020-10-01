import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";
import { useSelector, useDispatch } from "react-redux";
import dayjs from "dayjs";
import history from "../../utils/history";
import { getProduct } from "../../store/actions";
import "./style.css";

const DashboardLanding = (props) => {
  const dispatch = useDispatch();
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [messageLoading, setMessageLoading] = useState(false);
  const [messageState, setMessageState] = useState("messageButton");
  const [contact, setContact] = useState(false);
  const [number, setNumber] = useState(false);
  const { product } = useSelector((state) => state.product);

  useEffect(() => {
    const getOneProduct = async () => {
      try {
        setLoading(true);
        await dispatch(getProduct(params.id));
        setLoading(false);
      } catch (error) {
        if (error.message) {
          toast.error(error.message);
          setLoading(false);
          return;
        }
        toast.error(error);
        setLoading(false);
      }
    };
    getOneProduct();
  }, [dispatch, params.id]);

  const handleChange = (e) => {
    setMessageState("messageInput");
  };
  const handleClick = (e) => {
    setContact(!contact);
    e.stopPropagation();
  };

  const onClick = (e) => {
    setNumber(!number);
    e.stopPropagation();
  };
  return (
    <>
      {loading && (
        <ReactLoading type={"spokes"} color="green" height={30} width={30} />
      )}
      {!loading && product && (
        <div className="dashboard-flex">
          <div className="item">
            <div>
              <img src={product.image_url} alt="" />
            </div>
            <div className="stat_container">
              <div>
                <h2>{product.name}</h2>
              </div>
              <div className="statistics">
                <p className="date">
                  {dayjs(product.createdAt).format("D MMM YYYY")} {"  "}{" "}
                  {dayjs(product.createdAt).format("h:mm:ss a")}
                </p>
                <p>{product.address}</p>
              </div>
              <div>
                <div>
                  <h2>Description</h2>
                  <p>{product.description}</p>
                </div>
                <button onClick={onClick} className="phoneButton">
                  {number ? product.contact : "SHOW CONTACT"}
                </button>
              </div>
            </div>
          </div>
          <div className="seller-profile">
            <div className="mainDiv">
              <div className="item_price">
                <p>NGN {product.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
              </div>
              <div className="flex-card">
                <div className="profileImg">
                  <img
                    src={
                      product.owner.image_url
                        ? product.owner.image_url
                        : "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
                    }
                    alt=""
                  />
                </div>
                <div className="userName">
                  <h3>
                    {product.owner.first_name} {product.owner.last_name}
                  </h3>
                </div>
                <div className="phone">
                  <button onClick={handleClick} className="itemPhone">
                    {contact ? product.contact : "SHOW CONTACT"}
                  </button>
                </div>
                <div className="phone">
                  {messageState === "messageInput" && (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setMessageLoading(true);
                        setTimeout(() => {
                          setMessageState("messageFeedback");
                        }, 1200);
                        setMessageLoading(false);
                      }}
                    >
                      <textarea
                        className="textArea"
                        placeholder="Enter message here..."
                        rows="4"
                        cols="50"
                        name="comment"
                        required
                      ></textarea>
                      <button className="submitMessage">
                        {messageLoading ? (
                          <ReactLoading
                            type={"spokes"}
                            color="green"
                            height={30}
                            width={30}
                          />
                        ) : (
                          "SUBMIT"
                        )}
                      </button>
                    </form>
                  )}
                  {messageState === "messageButton" && (
                    <button onClick={handleChange} className="message">
                      Leave a message
                    </button>
                  )}
                  {messageState === "messageFeedback" && (
                    <p>Message sent successfully</p>
                  )}
                </div>
              </div>
            </div>
            <div className="break"></div>
            <div className="boxShadow">
              <div className="safetyTips">
                <h3>Safety Tips</h3>
                <ul>
                  <li>Do not pay in advance even for the delivery</li>
                  <li>Try to meet at a safe, public location</li>
                  <li>Check the item BEFORE you buy it</li>
                  <li>Pay only after collecting the item</li>
                </ul>
                <div>
                  <button className="button">Report Abuse</button>
                </div>
              </div>
            </div>
            <div className="break"></div>
            <div className="postAd">
              <button
                className="add"
                onClick={() => {
                  !props.isLoggedIn
                    ? props.openModal("login")
                    : history.push("/add_product");
                }}
              >
                Post Product Like This
              </button>
            </div>
          </div>
        </div>
      )}
      ,
    </>
  );
};

export default DashboardLanding;
