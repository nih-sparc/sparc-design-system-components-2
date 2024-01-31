
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
        <path pid="1" d="M11.704 12.318v.121h.121v1.292l.06.062-.06.06v4.586h-2v-2.586L6.229 19.45l-1.414-1.414 3.717-3.719-2.828.001v-2h6zm6.332-7.574l1.414 1.414-3.717 3.717 2.828.001v2h-6l-.001-.122h-.12l-.001-1.293-.06-.06.06-.062V5.755h2v2.584l3.597-3.595z" :fill="color"/>

  </svg>
  </template>
  
  <script>
  export default {
    name: "Undock",
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