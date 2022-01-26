import React, { FunctionComponent, useEffect, useMemo, useState } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import {
  Flex,
  TextArea,
  Provider as FluentProvider,
  teamsTheme,
  FormMessage,
  FormField,
  Button,
} from "@fluentui/react-northstar";
import { Form, Formik, useField } from "formik";
import { client } from "./utils/client";

const initialValues = {
  title: "",
  description: "",
};

const MyTextArea: FunctionComponent<{ name: string }> = ({
  name,
  ...props
}) => {
  const [field, meta] = useField(name);

  console.log(meta);

  return (
    <>
      <TextArea placeholder="Type here..." {...field} {...props} />
      {meta.touched && (
        <FormMessage role="alert" error>
          {meta.error}
        </FormMessage>
      )}
    </>
  );
};

const MyInput: FunctionComponent<{ name: string; label: string }> = ({
  name,
  ...props
}) => {
  const [field, meta] = useField(name);

  return (
    <FormField
      {...field}
      {...props}
      errorMessage={meta.touched ? meta.error : false}
    />
  );
};

const App = () => {
  const [todos, setTodos] = useState<any>([]);

  useEffect(() => {
    (async () => {
      const res = await client.get<any>("/todos");

      console.log(res.data);

      setTodos(res.data);
    })();
  }, []);

  const validate = (values: typeof initialValues) => {
    const errors: Partial<typeof initialValues> = {};

    console.log(values);

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
        {todos && (
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
                <MyInput name="title" label="A post title" />
                <MyTextArea name="description" />
                <Button type="submit">Invia</Button>
              </Flex>
            </Form>
          </Formik>
        )}
      </FluentProvider>
    </Provider>
  );
};

export default App;
