import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

function register() {
 

  return (
    <div className="createPostPage">

     <Formik>
       <Form className="Header">
       <label>Registrieren</label>
       </Form>
     </Formik>

     
   
    <Formik>

      
      <Form className="formContainer">
        <label>E-Mail: </label>
        <ErrorMessage name="title" component="span" />
        <Field
          autocomplete="off"
          id="inputPassword"
          name="title"
          placeholder="(MaxMustermann@mail.de)"
        />
        <label>Passwort: </label>
        <ErrorMessage name="Passwort" component="span" />
        <Field
          autocomplete="off"
          id="inputPassword"
          name="Passwort"
          placeholder="(Passwort123)"
        />
        

        <button type="submit"> Account erstellen</button>
      </Form>
      
    </Formik>
    
  </div>
  )
}

export default register;

