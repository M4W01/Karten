import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

function LernkarteVorderseite() {
 

    return (
      <div className="createNewCard">
  
       <Formik>

         <Form className="HeaderNew">

             <label>Neue Karte</label>

         </Form>

       </Formik>

      
        <Formik>

          <Form className='LernkarteFront'>

              <lable>Lernkarte Vorderseite</lable>

          </Form>

      </Formik>


      <Formik>
         <Form className="BottomNew">

         <label>Zuletzt gesehen</label>

         <button type="submit"> Zur Rückseite</button>

         </Form>
       </Formik>

      
      
    </div>
    )
  }
  
  export default LernkarteVorderseite;