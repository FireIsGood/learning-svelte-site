<script lang="ts">
  let name: string = "mom";
  let checked: boolean = false;
  let skillFactor: number = 1;
  const possibleSkill = ["Typing", "Eating", "Sleeping"];
  let specificSkill: Array<string> = [];
</script>

<div class="container">
  <div class="input-item">
    <input type="text" name="greet" bind:value={name} />
    <label for="greet">Hi {name ? name : "no one in particular"}!</label>
  </div>
  <div class="input-item">
    <input type="checkbox" name="skill" id="skill" bind:checked />
    <label for="skill">{checked ? "I am VERY skill" : "I am not skill"}</label>
  </div>
  {#if checked}
    <div class="input-item">
      <label>
        <input
          type="radio"
          name="skill-factor"
          bind:group={skillFactor}
          value={1}
        />
        Tier one skill
      </label>
    </div>
    <div class="input-item">
      <label>
        <input
          type="radio"
          name="skill-factor"
          bind:group={skillFactor}
          value={2}
        />
        Tier two skill
      </label>
    </div>
    <div class="input-item">
      <label>
        <input
          type="radio"
          name="silly-factor"
          bind:group={skillFactor}
          value={3}
        />
        Tier three skill
      </label>
    </div>
    {#each possibleSkill as skillCheckbox}
      <div class="input-item">
        <input
          type="checkbox"
          name={skillCheckbox}
          id={skillCheckbox}
          bind:group={specificSkill}
          value={skillCheckbox}
        />
        <label for={skillCheckbox}>{skillCheckbox}</label>
      </div>
    {/each}
    {#if skillFactor}
      <p>
        Your skill level is {skillFactor >= 3 ? "super high!" : skillFactor}
      </p>
    {/if}
    {#if specificSkill.length > 0}
      <p>
        And your skills are: {specificSkill.length === possibleSkill.length
          ? "Everything!"
          : specificSkill.join(" ")}
      </p>
    {/if}
  {/if}
</div>

<style lang="scss">
  .container > * + * {
    margin-top: 1rem;
  }
  .input-item {
    display: flex;
  }
  input[type="checkbox"],
  input[type="checkbox"] + label {
    cursor: pointer;
  }
</style>
