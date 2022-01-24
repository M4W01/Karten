import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

function anmelden() {
 

  return (
    <div className="createLogin">

     <Formik>
       <Form className="HeaderLogin">
       <label>Anmelden</label>
       </Form>
     </Formik>

     
   
    <Formik>

      
      <Form className="formContainerLogin">
        <label>E-Mail: </label>
        <ErrorMessage name="title" component="span" />
        <Field
          autocomplete="off"
          id="h"
          name="title"
          placeholder="(MaxMustermann@mail.de)"
        />
        <label>Passwort: </label>
        <ErrorMessage name="Passwort" component="span" />
        <Field
          autocomplete="off"
          id="h"
          name="Passwort"
          placeholder="(Passwort123)"
        />
        

        <button type="submit"> Account erstellen</button>
      </Form>
      
    </Formik>
    
  </div>
  )
}

export default anmelden;

