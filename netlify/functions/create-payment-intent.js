//! ini adalah cara setup serverless function yang nanti akna di jalan kan di netlify untuk pembayaran di stripe
//! hal pertama yang harus di perhatikan adalah kita harus mempunyai key stripe  dan dotenv untuk memanagement variable env dan nama dari functionnya harus handler

//! lalu kita bisa fetch ke serverles function kita dengan url awalan ,netlify/function/nama file
//! dan satu lagu untuk testing serverless function netlify kita harus menginstal npm i nerlify dan aplikasi react kita dijalankan dengan perintah netlify dev

require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log({ error });

    return {
      status: 400,
      body: JSON.stringify({ error }),
    };
  }
};
