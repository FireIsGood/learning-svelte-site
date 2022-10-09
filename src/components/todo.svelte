<script lang="ts">
  let useLocalStorage: boolean = false;

  type TodoItem = {
    done: boolean;
    task: string;
  };

  let todoItems: Array<TodoItem> = [];
  let sessionItems: Array<TodoItem> = [
    { done: false, task: "Eat Breakfast" },
    { done: false, task: "Refill Water" },
    { done: false, task: "Fight God" },
  ];

  todoItems = sessionItems;

  // LS interaction

  $: {
    todoItems;
    if (useLocalStorage) {
      updateLS();
    }
  }

  function toggleLS() {
    useLocalStorage = !useLocalStorage;
    if (useLocalStorage) {
      todoItems = getItems();
    } else {
      todoItems = sessionItems;
    }
  }

  function getItems() {
    let LS = localStorage.getItem("todo");
    if (LS === null || LS === undefined || LS.toString() === "undefined")
      return [];
    let localStorageItems = JSON.parse(LS);
    return localStorageItems;
  }

  function updateLS() {
    localStorage.setItem("todo", JSON.stringify(todoItems));
    console.log("wow");
  }

  // Button Functions

  function addItem() {
    todoItems = [...todoItems, { done: false, task: "" }];
    updateLS();
  }

  function clearItems() {
    todoItems = todoItems.filter((item) => !item.done);
    updateLS();
  }
</script>

<div class="container">
  <div class="buttons">
    <button on:click={addItem}>Add Item</button>
    <button on:click={clearItems}>Clear Completed Items</button>
    <label>
      <input
        type="checkbox"
        class="local-storage-toggle"
        on:click={toggleLS}
        aria-label="Use Local Storage"
      />
      Use Local Storage
    </label>
    <p>{useLocalStorage}</p>
  </div>
  <ul class="todo-list">
    {#each todoItems as item}
      <li>
        <input
          type="checkbox"
          bind:checked={item.done}
          aria-label="Todo {item.task} Checkbox"
        />
        <input
          type="text"
          placeholder="What task?"
          bind:value={item.task}
          disabled={item.done}
          label="Todo List Item"
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

  .buttons {
    display: flex;
    gap: 0.25rem;

    & *:nth-child(2) {
      margin-right: auto;
    }

    label {
      display: flex;
      align-items: center;
      font-size: 0.75em;

      .local-storage-toggle {
        --checkbox-size: 1rem;
      }
    }
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
    color: chocolate;
  }
</style>
