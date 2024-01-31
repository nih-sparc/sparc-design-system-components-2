
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
        <path pid="1" d="M19.75 13.25v1.5h-3.5v3.5h-1.5v-5h5zm-10.5 0v5h-1.5v-3.5h-3.5v-1.5h5zm0-8v5h-5v-1.5l3.5.001V5.25h1.5zm7 0v3.501l3.5-.001v1.5h-5v-5h1.5z"  :fill="color"/>

  </svg>
  </template>
  
  <script>
  export default {
    name: "CloseFullScreen",
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