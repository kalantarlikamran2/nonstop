

import { Button, List, ListItem, TextField, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import CheckoutWizard from '../components/CheckoutWizard';
import Layout from '../components/Layout';
import Form from '../components/Form'; 
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
 

export default function ShippingScreen() {
 
  return (
    <Layout title="Shipping Address">  
  <head>
    <title>Photo Gallery</title> 
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
 
    <link
      rel="stylesheet"
      href=""
      integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div class="container my-3 my-sm-5">
      <h1 class="mb-sm-4 text-center">Gallery Doors</h1>
      <p class="lead text-center">
   
      </p>
 
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4">
          <figure class="figure">
            <a href=""
              ><img
                src="images/1.jpg"
                class="figure-img img-fluid img-thumbnail"
                alt="Figure image"
            /></a>
 
          </figure>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <figure class="figure">
            <a href=""
              ><img
                src="images/2.jpg"
                class="figure-img img-fluid img-thumbnail"
                alt="Figure image"
            /></a>
 
          </figure>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <figure class="figure">
            <a href=""
              ><img
                src="images/3.jpg"
                class="figure-img img-fluid img-thumbnail"
                alt="Figure image"
            /></a>
 
          </figure>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <figure class="figure">
            <a href=""
              ><img
                src="images/4.jpg"
                class="figure-img img-fluid img-thumbnail"
                alt="Figure image"
            /></a>
 
          </figure>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <figure class="figure">
            <a href=""
              ><img
                src="images/5.jpg"
                class="figure-img img-fluid img-thumbnail"
                alt="Figure image"
            /></a>
 
          </figure>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <figure class="figure">
            <a href=""
              ><img
                src="images/6.jpg"
                class="figure-img img-fluid img-thumbnail"
                alt="Figure image"
            /></a>
 
          </figure>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <figure class="figure">
            <a href=""
              ><img
                src="images/7.jpg"
                class="figure-img img-fluid img-thumbnail"
                alt="Figure image"
            /></a>
 
          </figure>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <figure class="figure">
            <a href=""
              ><img
                src="images/8.jpg"
                class="figure-img img-fluid img-thumbnail"
                alt="Figure image"
            /></a>
 
          </figure>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <figure class="figure">
            <a href=""
              ><img
                src="images/9.png"
                class="figure-img img-fluid img-thumbnail"
                alt="Figure image"
            /></a>
 
          </figure>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <figure class="figure">
            <a href=""
              ><img
                src="images/10.jpg"
                class="figure-img img-fluid img-thumbnail"
                alt="Figure image"
            /></a>
 
          </figure>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <figure class="figure">
            <a href=""
              ><img
                src="images/11.jpg"
                class="figure-img img-fluid img-thumbnail"
                alt="Figure image"
            /></a>
 
          </figure>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <figure class="figure">
            <a href=""
              ><img
                src="images/12.jpg"
                class="figure-img img-fluid img-thumbnail"
                alt="Figure image"
            /></a>
 
          </figure>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <figure class="figure">
            <a href=""
              ><img
                src="images/13.jpg"
                class="figure-img img-fluid img-thumbnail"
                alt="Figure image"
            /></a>
 
          </figure>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <figure class="figure">
            <a href=""
              ><img
                src="images/14.jpg"
                class="figure-img img-fluid img-thumbnail"
                alt="Figure image"
            /></a>
 
          </figure>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <figure class="figure">
            <a href=""
              ><img
                src="images/15.jpg"
                class="figure-img img-fluid img-thumbnail"
                alt="Figure image"
            /></a>
 
          </figure>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <figure class="figure">
            <a href=""
              ><img
                src="images/16.jpg"
                class="figure-img img-fluid img-thumbnail"
                alt="Figure image"
            /></a>
 
          </figure>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <figure class="figure">
            <a href=""
              ><img
                src="images/17.jpg"
                class="figure-img img-fluid img-thumbnail"
                alt="Figure image"
            /></a>
 
          </figure>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <figure class="figure">
            <a href=""
              ><img
                src="images/18.jpg"
                class="figure-img img-fluid img-thumbnail"
                alt="Figure image"
            /></a>
 
          </figure>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <figure class="figure">
            <a href=""
              ><img
                src="images/19.jpg"
                class="figure-img img-fluid img-thumbnail"
                alt="Figure image"
            /></a>
 
          </figure>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <figure class="figure">
            <a href=""
              ><img
                src="images/20.jpg"
                class="figure-img img-fluid img-thumbnail"
                alt="Figure image"
            /></a>
         
          </figure>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <figure class="figure">
            <a href=""
              ><img
                src="images/21.jpg"
                class="figure-img img-fluid img-thumbnail"
                alt="Figure image"
            /></a>
 
          </figure>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <figure class="figure">
            <a href=""
              ><img
                src="images/22.jpg"
                class="figure-img img-fluid img-thumbnail"
                alt="Figure image"
            /></a>
 
          </figure>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <figure class="figure">
            <a href=""
              ><img
                src="images/23.jpg"
                class="figure-img img-fluid img-thumbnail"
                alt="Figure image"
            /></a>
 
          </figure>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <figure class="figure">
            <a href=""
              ><img
                src="images/24.jpg"
                class="figure-img img-fluid img-thumbnail"
                alt="Figure image"
            /></a>
 
          </figure>
        </div>
      </div>
 
    </div> 
    <script
      src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
      integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js"
      integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js"
      integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ"
      crossorigin="anonymous"
    ></script>
  </body>
    </Layout>
  );
}
 