<script lang="ts">
  import { hideIncorrect, search } from "@components/event-store";
  $: {
    if (selected) {
      const searchTerm = selected.toLowerCase();
      search.set(searchTerm);
    } else {
      search.set("?");
    }
  }

  let selected: string;
</script>

<div class="container">
  <input type="text" bind:value={selected} placeholder="Type a name..." />
  <div class="check">
    <label>
      <input type="checkbox" bind:checked={$hideIncorrect} />
      Hide Incorrect Items
    </label>
  </div>
</div>

<style>
  .container {
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    place-content: center;
    justify-content: center;
  }

  label {
    display: flex;
    justify-content: center;
  }
</style>
