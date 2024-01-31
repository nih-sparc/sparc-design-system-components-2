
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
        <path pid="1" d="M8.61 9.525l1.415 1.414-2.475 2.475a2.5 2.5 0 003.416 3.648l.12-.112 2.475-2.475 1.414 1.414-2.475 2.475A4.5 4.5 0 116.136 12l2.475-2.475zm6.011-1.06l1.415 1.414-5.657 5.657-1.415-1.415 5.657-5.657zm4.243-2.829a4.5 4.5 0 010 6.364l-2.475 2.475-1.414-1.414 2.475-2.475a2.5 2.5 0 00-3.416-3.648l-.12.112-2.475 2.475-1.414-1.414L12.5 5.636a4.5 4.5 0 016.364 0z" :fill="color"/>

  </svg>
  </template>
  
  <script>
  export default {
    name: "Permalink",
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