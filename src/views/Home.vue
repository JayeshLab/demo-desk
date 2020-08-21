<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="openNotepad">Open Notepad from Vue</button>
    <button @click="openMainNotepad" style="margin-left: 10px">Open Notepad from Main Process</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { exec } from 'child_process'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    openNotepad() {
      exec('notepad.exe', function(err, data) {
        console.log(err);
        console.log(data.toString());
      })
    },
    openMainNotepad() {
      if(window.isElectron) {
        window.openMainNotepad();
      }
    }
  }
}
</script>
