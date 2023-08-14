import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "rgb(202, 197, 197)",
        marginTop: "15%",
        fontFamily: "sans-serif",
      }}
      expand="lg"
    >
      <Row>
        <Col style={{ marginTop: "5%" }}>
          <div className="footer-box-left">
            <div className="left-item1">
              <p>Trouver un magasin</p>
              <p>S'inscrire aux emails</p>
              <p>Réductions</p>
              <p>Commentaires</p>
            </div>
            <div className="left-item2">
              <p id="uppercase">Aide</p>
              <p id="grey-color">Status de commande</p>
              <p id="grey-color">Expédition et livraison</p>
              <p id="grey-color">Mode de paiement</p>
              <p id="grey-color">Nous contacter</p>
            </div>
          </div>
        </Col>

        <Col style={{ marginTop: "5%" }}>
          <div className="left-item3">
            <p id="uppercase">à propos de JordyMarketPlace</p>
            <p id="grey-color">Actualités</p>
            <p id="grey-color">Carrières</p>
          </div>
        </Col>

        <Col style={{ marginTop: "5%" }}>
          <div className="footer-content-bottom">
            <div className="utils">
              <p>Guides</p>
              <p>Conditions d'utilisation</p>
              <p>Conditions générales de la vente</p>
              <p>Mentions légales</p>
            </div>
            <div className="second-utils">
              <div className="second-utils-left">
                <p>France</p>
                <p id="date">2023 JordyMarketPlace, Inc. Tout droit réservés</p>
              </div>
              <div className="second-utils-right">
                <p>Politiques en matière de confidentialité et de cookies</p>
                <p id="cookie">Paramètres des cookies</p>
              </div>
              <div></div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
