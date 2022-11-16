<script lang="ts">
  let bg2Size: number = 1;
  let bg3Size: number = 1;
  let bg4Size: number = 1;

  let bg5Size: number = 1;
  let bg5Rotation: number = 0;

  let bg6Size: number = 1;
  let bg6Rotation: number = 0;
  let bg6RotationX1: number;
  let bg6RotationY1: number;
  let bg6RotationX2: number;
  let bg6RotationY2: number;

  $: {
    bg6RotationX1 = Math.sin(2 * Math.PI * ((bg6Rotation + 90) / 360));
    bg6RotationY1 = Math.cos(2 * Math.PI * ((bg6Rotation + 90) / 360));
    bg6RotationX2 = Math.sin(2 * Math.PI * ((bg6Rotation + 270) / 360));
    bg6RotationY2 = Math.cos(2 * Math.PI * ((bg6Rotation + 270) / 360));
  }

  let bg7Size: number = 1;
  let bg7Rotation: number = 0;
</script>

<div class="container">
  <div class="bg bg-1">
    <p>A subtle gradient</p>
    <p>
      Generated via
      <a href="https://www.schemecolor.com/" target="_blank">
        SchemeColor.com
      </a>
    </p>
  </div>
  <div class="bg bg-symbol bg-2" style="--bg-size: {bg2Size}rem">
    <p>A dot grid</p>
    <input
      type="range"
      name="bg-2-size"
      bind:value={bg2Size}
      min="1"
      max="5"
      step=".25"
    />
    <label for="bg-2-size">Scale</label>
  </div>
  <div class="bg bg-symbol bg-3" style="--bg-size: {bg3Size}rem">
    <p>A line grid</p>
    <input
      type="range"
      name="bg-3-size"
      bind:value={bg3Size}
      min="1"
      max="5"
      step=".25"
    />
    <label for="bg-3-size">Scale</label>
  </div>
  <div class="bg bg-symbol bg-4" style="--bg-size: {bg4Size}rem">
    <p>A dot and line grid with fake paralax</p>
    <input
      type="range"
      name="bg-4-size"
      bind:value={bg4Size}
      min="1"
      max="5"
      step=".25"
    />
    <label for="bg-4-size">Scale</label>
  </div>
  <p>And now with rotations</p>
  <div
    class="bg bg-symbol bg-5"
    style="--bg-size: {bg5Size}rem; --bg-rotation: {bg5Rotation}"
  >
    <p>A line grid with tiled rotations</p>
    <input
      type="range"
      name="bg-5-size"
      bind:value={bg5Size}
      min="1"
      max="5"
      step=".25"
    />
    <label for="bg-5-size">Scale</label>
    <input
      type="range"
      name="bg-5-rotation"
      bind:value={bg5Rotation}
      min="0"
      max="360"
      step="1"
    />
    <label for="bg-5-rotation">Rotation</label>
  </div>
  <div
    class="bg bg-symbol bg-6"
    style="--bg-size: {bg6Size}rem;
           --bg-rotation-x1: {bg6RotationX1};
           --bg-rotation-y1: {bg6RotationY1};
           --bg-rotation-x2: {bg6RotationX2};
           --bg-rotation-y2: {bg6RotationY2};"
  >
    <p>A dot grid with tiled rotations</p>
    <input
      type="range"
      name="bg-6-size"
      bind:value={bg6Size}
      min="1"
      max="5"
      step=".25"
    />
    <label for="bg-6-size">Scale</label>
    <input
      type="range"
      name="bg-6-rotation"
      bind:value={bg6Rotation}
      min="0"
      max="360"
      step="1"
    />
    <label for="bg-6-rotation">Rotation</label>
  </div>
  <p>
    Just realized that I can make this rotate correctly if I just switch to
    repeating gradients
  </p>
  <div
    class="bg bg-7"
    style="--bg-size: {bg7Size}; --bg-rotation: {bg7Rotation}"
  >
    <p>A line grid with tiled rotations</p>
    <input
      type="range"
      name="bg-7-size"
      bind:value={bg7Size}
      min="1"
      max="5"
      step=".25"
    />
    <label for="bg-7-size">Scale</label>
    <input
      type="range"
      name="bg-7-rotation"
      bind:value={bg7Rotation}
      min="0"
      max="1"
      step=".01"
    />
    <label for="bg-7-rotation">Rotation</label>
  </div>
