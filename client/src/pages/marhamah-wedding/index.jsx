import React from "react";
import { Field, Form, Formik } from "formik";
import CustomInput from "../components/customInput";
import { Button } from "flowbite-react";
import { advancedSchema } from "@/schemas";
import CustomSelect from "../components/customSelect";

const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    console.log(values);
  };

const DoaForm = () => {

  return (
    <div>
      <h1>My Form</h1>
      <Formik
        initialValues={{ name: "", isHadir: "", doa: "" }}
        validationSchema={advancedSchema}
        onSubmit={onSubmit}
      >
        {(props) => (
          <Form>
            <CustomInput
              label="name"
              name="name"
              type="text"
              placeholder="masukan nama kamu"
            />
            <CustomSelect
              label="bisa kah berhadir di acara kami?"
              name="isHadir"
              placeholder="pilih"
            >
              <option value={""}>pilih</option>
              <option value={"ya, saya bisa berhadir"}> bisa berhadir</option>
              <option value={"Maaf, saya ada kesibukan lain"}>
                {" "}
                kofirmasi kehadiran
              </option>
            </CustomSelect>

            <Button className="mt-3" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DoaForm;
