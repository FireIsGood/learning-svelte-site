<script lang="ts">
  import { onMount } from "svelte";
  import Cube from "@components/cube.svelte";

  let dragArea: Element;

  let startPosX: number = 0;
  let startPosY: number = 0;
  let newPosX: number = 0;
  let newPosY: number = 0;

  let offsetX: number = 0;
  let offsetY: number = 0;

  let dragging: boolean = false;

  const handleDrag = function (e: PointerEvent) {
    // console.log(e?.offsetX, e?.offsetY);
    newPosX = startPosX - e.clientX;
    newPosY = startPosY - e.clientY;
  };

  onMount(() => {
    dragArea.addEventListener("pointerdown", (e: PointerEvent) => {
      dragging = true;
      startPosX = e.clientX;
      startPosY = e.clientY;

      // Handle mouse movements
      dragArea.addEventListener("pointermove", handleDrag);

      // Handle mouse up
      dragArea.addEventListener("pointerup", () => {
        dragArea.removeEventListener("pointermove", handleDrag);

        dragging = false;
        offsetX += newPosX;
        offsetY += newPosY;
        newPosX = 0;
        newPosY = 0;
      });
    });
  });
</script>

<section
  style={`--offset-x: ${-(offsetX + newPosX)}px;
   --offset-y: ${-(offsetY + newPosY)}px`}
  bind:this={dragArea}
>
  <div class="info">
    <p>drag: {dragging}</p>
    <div>
      <p>x: {Math.floor(newPosX)}</p>
      <p>y: {Math.floor(newPosY)}</p>
    </div>
    <div>
      <p>𐤃x: {Math.floor(offsetX)}</p>
      <p>𐤃y: {Math.floor(offsetY)}</p>
    </div>
  </div>
  <div class="item"><p>I'm an item!</p></div>
  <div class="cube-area">
    <Cube rotateY={-offsetX / 6} rotateX={offsetY / 6} />
  </div>
</section>

<style lang="scss">
  section {
    position: relative;
    display: grid;
    height: 100vh;
    overflow: hidden;
    user-select: none;
    cursor: grab;
    touch-action: none; // this is kinda jank because there's technically more page but otherwise it won't click
    background-image: radial-gradient(
      var(--theme-card-alt) 10%,
      transparent 10%
    );
    background-size: 1.25rem 1.25rem;

    &:active {
      cursor: grabbing;
    }
  }

  .info {
    grid-area: 1 / -1;
    place-self: start;
    display: grid;
    grid-template-areas:
      "top top"
      "left right";
    min-width: 20ch;
    margin: 1ch;
    padding: 1ch;
    box-shadow: 2px 2px 4px 1px #0004;
    background-color: var(--theme-card);

    *:nth-child(1) {
      grid-area: top;
    }
  }
  .item {
    position: absolute;
    padding: 1ch;
    background-color: var(--theme-button);

    transform: translate(25ch, 4ch);
    translate: var(--offset-x, 0) var(--offset-y, 0);
  }
  .cube-area {
    grid-area: 1 / -1;
    place-self: center;
    position: relative;
    width: 30vw;
    display: grid;
    place-content: center;
    aspect-ratio: 1 / 1;
  }
</style>
