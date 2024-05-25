<script lang="ts">
  let m = { x: 0, y: 0 };

  function handleMove(event: MouseEvent) {
    m.x = Math.floor(event.clientX)
    m.y = Math.floor(event.clientY)
  }
</script>

<section>
  <h3>Pointer Move Event</h3>
  The pointer is at {m.x} x {m.y}
  <div on:pointermove={handleMove}>
  </div>
</section>

<style>
  div {
    background-color: aliceblue;
    width: 200px;
    height: 200px;
    padding: 1rem;
  }
</style>
