<template>
  <section class="main-section readpage">
    <ul class="readpage-list">
      <li class="readpage-item">
        <time class="readpage-item-date" datetime="2001-05-15T19:00">May 15</time>
        <h2 class="readpage-item-title">On the immaturity of tokenized value...</h2>
        <p class="readpage-item-text">Pursuing value in an age of borderless-ness, experimental monetary policies, costless forks and unlimited innovation.</p>
        <a class="readpage-item-link" href="#">Read</a>
      </li>
      <li class="readpage-item">
        <time class="readpage-item-date" datetime="2001-05-15T19:00">May 15</time>
        <h2 class="readpage-item-title">On the immaturity of tokenized value...</h2>
        <p class="readpage-item-text">Pursuing value in an age of borderless-ness, experimental monetary policies, costless forks and unlimited innovation.</p>
        <a class="readpage-item-link" href="#">Read</a>
      </li>
    </ul>
  </section>
</template>

<script>
  // https://medium.com/paradigma-capital/latest?format=json
  import axios from 'axios'
  export default {
    name: 'PageRead',
    created () {
      axios.get('https://medium.com/feed/paradigma-capital')
        .then(function (response) {
          console.log(response)
        })

    }
  }
</script>
