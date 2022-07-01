import styled from "styled-components";

export const DropSection = styled.div`
  padding: 50px 0;
  text-align: center;
`;

export const DropTitle = styled.h2`
  font-size: 60px;
  margin-bottom: 30px;
  @media (max-width: 575px) {
    font-size: 40px;
  }
`;

export const DropTitleSpan = styled.span`
  font-weight: normal;
`;

export const DropForm = styled.form`
  width: 70%;
  margin: auto;
  @media (max-width: 575px) {
    width: 90%;
  }
`;

export const FormInputDiv = styled.div`
  overflow: hidden;
  & > input {
    width: 49%;
  }
`;

export const FormInput = styled.input`
  box-sizing: border-box;
  outline: 0;
  padding: 5px;
  margin-bottom: 10px;
  width: ${(props) => (props.sub === true ? "100%" : "")};
  float: ${(props) =>
    props.id === "text" ? "left" : props.id === "email" ? "right" : ""};
  @media (max-width: 575px) {
    width: 100%;
  }
`;

export const TextareaInput = styled.textarea`
  width: 100%;
  outline: 0;
  background: #ccc;
  resize: vertical;
`;

export const SubmitInput = styled.input`
  width: 60%;
  background: #fff;
  border: 1px solid #ccc;
  color: #888;
  cursor: pointer;
  box-sizing: border-box;
  outline: 0;
  padding: 5px;
  margin-bottom: 10px;
`;
