import React, { FunctionComponent } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import {
  Flex,
  TextArea,
  Provider as FluentProvider,
  teamsTheme,
  FormMessage,
  Button,
  FormInput,
} from "@fluentui/react-northstar";
import { Form, Formik, useField } from "formik";
import { client } from "./utils/client";

const initialValues = {
  title: "",
  description: "",
};

const MyTextArea: FunctionComponent<{ name: string; placeholder: string }> = ({
  name,
  ...props
}) => {
  const [field, meta] = useField(name);

  return (
    <>
      <TextArea {...field} {...props} />
      {meta.touched && (
        <FormMessage role="alert" error>
          {meta.error}
        </FormMessage>
      )}
    </>
  );
};

const MyInput: FunctionComponent<{
  name: string;
  label: string;
  placeholder: string;
}> = ({ name, ...props }) => {
  const [field, meta] = useField(name);

  return (
    <FormInput
      {...field}
      {...props}
      errorMessage={meta.touched ? meta.error : false}
    />
  );
};

const App = () => {
  const validate = (values: typeof initialValues) => {
    const errors: Partial<typeof initialValues> = {};

    if (!values.title) {
      errors.title = "A title is required";
    }

    if (!values.description) {
      errors.description = "A description is required";
    } else if (values.description.length < 30) {
      errors.description = "A description must be longer than 30 chars";
    }

    return errors;
  };

  return (
    <Provider store={store}>
      <FluentProvider theme={teamsTheme}>
        <Formik
          validate={validate}
          onSubmit={(values) => {
            client.post("/posts", {
              description: values.description,
              title: values.title,
            });
          }}
          initialValues={initialValues}
        >
          <Form>
            <Flex column hAlign="center" vAlign="center" gap="gap.small">
              <MyInput
                name="title"
                label="A post title"
                placeholder="Insert a title"
              />
              <MyTextArea
                name="description"
                placeholder="Insert a description"
              />
              <Button type="submit">Invia</Button>
            </Flex>
          </Form>
        </Formik>
      </FluentProvider>
    </Provider>
  );
};

export default App;
