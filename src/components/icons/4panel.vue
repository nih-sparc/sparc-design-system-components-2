
/* eslint-disable */
<template>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      :fill="color"
      viewBox="0 0 24 24"
    >
        <circle pid="0" cx="12" cy="12" r="12" :fill="background"/>
        <path pid="1" d="M19.5 6.5v11h-15v-11h15zm-8 6h-6v4h6v-4zm7 0h-6v4h6v-4zm-7-5h-6v4h6v-4zm7 0h-6v4h6v-4z" :fill="color"/>


  </svg>
  </template>
  
  <script>
  export default {
    name: "V4vertpanel",
    props: {
      width: {
        type: Number,
        default: 16,
      },
      height: {
        type: Number,
        default: 16,
      },
      color: {
        type: String,
        default: "#000000",
      },
      background: {
        type: String,
        default: "#ffffff00",
      }
    },
  };
  </script>