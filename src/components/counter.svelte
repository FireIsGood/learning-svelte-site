<script>
  let count = 0;

  $: double = 2 * count;
  $: if (count >= 10) {
    console.log(`count is ${count} and that's REALLY BIG`);
  }

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
  <p>Count is: {count}, double of which is {double}</p>
</div>

<style lang="scss">
  .container > * + * {
    margin-top: 1rem;
  }
</style>
