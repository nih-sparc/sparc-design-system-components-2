
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
        <path pid="1" d="M10.5 3a6.5 6.5 0 015.249 10.335l4.249 4.248-1.415 1.415-4.248-4.25A6.5 6.5 0 1110.5 3zm0 2a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm1 4V8h.324a2 2 0 10.613 2h1.021a2.984 2.984 0 01-.522 1.251 3 3 0 11-.435-3.986L12.5 7h1v2h-2z" :fill="color"/>


  </svg>
  </template>
  
  <script>
  export default {
    name: "ResetZoom",
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