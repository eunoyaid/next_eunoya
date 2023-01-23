import React from "react";
import { Field, Form, Formik } from "formik";
import CustomInput from "../components/customInput";
import { Button } from "flowbite-react";
import { advancedSchema } from "@/schemas";

const DoaForm = () => {
   
  return (
    <div>
      <h1>My Form</h1>
      <Formik
        initialValues={{ name: "", isHadir: false, doa:'' }}
      validationSchema={advancedSchema}
      >
        {(props) => (
                  <Form>
                      <CustomInput
                          label='name'
                          name='name'
                          type='text'
                          placeholder='masukan nama kamu'
                      />
           
          
            <Button className="mt-3" type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DoaForm;
