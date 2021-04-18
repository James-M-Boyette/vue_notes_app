<template>
  <div class="toolbar">
    <button class="toolbar-button">New</button>
    <button class="toolbar-button">Delete</button>
    <input class="toolbar-search" type="text" placeholder="Search..." />
  </div>
</template>

<script>
export default {
  name: 'toolbar'
};
</script>	<style>
/* Reset */
* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
  box-sizing: border-box;
}
/* Layout */
#toolbar {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.toolbar { 
  padding: 0.5em; } 
.toolbar-button, 

.toolbar-search { 
  padding: inherit; border-radius: 0.3em; }
.toolbar-search { 
  float: right; }

