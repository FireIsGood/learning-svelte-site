<script lang="ts">
  let particles: Particle[] = [];
  const textList: string[] = [
    "amogus",
    "sussy",
    "imposter",
    "drippin",
    "dumpy",
  ];

  interface Particle {
    text: string;
    id: number;
    z: number;
    hue: number;
    x: number;
    y: number;
  }

  const emitParticle = (e?: Element) => {
    // Make sure keyboard events are space or enter

    if (e) {
      if (["Space", "Enter"].includes(e.code)) {
        e.preventDefault();
      } else {
        return;
      }
    }

    // Create a particle
    const z = Math.floor(Math.random() * 50);
    const angle = Math.floor(Math.random() * 360);
    const velocity = 2;
    const direction = {
      x: Math.cos(angle) * velocity,
      y: Math.sin(angle) * velocity,
    };

    particles = [
      ...particles,
      {
        text: textList[Math.floor(Math.random() * textList.length)],
        id: Math.random(),
        hue: angle,
        x: direction.x,
        y: direction.y,
        z: z,
      },
    ];
    let particleReset = window.setTimeout(() => {
      particles.shift();
      particles = particles;
    }, 1000);
  };
</script>

<div class="container">
  <div class="img-area">
    <button
      class="img-container"
      on:click={() => emitParticle()}
      on:keydown={(e) => emitParticle(e)}
    >
      Among Us
    </button>
    {#each particles as particle (particle.id)}
      <div
        class="particle"
        style="--x-direction: {particle.x}; --y-direction: {particle.y}; --hue-rotate: {particle.hue}; --z: {particle.z}"
      >
        <img src="/learning-svelte-site/assets/mogus.gif" alt="" />
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  // General Styles
  .container {
    margin-top: 1rem;

    > * + * {
      margin-top: 1rem;
    }
  }
  img {
    width: 100%;
    display: block;
    user-select: none;
    -webkit-user-drag: none;
  }

  // Main styles
  .img-area {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50vh;

    img {
      width: 64px;
    }
  }
  .img-container {
    width: clamp(150px, 5vw, 400px);
    border: none;
    user-select: none;
  }

  .particle {
    z-index: var(--z);
    position: absolute;
    animation: particle 1000ms forwards ease-out;
    pointer-events: none;
    user-select: none;
    font-size: 2em;
    text-shadow: 0 0 10px red;

    filter: hue-rotate(calc(var(--hue-rotate, 0) * 1deg));
  }
  @keyframes particle {
    0% {
      translate: 0;
    }
    25% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      translate: calc(var(--x-direction) * 100px)
        calc(var(--y-direction) * 100px);
    }
  }
</style>
