import React, { Component } from "react";
//import { useLocation } from "react-router-dom";
//import queryString from "query-string";


class MyForm extends Component {
  componentDidMount() {
async function fetchblogEntry(){
    const response=await fetch('hey');
    console.log(response)
}

fetchblogEntry()
  }

 render() {
  return (
   <form action="https://paynow.netcash.co.za/Site/PayNowDonate.aspx?" method="post" name="payNowDonationForm">
    <input id="m1" name="m1" type="hidden" value="cdeefca1-6961-414b-9103-ce660203afc6" />
    <input id="m2" name="m2" type="hidden" value="ffbb6637-bd72-4af4-b43b-2ab37e39efcf" />
    <input id="p3" name="p3" type="hidden" value="Panic Button" />
    <input id="p4" name="p4" type="hidden" value="1" />
    <input type="hidden" name="m4" value="" />
    <input type="hidden" name="m5" value="" />
    <input type="hidden" name="m6" value="" />
    <input type="submit" value="TEST" className="w-50 btn btn-lg btn-outline-primary" />
    <ul>
 
      <li></li>
    </ul>
   </form>
  );
 }
}
export default MyForm;
