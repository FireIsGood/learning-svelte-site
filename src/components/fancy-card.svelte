<script lang="ts">
  let showText: boolean = false;

  function typewriter(node: Node, { speed = 1 }) {
    const valid =
      node.childNodes.length === 1 &&
      node.childNodes[0].nodeType === Node.TEXT_NODE;

    if (!valid)
      throw new Error(
        "This transition only works on elements with a single text node"
      );

    const text = node.innerText;
    const duration = text?.length * speed;

    return {
      duration,
      tick: (t) => {
        const i = Math.trunc(text.length * t);
        node.textContent = text.slice(0, i);
      },
    };
  }
</script>

<section>
  <label>
    <input type="checkbox" bind:checked={showText} />
    Show Text
  </label>
  {#if showText}
    <p in:typewriter={{ speed: 15 }}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas vel
      commodi maiores rerum atque, ut iusto sapiente provident tempora nam!
    </p>
  {/if}
</section>

<style>
  section > * + * {
    margin-top: 1rem;
  }

  label {
    display: flex;
    align-items: center;
  }
</style>
