
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
        <path pid="1" d="M17.5 5.5v8H13V16h4.5v1h-11v-1H11v-2.5H6.5v-8h11zm-1 1h-9v6h9v-6z" :fill="color"/>

  </svg>
  </template>
  
  <script>
  export default {
    name: "ChangeBckgd",
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