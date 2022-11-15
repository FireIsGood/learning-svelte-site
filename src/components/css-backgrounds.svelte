<script lang="ts">
  let bg2Size: number = 1;
  let bg3Size: number = 1;
  let bg4Size: number = 1;
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
    <p>A dot grid</p>
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
    <p>A dot grid</p>
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
</div>

<style lang="scss">
  :root {
    --bg-color: 33, 33, 33;
    --symbol-color: #474554;
    --symbol-color-alt: #324b4c;
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

    transition: background-size 150ms ease-out;

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
    background-image: radial-gradient(var(--symbol-color) 5%, transparent 10%);
  }
  .bg-3 {
    $bg-gradient: transparent 48%, var(--symbol-color), var(--symbol-color),
      transparent 52%;

    background-image: linear-gradient($bg-gradient),
      linear-gradient(90deg, $bg-gradient);
  }
  .bg-4 {
    --bg-size-alt: calc(var(--bg-size) + 0.75rem);

    $bg-gradient: var(--symbol-color), transparent 2%, transparent 98%,
      var(--symbol-color);

    background-image: radial-gradient(
        var(--symbol-color-alt) 5%,
        transparent 10%
      ),
      linear-gradient($bg-gradient), linear-gradient(90deg, $bg-gradient);
    background-size: var(--bg-size-alt) var(--bg-size-alt),
      var(--bg-size) var(--bg-size), var(--bg-size) var(--bg-size);
  }
</style>
