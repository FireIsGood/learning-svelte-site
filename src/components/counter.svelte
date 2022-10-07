<script>
  let count = 0;

  function addCount() {
    count += 1;
  }
  function subtractCount() {
    count -= 1;
  }
</script>

<div class="container">
  <div>
    <button on:click={addCount}>Add 1</button>
    <button on:click={subtractCount}>Subtract 1</button>
  </div>
  <p>Count is: {count}</p>
</div>

<style lang="scss">
  .container > * + * {
    margin-top: 1rem;
  }
  button {
    padding: 4px;
  }
</style>
