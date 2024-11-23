<template>
  <div>
    <h1>zenkaku-hankaku-converter</h1>
    <h4>Convert alphanumeric characters only</h4>

    <p>Text to convert</p>
    <textarea placeholder="Enter your text" v-model="yourText" ref="yt"></textarea>
    <div>
      <button @click="clear()">Clear</button>
      <button @click="paste()">Paste</button>
      <button @click="convert()">Convert</button>
    </div>

    <p>zenkaku</p>
    <textarea placeholder="" v-model="zenkakuText" readonly></textarea>
    <div>
      <button @click="copy()">Copy</button>
    </div>

    <p>hankaku</p>
    <textarea placeholder="" v-model="hankakuText" readonly></textarea>
    <div>
      <button @click="copy()">Copy</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      yourText: '',
      zenkakuText: '',
      hankakuText: ''
    }
  },
  mounted() {
    this.$refs.yt.focus()
  },
  methods: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

p {
  margin-bottom: 5px;
}

textarea {
  font-size: 1rem;
  height: 50px;
  width: 75%;
}

textarea:focus {
  outline-color: #42b883;
}

button {
  font-size: 0.8rem;
  margin-left: 5px;
  margin-right: 5px;
}
</style>
