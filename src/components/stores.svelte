<script lang="ts">
  import { count } from "./stores.js";
  import { fly } from "svelte/transition";
</script>

<div class="container">
  <h1>
    The count is
    {#key $count}
      <span in:fly={{ y: -10 }}>{$count}</span>
    {/key}
  </h1>
  <div>
    <button on:click={count.decrement} aria-label="Remove 1 to count">-</button>
    <button on:click={count.reset} aria-label="Remove 1 to count">Reset</button>
    <button on:click={count.increment} aria-label="Add 1 to count">+</button>
  </div>
</div>

<style>
  .container > * + * {
    margin-top: 1rem;
  }
  button {
    min-width: 2rem;
    min-height: 2rem;
  }
  span {
    display: inline-block;
  }
</style>
