<script lang="ts">
  type Card = {
    text: string;
  };

  export let cards: Card[] = []; // items to be displayed
  let cardsFiltered = [];
  let input = "";

  $: {
    if (input !== "") {
      cardsFiltered = cards
        .filter(
          (card) =>
            card.text.slice(0, input.length).toLowerCase() ===
            input.toLowerCase()
        )
        .sort((card) =>
          card.text.toLowerCase() === input.toLowerCase() ? -1 : 1
        );
    } else {
      cardsFiltered = cards;
    }
  }
</script>

<div class="container">
  <input type="text" bind:value={input} />
  <p>{input !== "" ? input : "There is no input"}</p>
  <div class="card-list">
    {#each cardsFiltered as card}
      <div class="card">
        <img src="https://via.placeholder.com/100" alt="" />
        <p>{card.text}</p>
      </div>
    {/each}
  </div>
  <p>{cardsFiltered.map((card) => card.text)}</p>
</div>

<style lang="scss">
  .container > * + * {
    margin-top: 1rem;
  }

  .card-list {
    --grid-width: 6rem;
    display: grid;
    gap: 0.25rem;
    padding: 0.25rem;
    grid-template-columns: repeat(auto-fit, var(--grid-width));
    justify-content: center;

    outline: 1px solid black;

    .card {
      min-height: 6rem;
      width: var(--grid-width);
      border-radius: 0.5rem;
      overflow: hidden;

      background-color: var(--theme-card);
      text-align: center;
      cursor: pointer;

      img {
        display: block;
        user-drag: none;
        user-select: none;
        pointer-events: none;
        width: 100%;
        aspect-ratio: 1 / 1;
      }
      p {
        margin-block: 0.2rem;
      }
    }
  }
</style>
