import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Card, Form, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
const Login = () => {
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

  const initialValues = {
    ssn: "",
    password: "",
  };

  const validationSchema = Yup.object({
    ssn: Yup.string().required("Lutfen SSN giriniz"),
    password: Yup.string().required("Lutfen password giriniz"),
  });

  const onSubmit = (values) => {
    setLoading(true);
    setTimeout(() => {
        setLoading(false);
        alert("Login successful")
        navigate("/")/* sonra gitmesini istedigimiz yeri yaziyoruz or:home */
    }, 2000);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <Card style={{ width: "24rem", margin: "2rem auto" }}>
      <Card.Body>
        <Form noValidate onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>SSN</Form.Label>
            <Form.Control
              type="text"
              {...formik.getFieldProps("ssn")}
              isInvalid={formik.errors.ssn && formik.touched.ssn}
              isValid={!formik.errors.snn && formik.touched.ssn}
            />
            <Form.Control.Feedback>{formik.errors.ssn}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              {...formik.getFieldProps("password")}
              isInvalid={formik.errors.password && formik.touched.password}
              isValid={!formik.errors.password && formik.touched.password}
            />
            <Form.Control.Feedback>
              {formik.errors.password}
            </Form.Control.Feedback>
          </Form.Group>
          <Button type="submit" disabled={loading}>{loading && <Spinner animation="border"/>}{" "}Login</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Login;