</div>

<style lang="scss">
  :root {
    --bg-color: 33, 33, 33;
    --symbol-color: #474554;
    --symbol-color-alt: #324b4c;
    --transition-fast: 150ms ease-out;
  }

  // General Styles

  .container {
    margin-top: 1rem;

    > * + * {
      margin-top: 1rem;
    }
  }
  .bg {
    height: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: rgb(var(--bg-color));
    color: white;

    > * + *:not(label) {
      margin-top: 1em;
    }
  }
  .bg-symbol {
    --bg-size: 3rem;
    background-size: var(--bg-size) var(--bg-size);
    background-position: center;

    transition: background-size var(--transition-fast);

    > p {
      border-radius: 1ch;
      padding: 0 0.5ch;
      background-color: rgba(var(--bg-color), 0.4);
    }
  }

  label {
    font-size: 80%;
  }

  // Main Styles

  .bg-1 {
    background-image: linear-gradient(
      to right top,
      #1f1031,
      #071834,
      #001d30,
      #001f28,
      #0c2021,
      #0f2422,
      #152821,
      #1b2b21,
      #1f3320,
      #263a1d,
      #324117,
      #40470f
    );
  }

  .bg-2 {
    background-image: radial-gradient(var(--symbol-color) 10%, transparent 10%);
  }
  .bg-3 {
    $bg-gradient: transparent 48%, var(--symbol-color), var(--symbol-color),
      transparent 52%;

    background-image: linear-gradient($bg-gradient),
      linear-gradient(90deg, $bg-gradient);
  }
  .bg-4 {
    --bg-size-alt: calc(var(--bg-size) + 0.75rem);

    $bg-gradient: var(--symbol-color), transparent 4%, transparent 96%,
      var(--symbol-color);

    background-image: radial-gradient(
        var(--symbol-color-alt) 10%,
        transparent 10%
      ),
      linear-gradient($bg-gradient), linear-gradient(90deg, $bg-gradient);
    background-size: var(--bg-size-alt) var(--bg-size-alt),
      var(--bg-size) var(--bg-size), var(--bg-size) var(--bg-size);
  }

  .bg-5 {
    $bg-gradient: transparent 48%, var(--symbol-color), var(--symbol-color),
      transparent 52%;

    background-image: linear-gradient(
        calc(var(--bg-rotation, 0) * 1deg),
        $bg-gradient
      ),
      linear-gradient(calc((var(--bg-rotation, 0) + 90) * 1deg), $bg-gradient);
    background-size: var(--bg-size) var(--bg-size),
      var(--bg-size) var(--bg-size);
  }
  .bg-6 {
    $bg-gradient: var(--symbol-color) 10%, transparent 10%;

    background-size: calc(var(--bg-size) * 2) calc(var(--bg-size) * 2) !important;
    background-image: radial-gradient(
        circle at calc(var(--bg-rotation-x1) * 25% + 50%)
          calc(var(--bg-rotation-y1) * 25% + 50%),
        $bg-gradient
      ),
      radial-gradient(
        circle at calc(var(--bg-rotation-x2) * 25% + 50%)
          calc(var(--bg-rotation-y2) * 25% + 50%),
        $bg-gradient
      );
  }

  .bg-7 {
    $bg-gradient: transparent, transparent calc(var(--bg-size) * 0.48rem),
      var(--symbol-color), var(--symbol-color),
      transparent calc(var(--bg-size) * 0.52rem),
      transparent calc(var(--bg-size) * 1rem);

    background-image: repeating-linear-gradient(
        calc(var(--bg-rotation) * 0.25turn),
        $bg-gradient
      ),
      repeating-linear-gradient(
        calc(var(--bg-rotation) * 0.25turn + 0.25turn),
        $bg-gradient
      );
  }
</style>
