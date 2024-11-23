<template>
  <div>
    <h1>zenkaku-hankaku-converter</h1>
    <h4>Convert alphanumeric characters only</h4>

    <p>Text to convert</p>
    <textarea placeholder="Enter your text"></textarea>

    <p>zenkaku</p>
    <textarea placeholder=""></textarea>

    <p>hankaku</p>
    <textarea placeholder=""></textarea>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
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
</style>
