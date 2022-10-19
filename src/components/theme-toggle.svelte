<script lang="ts">
  import { onMount } from "svelte";
  let root;
  let dark: boolean = isDarkMode();

  onMount(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        darkMode = e.matches;
      });
  });

  $: toggleDark(dark);

  function toggleDark(mode = false) {
    if (import.meta.env.SSR) return;
    root = document.documentElement;

    if (mode === false) {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
    localStorage.setItem("darkMode", dark.toString());
  }

  function isDarkMode() {
    if (import.meta.env.SSR) {
      return false;
    }

    const localData = window.localStorage.getItem("darkMode");
    if (localData) {
      return "true" === localData;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
</script>

<button
  title="Toggle dark mode"
  on:click|preventDefault={() => {
    dark = !dark;
  }}
>
  <div class="icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 36 36"
      class="sun"
      ><path
        fill="currentColor"
        d="M18 6.31a1 1 0 0 0 1-1v-3.4a1 1 0 0 0-2 0v3.4a1 1 0 0 0 1 1Z"
        class="clr-i-outline clr-i-outline-path-1"
      /><path
        fill="currentColor"
        d="M18 29.69a1 1 0 0 0-1 1v3.4a1 1 0 0 0 2 0v-3.4a1 1 0 0 0-1-1Z"
        class="clr-i-outline clr-i-outline-path-2"
      /><path
        fill="currentColor"
        d="M8.32 9.74A1 1 0 0 0 9 10a1 1 0 0 0 .71-.29a1 1 0 0 0 0-1.42L7.33 5.92a1 1 0 0 0-1.41 1.41Z"
        class="clr-i-outline clr-i-outline-path-3"
      /><path
        fill="currentColor"
        d="M27.68 26.26a1 1 0 1 0-1.42 1.42l2.41 2.4a1 1 0 0 0 .71.3a1 1 0 0 0 .7-.3a1 1 0 0 0 0-1.41Z"
        class="clr-i-outline clr-i-outline-path-4"
      /><path
        fill="currentColor"
        d="M6.31 18a1 1 0 0 0-1-1h-3.4a1 1 0 0 0 0 2h3.4a1 1 0 0 0 1-1Z"
        class="clr-i-outline clr-i-outline-path-5"
      /><path
        fill="currentColor"
        d="M34.09 17h-3.4a1 1 0 1 0 0 2h3.4a1 1 0 0 0 0-2Z"
        class="clr-i-outline clr-i-outline-path-6"
      /><path
        fill="currentColor"
        d="m8.32 26.26l-2.4 2.41a1 1 0 0 0 .7 1.71a1 1 0 0 0 .71-.3l2.41-2.4a1 1 0 1 0-1.42-1.42Z"
        class="clr-i-outline clr-i-outline-path-7"
      /><path
        fill="currentColor"
        d="M27 10a1 1 0 0 0 .71-.29l2.4-2.41a1 1 0 0 0 0-1.41a1 1 0 0 0-1.41 0l-2.41 2.4a1 1 0 0 0 0 1.42A1 1 0 0 0 27 10Z"
        class="clr-i-outline clr-i-outline-path-8"
      /><path
        fill="currentColor"
        d="M18.13 7.75a10.13 10.13 0 1 0 10 10.13a10.08 10.08 0 0 0-10-10.13Zm0 18.25a8.13 8.13 0 1 1 8-8.12a8.08 8.08 0 0 1-8 8.12Z"
        class="clr-i-outline clr-i-outline-path-9"
      /><path fill="none" d="M0 0h36v36H0z" /></svg
    >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 36 36"
      class="moon"
    >
      <path
        fill="currentColor"
        d="M29.2 26.72a12.07 12.07 0 0 1-6.3-22.28A13.68 13.68 0 0 0 19.49 4a14 14 0 0 0 0 28a13.82 13.82 0 0 0 10.9-5.34a11.71 11.71 0 0 1-1.19.06Z"
        class="clr-i-solid clr-i-solid-path-1"
      />
      <path fill="none" d="M0 0h36v36H0z" />
    </svg>
  </div>
</button>

<style lang="scss">
  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 100vh;
    outline: 0;

    &:hover {
      background-color: var(--theme-header-button-hover);
    }
    &:active {
      background-color: var(--theme-header-button-active);
    }
  }

  // Main Styles

  .sun,
  .moon {
    display: none;
  }

  .icon {
    transition: color 200ms ease;
    font-size: 2rem;
  }

  :global(:root.dark) {
    .icon {
      color: #1e88e5;
    }
    .moon {
      display: block;
    }
  }
  :global(:root:not(.dark)) {
    .icon {
      color: #e65100;
    }
    .sun {
      display: block;
    }
  }
</style>
