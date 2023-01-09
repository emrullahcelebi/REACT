import React from "react";
import SectionHeader from "../section-header/section-header";
import Testimonal from "./testimonal";
import testimonials from "./testimonals.json";
import TestimonialText from "./testimonial-text";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <section id="testimonials" class="testimonials">
      <SectionHeader title="Testimonials" isButtonVisible={false} />

      <div className="testimonial-carousel">
        {testimonials.map((testimonial, i) => (
          <div className="item">
            <div className="row">
              <div className="col-md-2 col-sm-2 hidden-xs" key={i}>
                <Testimonal {...testimonial} />
              </div>
              <div className="text col-md-10 col-sm-10 col-xs-12" key={i}>
                <TestimonialText {...testimonial} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
