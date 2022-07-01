import React from 'react'; 
import Layout from '../components/Layout';  
export default function ContactScreen() {
 
  return (
    <Layout title="Shipping Address">   
  <title>Contact</title> 
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  /> 
  <link
    rel="stylesheet"
    href=""
    integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb"
    crossOrigin="anonymous"
  />
  <div className="container my-3 my-sm-5">
    <h1 className="mb-sm-4 text-center">Contact</h1>
    <div className="row">
      <div className="col-12 col-md-6">
        <h4>Address:</h4>
        <address>
          <strong>Canada Torronto</strong>
          <br />
          Panchawati street 112
          <br />
          Jhansi, Uttar Pradesh
          <br />
          <abbr title="Telephone">Telephone:</abbr>
          <a href="tel:+1(434)7764918">+1(434)7764918</a>
          <br />
          <abbr title="Mail">Mail:</abbr>
          <a href="mailto:info@domain.com">info@doorstore.com</a>
        </address>
      </div>
      <div className="col-12 col-md-6">
        <h4>Opening hours:</h4>
        <p>
          Mon-Sat:<span className="float-right"> 9 am - 4 pm</span>
          <br />
          Sunday:<span className="float-right"> Off</span>
          <br />
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-lg-6 mb-3">
        <h4>About</h4>
        <p>
Lead from any location
GitHub is a remote-first company with offices located throughout the US, Europe, and Asia. Whether you live near an office or not, GitHub believes you can do your best work wherever you are. If you work remotely, you will receive a stipend to outfit your home office and receive reoccurring reimbursement refreshes.</p>
         
      </div>
      <div className="col-12 col-lg-6">
        <h4>Where to find us:</h4>
        <div className="embed embed-responsive-4by3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65200.34643825467!2d-79.43230773588269!3d43.76298861982101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3239eca9c5c3%3A0xd0436653bd2033fa!2sCostco%20Wholesale!5e0!3m2!1sen!2s!4v1656695654252!5m2!1sen!2s"
            width={600}
            height={450}
            frameBorder={0}
            style={{ border: 0 }}
            allowFullScreen=""
          />
        </div>
      </div>
    </div>
  </div> 

    </Layout>
  );
}