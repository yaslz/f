import React from "react";
import { Alert, Carousel, Figure } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="https://images.ctfassets.net/cma41nsiygxr/4idB93ubA2z8r2yX8C76EL/0d2e0cc1fcaf599d51d54ea6cc4d07d6/banner_category_packaging_04_d.jpg"
            alt="pic "
          />
          <Carousel.Caption>
            <h3>Our services</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.blackthornsdesign.com/global/uploads/Totem.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Our services </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.digitalsyndrom.net/wp-content/uploads/2019/07/PANNEAU.jpg"
          alt="Second slide"
        />
      </Carousel>

      <Alert variant="success">
        <Alert.Heading>OUR CLIENTS</Alert.Heading>
        <p>
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that you can see how
          spacing within an alert works with this kind of content.
        </p>
        <hr />
        <Figure>
          <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src="https://www.biat.com.tn/sites/default/files/styles/thumb740x470/public/2022-10/biat.jpg?itok=LcWPmMpd"
          />
          <Figure.Caption>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </Figure.Caption>
        </Figure>
        <Figure>
          <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src="https://b2b.tn/files/2022/04/logo-saida.jpg"
          />
          <Figure.Caption>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </Figure.Caption>
        </Figure>
        <Figure>
          <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src="https://www.leaders.com.tn/uploads/FCK_files/Logo-MG1.jpg"
          />
          <Figure.Caption>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </Figure.Caption>
        </Figure>
      </Alert>

      <footer class="footer">
      <iframe
              width= "850" height="400" 
              src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Tunis+(lac%201)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <p class="text-muted">
                &copy; 2023 MyWebsite. All rights reserved.
              </p>
            </div>
            <div class="col-md-6">
              <ul class="list-inline footer-links">
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
