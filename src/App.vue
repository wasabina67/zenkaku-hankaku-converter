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
    <textarea placeholder="" v-model="zenkakuText" class="bg-color-f2f2f2" readonly></textarea>
    <div>
      <button @click="copy(zenkakuText)">Copy</button>
    </div>

    <p>hankaku</p>
    <textarea placeholder="" v-model="hankakuText" class="bg-color-f2f2f2" readonly></textarea>
    <div>
      <button @click="copy(hankakuText)">Copy</button>
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
    clear() {
      this.yourText = ''
      this.zenkakuText = ''
      this.hankakuText = ''
    },
    async paste() {
      this.yourText = await navigator.clipboard.readText()
    },
    toZenkaku(txt) {
      return txt.replace(/[A-Za-z0-9]/g, (t) => {
        return String.fromCharCode(t.charCodeAt(0) + 0xFEE0)
      })
    },
    toHankaku(txt) {
      return txt.replace(/[Ａ-Ｚａ-ｚ０-９]/g, (t) => {
        return String.fromCharCode(t.charCodeAt(0) - 0xFEE0)
      })
    },
    convert() {
      const ytext = this.yourText
      this.zenkakuText = this.toZenkaku(ytext)
      this.hankakuText = this.toHankaku(ytext)
    },
    async copy(txt) {
      await navigator.clipboard.writeText(txt)
    }
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

.bg-color-f2f2f2 {
  background-color: #F2F2F2
}
</style>
