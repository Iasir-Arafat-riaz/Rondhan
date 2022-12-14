import Image from "next/image";
import React from "react";

import testim1 from "../../styles/images/testimonial/feedback1.jpg";
import testim2 from "../../styles/images/testimonial/feedback2.jpg";
import testim3 from "../../styles/images/testimonial/feedback3.jpg";
import { Carousel } from "react-bootstrap";
import Link from "next/link";

const Testimonial = () => {
  return (
    <section className="testimonial-one">
      {/* <div className="testimonial-one-bg"></div> */}
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-5">
            <div className="testimonial-one__left">
              <div className="section-title text-left">
                {/* <span className="section-title__tagline">
                  Our Customers Feedbacks
                </span> */}
                <span className="section-title__tagline">FEEDBACK</span>
              </div>
              <p className="testimonial-one__text-1">
                Proin a lacus arcu. Nullam id dui eu orci maximus. Cras at
                auctor lectus, pretium tellus.
              </p>
              <Link href="/about/whoWeAre">
                <a className="thm-btn testimonial-one__btn">
                  View All Feedbacks
                </a>
              </Link>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7">
            <div className="testimonial-one__right">
              {/* Testimonial One People */}
              {/* <div className="testimonial-one__people">
                <Image src={testiImg1} alt="img" />
              </div>
              <div className="testimonial-one__people testimonial-one__people-2">
                <Image src={testiImg2} alt="img" />
              </div>
              <div className="testimonial-one__people testimonial-one__people-3">
                <Image src={testiImg3} alt="img" />
              </div>
              <div className="testimonial-one__people testimonial-one__people-4">
                <Image src={testiImg4} alt="img" />
              </div>
              <div className="testimonial-one__people testimonial-one__people-5">
                <Image src={testiImg5} alt="img" />
              </div>
              <div className="testimonial-one__people testimonial-one__people-6">
                <Image src={testiImg6} alt="img" />
              </div> */}

              <Carousel className="  testimonial-one__carousel shadow-lg">
                {/* Testimonial One Single */}
                <Carousel.Item className="testimonial-one__single  ">
                  <div className="testimonial-one__feedback-box">
                    <div className="testimonial-one__feedback">
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                    </div>
                    <h3 className="testimonial-one__title">
                      I got best Quality product
                    </h3>
                  </div>
                  <p className="testimonial-one__text">
                    one lacus arcu. Nullam id dui eu orci maximus. Cras at
                    auctor lectus, vel pretium tellus. className aptent sociosqu
                    ad litora torquent per conubia nostra.
                  </p>
                  <div className="testimonial-one__client-info-box">
                    <div className="testimonial-one__client-info">
                      <div className="testimonial-one__client-img">
                        <Image width={65} height={65} src={testim1} alt="img" />
                      </div>
                      <div className="testimonial-one__client-content">
                        <h4 className="testimonial-one__client-name">
                          Korim Mojumder
                        </h4>
                        <p className="testimonial-one__client-title">
                          Customer
                        </p>
                      </div>
                    </div>
                    <div className="testimonial-one__quote">
                      <span className="icon-quote"></span>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item className="testimonial-one__single">
                  <div className="testimonial-one__feedback-box">
                    <div className="testimonial-one__feedback">
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                    </div>
                    <h3 className="testimonial-one__title">
                      Best product and fair pricing
                    </h3>
                  </div>
                  <p className="testimonial-one__text">
                    Proin a lacus arcu. Nullam id dui eu orci maximus. Cras at
                    auctor lectus, vel pretium tellus. className aptent sociosqu
                    ad litora torquent per conubia nostra.
                  </p>
                  <div className="testimonial-one__client-info-box">
                    <div className="testimonial-one__client-info">
                      <div className="testimonial-one__client-img">
                        <Image width={65} height={65} src={testim2} alt="img" />
                      </div>
                      <div className="testimonial-one__client-content">
                        <h4 className="testimonial-one__client-name">
                          Ariful Islam
                        </h4>
                        <p className="testimonial-one__client-title">
                          Customer
                        </p>
                      </div>
                    </div>
                    <div className="testimonial-one__quote">
                      <span className="icon-quote"></span>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item className="testimonial-one__single">
                  <div className="testimonial-one__feedback-box">
                    <div className="testimonial-one__feedback">
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                    </div>
                    <h3 className="testimonial-one__title">
                      Great job and fair pricing
                    </h3>
                  </div>
                  <p className="testimonial-one__text">
                    Proin a lacus arcu. Nullam id dui eu orci maximus. Cras at
                    auctor lectus, vel pretium tellus. className aptent sociosqu
                    ad litora torquent per conubia nostra.
                  </p>
                  <div className="testimonial-one__client-info-box">
                    <div className="testimonial-one__client-info">
                      <div className="testimonial-one__client-img">
                        <Image width={65} height={65} src={testim3} alt="img" />
                      </div>
                      <div className="testimonial-one__client-content">
                        <h4 className="testimonial-one__client-name">
                          Mohammod Asad
                        </h4>
                        <p className="testimonial-one__client-title">
                          Customer
                        </p>
                      </div>
                    </div>
                    <div className="testimonial-one__quote">
                      <span className="icon-quote"></span>
                    </div>
                  </div>
                </Carousel.Item>

                {/* j */}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
