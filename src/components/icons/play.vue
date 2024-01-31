
/* eslint-disable */
<template>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      :fill="color"
      viewBox="0 0 24 24"
      fill-rule="evenodd"
    >
        <circle pid="0" cx="12" cy="12" r="12" :fill="background"/>
        <path pid="1" d="M16.5 11.5l-7 6v-12z" :fill="color"/>

  </svg>
  </template>
  
  <script>
  export default {
    name: "Play",
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