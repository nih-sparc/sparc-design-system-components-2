
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
        <path pid="1" d="M19.751 13.25v5H13.45v-1.5l4.802.001V13.25h1.5zm-14.001 0v3.5h4.801v1.5H4.25v-5h1.5zm4.801-8v1.5H5.75v3.5h-1.5v-5h6.301zm9.2 0v5h-1.5l.001-3.501-4.802.001v-1.5h6.301z" stroke-linecap="square"  :fill="color"/>

  </svg>
  </template>
  
  <script>
  export default {
    name: "FullScreen",
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