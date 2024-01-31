
/* eslint-disable */
<template>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 24 24"
    >

    <circle pid="0" cx="12" cy="12" r="12" :fill="background"/>
    <path pid="1" d="M19.5 6.5v11h-15v-11h15zm-1 6h-13v4h13v-4zm0-5h-13v4h13v-4z" :fill="color"/>

  </svg>
  </template>
  
  <script>
  export default {
    name: "V2vertpanel",
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
      },
    },

  };
  </script>