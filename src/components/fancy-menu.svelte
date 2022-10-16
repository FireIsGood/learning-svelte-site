<script lang="ts">
  import type { GetPictureResult } from "@astrojs/image/dist/lib/get-picture";
  import Picture from "./picture.svelte";
  export let bgPicture: GetPictureResult;

  let focusIndex = 0;

  function setIndex(i: number) {
    focusIndex = i;
  }
</script>

<section>
  <div class="menu" data-active-index={focusIndex}>
    <a href="#" on:mouseenter={() => setIndex(0)}>Home</a>
    <a href="#" on:mouseenter={() => setIndex(1)}>Users</a>
    <a href="#" on:mouseenter={() => setIndex(2)}>About</a>
    <a href="#" on:mouseenter={() => setIndex(3)}>Contact</a>
  </div>
  <div class="grid-bg" />
  <div class="image-bg">
    <Picture picture={bgPicture} />
  </div>
</section>

<style lang="scss">
  section {
    position: relative;
    display: grid;
    place-items: center;
    min-height: 100vh;
    background-color: #e8eaf6;
    overflow: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  // Main styles

  .menu {
    z-index: 2;
    display: flex;
    flex-direction: column;
    font-size: clamp(2rem, 7vw, 4rem);
    color: #424242;
    text-shadow: 0 0 8px white;

    &:hover > * {
      opacity: 0.5;
    }

    &:hover ~ .grid-bg {
      --zoom: 0.8;
      opacity: 0.5;
    }
    &:hover ~ .image-bg {
      --zoom: 0.9;
      opacity: 0.25;
    }

    > * {
      transition: opacity 250ms ease;

      &:hover {
        transition: opacity 50ms ease;
        opacity: 1;
      }
    }

    &[data-active-index="0"] ~ .grid-bg {
      background-position-y: -15%;
    }
    &[data-active-index="1"] ~ .grid-bg {
      background-position-y: -5%;
    }
    &[data-active-index="2"] ~ .grid-bg {
      background-position-y: 5%;
    }
    &[data-active-index="3"] ~ .grid-bg {
      background-position-y: 15%;
    }

    &[data-active-index="0"] ~ .image-bg {
      translate: 0 -6%;
    }
    &[data-active-index="1"] ~ .image-bg {
      translate: 0 -2%;
    }
    &[data-active-index="2"] ~ .image-bg {
      translate: 0 2%;
    }
    &[data-active-index="3"] ~ .image-bg {
      translate: 0 6%;
    }
  }

  .grid-bg {
    --zoom: 1;
    z-index: 1;
    position: absolute;
    height: 100%;
    width: 100%;

    background-image: radial-gradient(#78909c 10%, transparent 15%);
    background-size: calc(var(--zoom) * 5vmin) calc(var(--zoom) * 5vmin);
    background-position-y: 50%;
    background-position-x: 50%;
    transition: 400ms ease;
  }

  .image-bg {
    --zoom: 1;
    opacity: 0.5;
    z-index: 0;
    position: absolute;
    height: 130%;
    scale: calc(var(--zoom) * 120%);
    translate: 0 50%;
    transition: 600ms ease;

    picture {
      object-fit: cover;
    }
  }
</style>
