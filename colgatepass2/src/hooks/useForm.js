import axios from "axios";
import { useState } from "react";
import { urlApi } from "../constantes/RoutersLinks";

export const useForm = (initialForm, validationForm) => {

   const [form, setForm] = useState(initialForm);
   const [error, setError] = useState({ staus: false });
   const [showErrors, setShowErrors] = useState(false);
   const [loading, setLoading] = useState(false);
   const [responseApi, setResponseApi] = useState(null);
   const [data, setData] = useState({});

   const handleChange = (e) => {

      const target = e.target;
      const value = target.value;
      const name = target.name;

      setForm({
         ...form,
         [name]: value
      });
   };

   const handleBlur = (e) => {
      handleChange(e);
      setError(validationForm(form));
   }

   const handleSubmit = (e) => {

      e.preventDefault();
      handleBlur(e);

      setShowErrors(true);
      delete form[''];
      delete error[''];
      // error.estado, 
      console.log(Object.keys(error).length === 1, error.estado, Object.keys(error).length === 1 && error.estado)

      if (Object.keys(error).length === 1 && error.estado) {

         setLoading(true);
         axios.post(`${urlApi}/${form.accessAPI}`, form)
            .then(function (response) {
               if (response.data === false) {
                  setResponseApi(false);
               } else {
                  setResponseApi(true);
                  setData(response.data);
               }
            })
            .catch(function (error) {

               setResponseApi(false);
               console.log(error);
            })
            .finally(() => {
               setLoading(false);
            });
      } else {
         console.log("Hay un elemento de la validacion que tiene un estado 'true'");
      }

   };

   return {
      form,
      error,
      showErrors,
      loading,
      responseApi,
      data,
      handleChange,
      handleBlur,
      handleSubmit,
   }

}