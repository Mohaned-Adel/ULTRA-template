import {
  DropSection,
  DropTitle,
  DropTitleSpan,
  DropForm,
  FormInputDiv,
  FormInput,
  TextareaInput,
  SubmitInput,
} from "./ContactStyle";

import Footer from "../Footer/Footer";
import { Fragment } from "react";

const Contact = () => {
  return (
    <Fragment>
      <DropSection>
        <div className="container">
          <DropTitle>
            <DropTitleSpan>Drop </DropTitleSpan>Me A line
          </DropTitle>
          <DropForm action="">
            <FormInputDiv>
              <FormInput id={"text"} type="text" placeholder="Your Name" />
              <FormInput id={"email"} type="email" placeholder="Your Email" />
            </FormInputDiv>
            <FormInput sub={true} type="text" placeholder="Your Subject" />
            <TextareaInput
              cols="30"
              rows="10"
              placeholder="Your Message"
            ></TextareaInput>
            <SubmitInput type="submit" value="Send Message" />
          </DropForm>
        </div>
      </DropSection>
      <Footer />
    </Fragment>
  );
};

export default Contact;
