import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

function Cards() {
 

    return (
     
        <div className='Card'>
            <Formik>
                <Form className='show'>
                <Field
                   autocomplete="off"
                   id="show1"
                   name="title"
                   placeholder="Lernkarte Vorderseite"
                 />

                  <Field
                   autocomplete="off"
                   id="show2"
                   name="title"
                   placeholder="Lernkarte Rückseite"
                 />
                   <button type="submit"> Karte erstellen</button>
                </Form>
            </Formik>

           
        </div>

    )
  }
  
  export default Cards;