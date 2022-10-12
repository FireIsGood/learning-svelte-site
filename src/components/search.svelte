<script lang="ts">
  import type { Item } from "@scripts/types";
  import { removeSpace } from "@scripts/slugGen";

  export let items: Array<Item> = [];
  let filteredItems: Array<Item> = items;

  let input: string = "";
  let selected: string = "";
  let hideIncorrect: boolean = false;

  $: {
    selected = removeSpace(input);
    const s = selected;
    if (s.length > 0) {
      filteredItems = items
        .filter(
          (item) =>
            item.key.slice(0, s.length) === s.slice(0, s.length) ||
            !hideIncorrect
        )
        .sort((a, b) => (b.key === s ? 1 : -1));
    } else {
      filteredItems = items;
    }
    items.map((item) => {
      item.exactMatch = item.key === s ? true : false;
    });
  }
</script>

<div>
  <div class="input-container">
    <input type="text" bind:value={input} placeholder="Type a name..." />
    <label>
      <input type="checkbox" bind:checked={hideIncorrect} />
      Hide Incorrect Items
    </label>
  </div>
  <p>Input is: <code>{selected}</code></p>
  <p>
    Items are: <code>{filteredItems.map((item) => item.key).join(", ")}</code>
  </p>
  <ul class="item-grid">
    {#each filteredItems as item}
      <li>
        <p>{item.text}</p>
        <img src={item.image} alt="this should be here" />
        {#if item.exactMatch}
          <p class="green">That's me!</p>
        {:else}
          <p class="red">That's not me</p>
        {/if}
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  // General Styles

  li {
    margin-top: 1rem;
    background-color: var(--theme-card);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1rem;
  }

  label {
    display: flex;
    justify-content: center;
  }

  code {
    color: orangered;
  }

  img {
    display: block;
  }

  // Main Styles

  .input-container {
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    place-content: center;
    justify-content: center;
  }

  .item-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .red {
    color: red;
  }
  .green {
    color: forestgreen;
  }
</style>
