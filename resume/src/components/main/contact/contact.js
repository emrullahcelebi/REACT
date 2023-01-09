import React from "react";
import "./contact.css";
import Info from "./info";
import contacts from "./contact.json"
import SectionHeader from "../section-header/section-header";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <SectionHeader title="GET IN TOUCH" isButtonVisible={false} />

      <form method="post" action="form/contactform.php">
        <div className="row">
            {contacts.map((contact, index)=>(<div className="col-md-6 col-sm-6 col-xs-12" key={index}>
            <div className="form-group">
              <Info {...contact} />
            </div>
          </div>))}
          

          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="form-group">
              <textarea
                name="InputMessage"
                id="InputMessage"
                className="form-control"
                rows="6"
                placeholder="Message"
                required=""
              ></textarea>
            </div>
          </div>
        </div>
        <input type="submit" name="submit" id="submit" value="Send Message" className="btn btn-default pull-left"/>

      </form>
    </section>
  );
};

export default Contact;
