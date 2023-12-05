<template>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      :fill="color"
      viewBox="0 0 24 24"
    >
      <g data-name="&lt;clipboard&gt;"><path pid="0" d="M20 8H4a1 1 0 010-2h16a1 1 0 010 2zM20 13H7a1 1 0 010-2h10a1 1 0 010 2zM20 18H10a1 1 0 010-2h4a1 1 0 010 2z"/><path pid="1" d="M14 4a2 2 0 0 0-4 0H4.5v18H8a1 1 0 0 0 0-2H6.5V6h2v2h7V6h2v14H12a1 1 0 1 0 0 2h7.5V4z"/></g>
    </svg>
  </template>
  
  <script>
  export default {
    name: "FilterApplied",
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