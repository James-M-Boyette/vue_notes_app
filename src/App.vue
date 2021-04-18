<template>
  <div id="app">
    <Toolbar />
    <NoteContainer />
    
  </div>
</template>	<script>
import { component } from 'vue/types/umd';
import { component } from 'vue/';
import { component } from 'vue/';
export default {
  name: 'app',
  components: {
    Toolbar,
    NoteContainer
  }
};
</script>	<style>
/* RESET */
* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
  box-sizing: border-box;
}	/* LAYOUT */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}


}	/* COLORS */
* {
  color: #454545;
  background-color: #FAFAF8;
}
.toolbar {
  background-color: #DCDADC;
}
.toolbar-button {
  background-color: #FFFFFF;
}
.toolbar-button:active {
  background-color: #AAAAAA;
}
.note-selectors {
  border-right: 1px solid #DCDADC;
}
.note-selector {
  border-bottom: 1px solid #DCDADC;
}
.note-selector.active {
  background-color: #FCE18D;
}
.note-selector-title {
  background-color: inherit;
}
.note-selector-timestamp {
  color: #626262;
  background-color: inherit;
}
.note-editor-info {
  color: #DCDADC;
}	/* TYPOGRAPHY */
body {
  font-family: sans-serif;
}
.note-selector-title {
  font-weight: bold;
}
.note-selector-timestamp {
  font-size: 0.7em;
}
.note-editor, .note-editor-input {
  font-size: 0.9em;
}

