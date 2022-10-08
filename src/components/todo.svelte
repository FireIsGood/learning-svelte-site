<script lang="ts">
  type TodoItem = {
    done: boolean;
    task: string;
  };

  let todoItems: Array<TodoItem> = [
    { done: false, task: "Eat Breakfast" },
    { done: false, task: "Refill Water" },
    { done: false, task: "Fight God" },
  ];

  function addItem() {
    todoItems = [...todoItems, { done: false, task: "" }];
  }

  function clearItems() {
    todoItems = todoItems.filter((item) => !item.done);
  }
</script>

<div class="container">
  <div>
    <button on:click={addItem}>Add Item</button>
    <button on:click={clearItems}>Clear Completed Items</button>
  </div>
  <ul class="todo-list">
    {#each todoItems as item}
      <li>
        <input type="checkbox" bind:checked={item.done} />
        <input
          type="text"
          placeholder="What task?"
          bind:value={item.task}
          disabled={item.done}
        />
      </li>
    {/each}
  </ul>
  <div>
    {#each todoItems as item, i}
      <code>
        {i}:
        <span class={item.done ? "done" : "not-done"}>{item.done}</span>
        <span class="string">"{item.task}"</span>
      </code>
    {/each}
  </div>
</div>

<style lang="scss">
  .container > * + * {
    margin-top: 1rem;
  }
  .todo-list {
    display: flex;
    flex-direction: column;
    gap: 1ch;

    li {
      display: flex;
      gap: 1ch;
    }
  }

  code {
    display: block;
  }
  .done {
    color: green;
  }
  .not-done {
    color: red;
  }
  .string {
    color: lightsalmon;
  }
</style>
