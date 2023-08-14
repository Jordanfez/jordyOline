import React, { useState } from "react";
import { Alert, Col, Container, Form, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCreateProductMutation } from "../services/appApi";
import axios from "../axios";
import "./NewProduct.css";

function NewProduct() {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [shop, setShop] = useState("");
  const [images, setImages] = useState([]);
  const [imgToRemove, setImgToRemove] = useState(null);
  const navigate = useNavigate();
  const [createProduct, { isError, error, isLoading, isSuccess }] =
    useCreateProductMutation();

  function handleRemoveImg(imgObj) {
    setImgToRemove(imgObj.public_id);
    axios
      .delete(`/images/${imgObj.public_id}/`)
      .then((res) => {
        setImgToRemove(null);
        setImages((prev) =>
          prev.filter((img) => img.public_id !== imgObj.public_id)
        );
      })
      .catch((e) => console.log(e));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !name ||
      !description ||
      !price ||
      !category ||
      !shop ||
      !images.length
    ) {
      return alert("Please fill out all the fields");
    }
    createProduct({ name, description, price, category, shop, images }).then(
      ({ data }) => {
        if (data.length > 0) {
          setTimeout(() => {
            navigate("/");
          }, 1500);
        }
      }
    );
  }

  function showWidget() {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "diluthhyx",
        uploadPreset: "g9k7vqef",
      },
      (error, result) => {
        if (!error && result.event === "success") {
          setImages((prev) => [
            ...prev,
            { url: result.info.url, public_id: result.info.public_id },
          ]);
        }
      }
    );
    widget.open();
  }

  return (
    <Container>
      <Row>
        <Col md={6} className="new-product__form--container">
          <Form
            style={{ width: "100%", fontFamily: "sans-serif" }}
            onSubmit={handleSubmit}
          >
            <h1 className="mt-4" style={{ marginBottom: "5%" }}>
              Create a product
            </h1>
            {isSuccess && (
              <Alert variant="success">Product created with succcess</Alert>
            )}
            {isError && <Alert variant="danger">{error.data}</Alert>}
            <Form.Group className="mb-3">
              <Form.Label class="form-label" style={{ marginLeft: "-83%" }}>
                Product name
              </Form.Label>
              <Form.Control
                class="form-control"
                type="text"
                placeholder="Enter product name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ marginLeft: "-78%" }}>
                Product description
              </Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Product description"
                style={{ height: "100px" }}
                value={description}
                required
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ marginLeft: "-90%" }}>Price($)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Price ($)"
                value={price}
                required
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              onChange={(e) => setCategory(e.target.value)}
            >
              <Form.Label style={{ marginLeft: "-89%" }}>Category</Form.Label>
              <Form.Select>
                <option disabled selected>
                  -- Select One --
                </option>
                <option value="technology">technology</option>
                <option value="tablets">tablets</option>
                <option value="phones">phones</option>
                <option value="shoe">Shoe</option>
                <option value="shirt">Shirt</option>
                <option value="house">House</option>
                <option value="laptops">laptops</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">
                  See the list of shops and create or select null to not create
                  a shop
                </label>
                <div className="col-sm-2 mt-2">
                  Yes{" "}
                  <input
                    type="radio"
                    className="mx-2"
                    name="isyes"
                    value="1"
                    onClick={() => setVisible(true)}
                  />
                </div>
              </div>
            </Form.Group>

            <Form.Group
              className="mb-3"
              onChange={(e) => setShop(e.target.value)}
            >
              {visible && (
                <div className="form-group row">
                  <Form.Label
                    style={{ marginLeft: "-7%" }}
                    className="col-sm-3 col-form-label"
                  >
                    Shop
                  </Form.Label>
                  <div>
                    <Form.Select>
                      <option disabled selected>
                        -- Select One --
                      </option>
                      <option value="null">null</option>
                      <option value="nike">nike</option>
                      <option value="apple">apple</option>
                      <option value="placemaket">placemaket</option>
                      <option value="labossue">labossue</option>
                      <option value="automobilestore">automobilestore</option>
                      <option value="tecno">tecno</option>
                    </Form.Select>
                  </div>
                </div>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Button type="button" onClick={showWidget}>
                Upload Images
              </Button>
              <div className="images-preview-container">
                {images.map((image) => (
                  <div className="image-preview">
                    <img src={image.url} />
                    {imgToRemove != image.public_id && (
                      <i
                        className="fa fa-times-circle"
                        onClick={() => handleRemoveImg(image)}
                      ></i>
                    )}
                  </div>
                ))}
              </div>
            </Form.Group>

            <Form.Group class="d-grid gap-2">
              <Button
                class="btn btn-primary"
                type="submit"
                disabled={isLoading || isSuccess}
              >
                Create Product
              </Button>
            </Form.Group>
          </Form>
        </Col>
        <Col md={6} className="new-product__image--container"></Col>
      </Row>
    </Container>
  );
}

export default NewProduct;
