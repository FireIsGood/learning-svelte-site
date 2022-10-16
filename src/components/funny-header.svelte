<script lang="ts">
  let left: Element;

  function handleMouse(e: Event) {
    const percent = e.clientX / window.innerWidth;
    left.style = `--percent: ${percent * 100}%`;
  }
  function handleTouch(e: Event) {
    const percent = Math.min(e.touches[0].clientX / window.innerWidth, 1);
    left.style = `--percent: ${percent * 100}%`;
  }
</script>

<section>
  <div class="left side" bind:this={left}>
    <h1 class="title">
      Make this website <br /> <span class="fancy">AWESOME</span>
    </h1>
  </div>
  <div class="right side">
    <h1 class="title">
      Make this website <br /> <span class="fancy">STYLISH</span>
    </h1>
  </div>
</section>
<svelte:window on:mousemove={handleMouse} on:touchmove={handleTouch} />

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Josefin+Sans&display=swap");

  .side {
    min-height: calc(100vh - var(--header-height));
    width: 100%;
    position: absolute;
    display: grid;
    place-items: center;
    overflow: hidden;
    font-size: clamp(1rem, 5vw, 4rem);
    text-align: center;
  }

  .left {
    z-index: 2;
    width: var(--percent, 50%);
    background-color: #fbe9e7;
    color: #d84315;
  }

  .right {
    background-color: #1565c0;
    color: #e3f2fd;
  }

  .title {
    margin-inline: 15vw;
    width: 70vw;
    font-family: "Josefin Sans", sans-serif;
  }

  .fancy {
    font-family: "Dancing Script", cursive;
  }
</style>
