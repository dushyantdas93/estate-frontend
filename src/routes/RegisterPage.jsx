import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
const validationSchema = Yup.object({
  username: Yup.string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters")
    .max(15, "Username must be at most 15 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

// Form component
const RegisterPage = () => {
  async function registerUser(values) {
    try {
      const { data } = await axios.post(
        "http://localhost:8800/api/auth/register",
        values
      );

      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        // Handle form submission
        registerUser(values);

        console.log("Form data", values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="username">Username</label>
            <Field
              type="text"
              id="username"
              name="username"
              className={"border-2 ml-4"}
            />
            <ErrorMessage name="username" component="p" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
              className={"border-2 ml-4"}
            />
            <ErrorMessage
              name="email"
              component="p"
              className="text-xs  text-red-800"
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              id="password"
              name="password"
              className={"border-2 ml-4"}
            />
            <ErrorMessage name="password" component="p" />
          </div>

          <div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterPage;
