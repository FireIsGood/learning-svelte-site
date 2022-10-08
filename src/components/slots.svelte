<script>
  import ToggleButton from "./toggle-button.svelte";
  import { fade } from "svelte/transition";
</script>

<div class="container">
  <div>
    <ToggleButton let:toggle>
      <div class="no-select" class:red={toggle}>
        {#if !toggle}
          <p>
            This is regular text! is is not toggled on currently, the value is:
          </p>
        {:else}
          <p>
            This is red text! This means the toggle value is true! You can see
            it here:
          </p>
          <p in:fade={{ delay: 500 }}>
            I can even have more than one paragraph
          </p>
          <h1 in:fade={{ delay: 1000 }}>Or style!</h1>
        {/if}
        <code>toggle = {toggle}</code>
      </div>
    </ToggleButton>
  </div>
  <p>
    This is out of scope, so I cannot access the variable anymore! Quite
    reusable
  </p>
  <div>
    <ToggleButton let:toggle>
      <div class="no-select" class:blue={toggle}>
        {#if !toggle}
          <p>A second component starting with nothing</p>
        {:else}
          <p>And it's blue!</p>
        {/if}
        <code>toggle = {toggle}</code>
      </div>
    </ToggleButton>
  </div>
</div>

<style>
  .container > * + * {
    margin-top: 1rem;
  }
  .no-select * {
    user-select: none;
  }

  .red {
    color: red;
  }

  .blue {
    color: blue;
  }
</style>
