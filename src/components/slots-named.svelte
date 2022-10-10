<script>
  let foo = 0;
</script>

<div class="container">
  <div class="tile">
    <slot name="tile-1">Nothing Placed Here</slot>
  </div>
  <div class="tile">
    <slot name="tile-2">Nothing Placed Here</slot>
  </div>
  <div class="tile">
    <slot name="tile-3">Nothing Placed Here</slot>
  </div>
  <div class="tile blue">
    <slot name="tile-4">Nothing Placed Here</slot>
  </div>
  <p class="clickable tile" on:click={() => (foo += 1)}>
    And this is text inside the Svelte component with a variable: <br />
    <code>Foo = {foo}</code><br />
    You can click on this to increase the number
  </p>
  <slot />
</div>

<style lang="scss">
  .container {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .tile {
    min-height: 4rem;
    padding: 1rem;
    display: flex;
    place-content: center;
    text-align: center;
    background-color: var(--theme-card);
  }

  .blue {
    color: blue;
  }

  .clickable {
    display: block;
    user-select: none;
    background-color: var(--theme-button);

    code {
      color: orangered;
    }

    &:hover {
      background-color: var(--theme-button-hover);
    }
    &:active {
      background-color: var(--theme-button-active);
    }
  }
</style>
