
/* eslint-disable */
<template>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 24 24"
    >
        <circle pid="0" cx="12" cy="12" r="12" :fill="background"/>
        <path pid="1" d="M19.5 6.5v11h-15v-11h15zm-8.5 1H5.5v9H11v-9zm7.5 4.5H12v4.5h6.5V12zm0-4.5H12V11h6.5V7.5z" :fill="color"/>


  </svg>
  </template>
  
  <script>
  export default {
    name: "V3panel",
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