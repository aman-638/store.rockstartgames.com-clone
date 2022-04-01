import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MyCard } from "../MiniCompo/Card";
import { useEffect, useState } from "react";
import axios from "axios";

const NewArrivalDiv = styled.div`
  width: 85%;
  /* border: 1px solid white; */
  margin: auto;
  margin-top: 80px;
  margin-bottom: 80px;
`;

const HomeGames = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://obscure-citadel-15133.herokuapp.com/games")
      .then((res) => {
        // console.log(res.data.games);
        setProducts(res.data.games);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <NewArrivalDiv>
        <h1
          style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "30px" }}
        >
          Games
        </h1>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={99999999999999999}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 4,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 3,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {products.map((product) => {
            return (
              <MyCard
                key={product._id}
                img={product.heroimg}
                title={product.name}
                price={"€" + product.price}
              />
            );
          })}
        </Carousel>
      </NewArrivalDiv>
    </div>
  );
};

export { HomeGames };
