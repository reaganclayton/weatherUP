<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body, html {
    height: 100%;
  }

body {
    background: #d3d3d3;
    background: -moz-linear-gradient(top,  #d3d3d3 0%, #f2f2f2 100%);
    background: -webkit-linear-gradient(top,  #d3d3d3 0%,#f2f2f2 100%);
    background: linear-gradient(to bottom,  #d3d3d3 0%,#f2f2f2 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d3d3d3', endColorstr='#f2f2f2',GradientType=0 );    
    width: 100%;
}

body, input {
    font-family: 'Quicksand', sans-serif;
    color: #fff;
}
.app-bg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 400px;
    width: 90%;
    height: 600px;
    border-radius: 2em;
    background: #00529d;
    background: -moz-linear-gradient(top,  #00529d 0%, #89c7ff 100%);
    background: -webkit-linear-gradient(top,  #00529d 0%,#89c7ff 100%);
    background: linear-gradient(to bottom,  #00529d 0%,#89c7ff 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00529d', endColorstr='#89c7ff',GradientType=0 );
    -webkit-box-shadow: 0px 0px 31px 5px rgba(0,0,0,0.3); 
    box-shadow: 0px 0px 31px 5px rgba(0,0,0,0.3);
}
</style>
