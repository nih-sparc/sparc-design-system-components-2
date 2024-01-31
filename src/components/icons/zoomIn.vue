
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
        <path pid="1" d="M10.5 3a6.5 6.5 0 015.249 10.335l4.249 4.248-1.415 1.415-4.248-4.25A6.5 6.5 0 1110.5 3zm0 2a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm1 2v1.5H13v2h-1.5V12h-2v-1.5H8v-2h1.5V7h2z" :fill="color"/>
  </svg>
  </template>
  
  <script>
  export default {
    name: "ZoomIn",
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