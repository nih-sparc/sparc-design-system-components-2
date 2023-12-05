<template>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      :fill="color"
      viewBox="0 0 24 24"
    >
    <path pid="0" d="M20 8H4a1 1 0 010-2h16a1 1 0 010 2zM20 13H4a1 1 0 010-2h16a1 1 0 010 2zM20 18H4a1 1 0 010-2h16a1 1 0 010 2z"/>
   </svg>
  </template>
  
  <script>
  export default {
    name: "Hamburger",
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
    