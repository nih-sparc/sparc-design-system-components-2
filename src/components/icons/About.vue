<template>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      :fill="color"
      viewBox="0 0 24 24"
    >
    <path pid="0" d="M12 5a7 7 0 11-7 7 7.008 7.008 0 017-7m0-2a9 9 0 109 9 9 9 0 00-9-9z"/><path pid="1" d="M12 7.148a.9.9 0 10.9.9.9.9 0 00-.9-.9zM12 17.148a1 1 0 01-1-1v-5.4a1 1 0 112 0v5.4a1 1 0 01-1 1z"/>
   </svg>
  </template>
  
  <script>
  export default {
    name: "About",
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