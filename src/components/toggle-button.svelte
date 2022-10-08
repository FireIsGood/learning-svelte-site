<script>
  export let toggle = false;

  function toggleValue() {
    toggle = !toggle;
  }
</script>

<div on:click={toggleValue}>
  <slot {toggle} />
</div>
