<script lang="ts">
  export let rotateX: number = 15;
  export let rotateY: number = 15;
</script>

<div
  class="container"
  style={`--rotate-x: ${rotateX}deg; --rotate-y: ${rotateY}deg;`}
>
  <div class="cube">
    <span style="--index:1;">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/9/9a/Among_Us_cover_art.jpg"
        alt=""
      />
    </span>
    <span style="--index:2;">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Typical_internet_meme_image_format.svg/1280px-Typical_internet_meme_image_format.svg.png"
        alt=""
      />
    </span>
    <span style="--index:3;">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/1/18/Deep_fried_meme.jpg"
        alt=""
      />
    </span>
    <span style="--index:4;">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/67/Rat_diabetic.jpg"
        alt=""
      />
    </span>
    <span class="top">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/a/a5/Blaulicht_DVD_cover.jpg"
        alt=""
      />
    </span>
    <span class="bottom">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Farmer_meme_with_apostrophe.jpg/1920px-Farmer_meme_with_apostrophe.jpg"
        alt=""
      />
    </span>
  </div>
</div>

<style lang="scss">
  .container {
    --cube-width: 15vw;
    width: var(--cube-width);
    height: var(--cube-width);
  }
  .cube {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 150ms ease;
    transform: rotateX(var(--rotate-x)) rotateY(var(--rotate-y));

    > span {
      position: absolute;
      width: 100%;
      height: 100%;
      background: radial-gradient(aquamarine, black);

      transform: rotateY(calc(90deg * (var(--index, 0) - 1)))
        translateZ(calc(var(--cube-width) / 2));

      > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        object-fit: cover;
        user-select: none;
        -webkit-user-drag: none;
      }

      &.top {
        transform: rotateX(90deg) translateZ(calc(var(--cube-width) / 2));
      }
      &.bottom {
        transform: rotateX(-90deg) translateZ(calc(var(--cube-width) / 2));
      }
    }
  }
</style>
