<script lang="ts">
  let name: string = "mom";
  let checked: boolean = false;
</script>

<div class="container">
  <div class="input-item">
    <input type="text" name="greet" bind:value={name} />
    <label for="greet">Hi {name ? name : "no one in particular"}!</label>
  </div>
  <div class="input-item">
    <input type="checkbox" name="stupid" id="stupid" bind:checked />
    <label for="stupid">{checked}</label>
  </div>
</div>

<style lang="scss">
  .container > * + * {
    margin-top: 1rem;
  }
  .input-item {
    display: flex;
  }
  input[type="checkbox"],
  input[type="checkbox"] + label {
    cursor: pointer;
  }
</style>
