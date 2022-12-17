<script lang="ts">
  import MiniSearch from "minisearch";

  type Card = {
    id: Number;
    text: String;
  };

  export let cards: Card[] = [{ id: 0, text: "This should never appear" }]; // items to be displayed
  let cardsFiltered = [];
  let input = "";

  // Import minisearch json and options
  export let serializedIndex;
  export let miniSearchOptions;
  const miniSearch = MiniSearch.loadJSON(serializedIndex, miniSearchOptions);

  let suggestion: String = "";
  let showAll: Boolean = false;
  let cutoffLengthBase: number = 24;
  let cutoffLengthSearch: number = 12;

  $: {
    if (input !== "") {
      suggestion = miniSearch
        .search(input, { prefix: true })
        .map((index) => cards[index.id]);
      cardsFiltered = suggestion;
    } else {
      suggestion = "";
      cardsFiltered = cards;
    }
  }
</script>

<div class="container">
  <label for="search">Search {cards.length} items:</label>
  <input
    name="search names"
    id="search"
    type="text"
    bind:value={input}
    on:input={() => (showAll = false)}
    placeholder="Type a name..."
  />
  <p>
    <strong>MiniSearch indexed:</strong>
    {suggestion !== ""
      ? suggestion.map((item) => item.text).join(", ")
      : "No suggestions..."}
  </p>
  <ul class="card-list">
    {#each showAll ? cardsFiltered : cardsFiltered.slice(0, input === "" ? cutoffLengthBase : cutoffLengthSearch) as card}
      <li class="card">
        <img src="https://via.placeholder.com/100" alt="" />
        <p>{card.text}</p>
      </li>
    {/each}
  </ul>
  {#if cardsFiltered.length >= 24 && !showAll}
    <button class="show-all" on:click={() => (showAll = true)}>Show all</button>
  {/if}
</div>

<style lang="scss">
  .container {
    max-width: var(--main-width);
    margin-inline: auto;

    > * + * {
      margin-top: 0.5rem;
    }
  }

  .card-list {
    --grid-width: 6rem;
    display: grid;
    gap: 0.25rem;
    padding: 0.25rem;
    grid-template-columns: repeat(auto-fit, var(--grid-width));
    justify-content: center;

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
        padding-inline: 1ch;
        font-size: smaller;
      }
    }
  }

  .show-all {
    display: block;
    margin-inline: auto;
  }
</style>
