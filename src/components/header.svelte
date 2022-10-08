<script>
  let showLinks = true;
  function toggleLinks() {
    showLinks = !showLinks;
  }
</script>

<header>
  <div class="header-main">
    <div>
      <slot name="header-main">Header</slot>
    </div>
    <button on:click={toggleLinks}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="currentColor"
        class="bi bi-list"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    </button>
  </div>
  {#if showLinks}
    <div>
      <slot name="header-links" />
    </div>
  {/if}
</header>

<style lang="scss">
  .header-main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 1rem;
    height: 4rem;
    background-color: var(--theme-header);
  }

  button {
    padding: 8px;
    border: none;
    background-color: transparent;

    &:hover {
      background-color: var(--theme-header-button-hover);
    }
    &:active {
      background-color: var(--theme-header-button-active);
    }

    svg {
      display: block;
    }
  }
</style>
