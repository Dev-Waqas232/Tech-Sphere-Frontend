import { Formik, Form, Field } from "formik";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { productSchema } from "../../utils/validationSchemas";
import { ApiResponseError } from "../../types";
import { CATEGORIES } from "../../constants";
import { useAddProductMutation } from "../../features/products/productApi";

export default function AddProduct() {
  const [addProduct, { isLoading }] = useAddProductMutation();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col mt-8 mb-8 bg-primary rounded-lg px-8 py-8 md:w-1/2 w-full">
      <h2 className="font-secondary font-semibold text-2xl text-main">
        Add Product
      </h2>
      <p className="font-primary text-sm text-gray-700">
        Please fill all required fields
      </p>
      <Formik
        initialValues={{
          title: "",
          description: "",
          price: "",
          category: "",
          image: null,
        }}
        validationSchema={productSchema}
        onSubmit={async (values) => {
          const formData = new FormData();
          formData.append("title", values.title);
          formData.append("description", values.description);
          formData.append("price", values.price);
          formData.append("image", values.image!);
          formData.append("category", values.category);

          try {
            const response = await addProduct(formData).unwrap();
            if (response.ok) {
              toast.success(response.message);
              navigate("/admin/products");
            }
          } catch (error: unknown) {
            console.log(error);
            if (
              error &&
              typeof error === "object" &&
              "data" in error &&
              (error as ApiResponseError).data
            ) {
              toast.error((error as ApiResponseError).data.message);
            } else {
              toast.error("An unknown error occurred");
            }
          }
        }}
      >
        {({ errors, touched, setFieldValue }) => (
          <Form className="space-y-4 mt-4 font-primary">
            <div className="flex flex-col w-full">
              <label htmlFor="title">Title</label>
              <Field
                name="title"
                id="title"
                className="px-3 py-2 rounded-md bg-gray-200 focus:outline-none focus:border-2 focus:border-main"
              />
              {errors.title && touched.title ? (
                <div className="text-red-700 text-sm">{errors.title}</div>
              ) : null}
            </div>
            <div className="flex flex-col">
              <label htmlFor="description">Description</label>
              <Field
                name="description"
                id="description"
                className="px-3 py-2 bg-gray-200 rounded-md focus:outline-none focus:border-2 focus:border-main"
                as="textarea"
              />
              {errors.description && touched.description ? (
                <div className="text-red-700 text-sm">{errors.description}</div>
              ) : null}
            </div>

            <div className="flex flex-col">
              <label htmlFor="category">Category</label>
              <Field
                name="category"
                id="category"
                className="px-3 py-2 bg-gray-200 rounded-md focus:outline-none focus:border-2 focus:border-main"
                as="select"
              >
                {" "}
                <option value="" label="Select category" />
                {CATEGORIES.map((category) => (
                  <option
                    key={category.name}
                    value={category.value}
                    label={category.name}
                  />
                ))}
              </Field>
              {errors.category && touched.category ? (
                <div className="text-red-700 text-sm">{errors.category}</div>
              ) : null}
            </div>

            <div className="flex flex-col">
              <label htmlFor="price">Price</label>
              <Field
                name="price"
                id="price"
                className="px-3 py-2 bg-gray-200 rounded-md focus:outline-none focus:border-2 focus:border-main"
                type="number"
              />
              {errors.price && touched.price ? (
                <div className="text-red-700 text-sm">{errors.price}</div>
              ) : null}
            </div>

            <div className="flex flex-col">
              <label htmlFor="image">Image</label>
              <input
                name="image"
                id="image"
                type="file"
                accept="image/*"
                onChange={(event) => {
                  setFieldValue("image", event.currentTarget.files![0]);
                }}
                className="px-3 py-2 bg-gray-200 rounded-md focus:outline-none focus:border-2 focus:border-main"
              />
              {errors.image && touched.image ? (
                <div className="text-red-700 text-sm">{errors.image}</div>
              ) : null}
            </div>

            <div className="flex justify-center items-center flex-col gap-4">
              <motion.button
                initial={{ scale: 1 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="bg-main text-white px-12 w-full mt-2 py-2 rounded-md"
              >
                {!isLoading ? "Save Product" : "Loading..."}
              </motion.button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
