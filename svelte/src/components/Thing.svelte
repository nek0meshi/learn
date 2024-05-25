<script lang="ts">
  import type { ThingType } from "$lib/thing";

  const emojis: Record<ThingType, string> = {
    apple: '🍎',
    banana: '🍌',
    carrot: '🥕',
    doughnut: '🍩',
    egg: '🥚'
  }

  export let name: ThingType;

  const emoji = emojis[name]
</script>

<p>{emoji} = {name}</p>
