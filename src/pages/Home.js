import axios from "../axios";
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import categories from "../categories";
import shops from "../shops";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../features/productSlice";
import ProductPreview from "../components/ProductPreview";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const lastProducts = products.slice(0, 8);
  useEffect(() => {
    axios.get("/products").then(({ data }) => dispatch(updateProducts(data)));
  }, []);
  return (
    <div>
      <img
        src=" https://res.cloudinary.com/learn-code-10/image/upload/v1653947013/yqajnhqf7usk56zkwqi5.png"
        className="home-banner"
        style={{ width: "100%" }}
      />
      <div className="featured-products-container container mt-4">
        <h2 style={{ textAlign: "center", fontFamily: "sans-serif" }}>
          New products
        </h2>
        {/* last products here */}
        <div className="d-flex justify-content-center flex-wrap">
          {lastProducts.map((product) => (
            <ProductPreview {...product} />
          ))}
        </div>
        <br />
        <br />
        <br />
        <div>
          <Link
            to="/category/all"
            style={{
              textAlign: "right",
              display: "block",
              textDecoration: "none",
            }}
          >
            See more {">>"}
          </Link>
        </div>
      </div>
      {/* sale banner */}
      <div className="sale__banner--container mt-4">
        <img src="https://www.blissworld.com/cdn/shop/files/Bliss_-_Homepage_Banner_-_Block_Star_2x_68dcc24a-389b-418b-a2bd-a6090d65ff05_1800x.jpg?v=1687292255" />
      </div>
      <div
        className="recent-products-container container mt-4"
        style={{ position: "relative", top: "150px" }}
      >
        <h2 style={{ textAlign: "center", fontFamily: "sans-serif" }}>
          Categories
        </h2>
        <Row>
          {categories.map((category) => (
            <LinkContainer
              to={`/category/${category.name.toLocaleLowerCase()}`}
            >
              <Col md={4}>
                <div
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.img})`,
                    gap: "10px",
                  }}
                  className="category-tile"
                >
                  {category.name}
                </div>
              </Col>
            </LinkContainer>
          ))}
        </Row>
      </div>

      <div
        className="sale__banner--container mt-4"
        style={{ position: "relative", top: "190px" }}
      >
        <video url="https://marketplace.canva.com/EAEMxeYdRN0/1/document_400w/canva-rose-et-beige-moderne-%C3%A9l%C3%A9gant-maquillage-beaut%C3%A9-youtube-intro-4yejppZ9t90.mp4"></video>
      </div>
      <br />
      <br />
      <h3 style={{ textAlign: "center", fontFamily: "sans-serif" }}>
        Some most consumed product
      </h3>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1607936854279-55e8a4c64888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1542144582-1ba00456b5e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRlbmlzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1590779033100-9f60a05a013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVndW1lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3JkaW5hdGV1cnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s.alicdn.com/@sc04/kf/H684ebf77c9d0466caf3a29972de03a178.jpg_480x480.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1591129841117-3adfd313e34f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2xhc3NldXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoYXVzc3VyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s.alicdn.com/@sc04/kf/A4d045fd360c341769e3d19771d52c7c0L.jpg_480x480.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRhYmxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1509330763532-3d47d138ec25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGx1bmV0dGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s.alicdn.com/@sc04/kf/U092f780b24fa41c2b66edf04e968e0fdj.jpg_480x480.jpg" />
        </SwiperSlide>
      </Swiper>

      <div
        className="recent-products-container container mt-4"
        style={{ position: "relative", top: "210px" }}
      >
        <h3 style={{ textAlign: "center", fontFamily: "sans-serif" }}>
          Your shops
        </h3>
        <Row>
          {shops.map((shop) => (
            <LinkContainer to={`/shop/${shop.name.toLocaleLowerCase()}`}>
              <Col md={4}>
                <div
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${shop.img})`,
                    gap: "10px",
                  }}
                  className="category-tile"
                >
                  {shop.name}
                </div>
                <p style={{ textAlign: "center", fontFamily: "sans-serif" }}>
                  {shop.descriptionBoutique}
                </p>
              </Col>
            </LinkContainer>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Home;
