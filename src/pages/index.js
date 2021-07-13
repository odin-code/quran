// Vendors
import React, {
   useState,
   useEffect
} from "react";
import {
   Button,
   notification
} from "antd";
import db from "../utils/fire";

// Next
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import {
   Wrapper
} from "../styles/pages/home/style";

//style

export default function Home({
   appName
}) {
   const [whatsap, setwhatsap] = useState(
      "https://api.whatsapp.com/send?phone=81932622629&text=Assalamu'alaikum%20,%20Saya%20mendapatkan%20info%20dari%20website%20claudmedia"
   );
   const [dataEmail, setDataEmail] = useState("");
   const [isLoading, setLoading] = useState(false);
   const [email, setEmail] = useState({
      value: "",
      isValid: true,
      errorMessage: "",
   });

   useEffect(() => {
      db.collection("quran").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
               console.log(`${doc.id} => ${doc.data()}`);
            });
      });
   }, [])

   const _handleOpenMassage = () => {
      notification.open({
         message: "Sucess",
         description: "Thank you So much :)",
         onClick: () => {
            console.log("Notification Clicked!");
         },
      });
   };

   const _handleSubmit = (event) => {
      event.preventDefault();
      setLoading(true);
      setTimeout(() => {
         fire.firestore().collection("email").add({
            email: dataEmail,
         });

         _handleOpenMassage();
         setLoading(false);
         setDataEmail("");
      }, 2000);
   };

   return ( <
      >
      <
      Head >
      <
      title >
      Claudmedia— Creative & Digital Agency Based in Jakarta,
      Indonesia {
         " "
      } <
      /title> <
      meta name = "title"
      content = "Claudmedia — Creative & Digital Agency Based in Jakarta, Indonesia " /
      >
      <
      meta name = "description"
      content = "Claudmedia Is a Digital  Agency Based In Jakarta, Indonesia. We Provide Website development ,  Website Design and Brand , Mobile development" /
      >

      <
      meta property = "og:type"
      content = "website" / >
      <
      meta property = "og:url"
      content = "https://claudmedia.com/" / >
      <
      meta property = "og:title"
      content = "Claudmedia — Creative & Digital Agency Based in Jakarta, Indonesia " /
      >
      <
      meta property = "og:description"
      content = "Claudmedia Is a Digital  Agency Based In Jakarta, Indonesia. We Provide Website development ,  Website Design and Brand , Mobile development" /
      >
      <
      meta property = "og:image"
      content = "https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" /
      >
      <
      link rel = "canonical"
      href = "https://claudmedia.com/" / >

      <
      meta property = "twitter:card"
      content = "summary_large_image" / >
      <
      meta property = "twitter:url"
      content = "https://claudmedia.com/" / >
      <
      meta property = "twitter:title"
      content = "Claudmedia — Creative & Digital Agency Based in Jakarta, Indonesia " /
      >
      <
      meta property = "twitter:description"
      content = "Claudmedia Is a Digital  Agency Based In Jakarta, Indonesia. We Provide Website development ,  Website Design and Brand , Mobile development" /
      >
      <
      meta property = "twitter:image"
      content = "https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" /
      >
      <
      /Head> <
      Layout >
      <
      Wrapper >

      <
      /Wrapper> <
      /Layout> <
      />
   );
}