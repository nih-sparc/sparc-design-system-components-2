<template>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      :fill="color"
      viewBox="0 0 24 24"
    >
   <path pid="0" d="M19 5.6v7.219h-4.181V16.1l-3.889-3.282H5V5.6h14m2-2H3v11.218h7.2l3.331 2.81 3.288 2.772v-5.582H21V3.6z"/>
   </svg>
  </template>
  
  <script>
  export default {
    name: "Contact",
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
        default: "currentColor",
      },
    },
  };
  </script>
