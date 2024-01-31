
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
        <path pid="1" d="M10.508 12.257l1.415 1.414-3.718 3.718h2.829v2h-6v-.121h-.122v-1.294l-.06-.06.06-.06v-4.587h2v2.587l3.596-3.597zm8.669-7.426v.12h.121v1.293l.06.061-.06.06v4.587h-2V8.366l-3.596 3.596-1.414-1.414 3.716-3.717h-2.827v-2h6z"  :fill="color"/>
  </svg>
  </template>
  
  <script>
  export default {
    name: "Dock",
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