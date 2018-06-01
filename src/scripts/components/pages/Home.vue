<template>
    <section class="main-section homepage">
        <h1 class="main-section-title homepage-title">paradigma capital</h1>
        <p class="homepage-text">Pursuing outstanding returns through thesis-driven investment and the active management required by the world’s first truly 24/7 asset class.</p class="homepage-text">
        <form
          class="homepage-form"
          action="https://video.us15.list-manage.com/subscribe/post?u=3363d6d446b55bfeec00cb430&id=d12f33be57"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
        >
          <label class="homepage-form-label" for="mce-EMAIL">
            <span class="homepage-form-label-text">Want updates?</span>
            <input class="homepage-form-input" type="email" value="" name="EMAIL" id="mce-EMAIL" placeholder="your@email.here" />
          </label>
          <button class="homepage-form-button" type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe">SIGN UP</button>

          <div class="visually-hidden" id="mce-responses">
            <div class="visually-hidden" id="mce-error-response" style="display:none"></div>
            <div class="visually-hidden" id="mce-success-response" style="display:none"></div>
            <input class="visually-hidden" type="text" name="b_3363d6d446b55bfeec00cb430_d12f33be57" tabindex="-1" value="">
          </div>
        </form>
    </section>
</template>

<script>
    import mixins from '../../mixins'
    export default {
        name: 'PageHome',
        mixins: [mixins],
        methods: {
          submitForm (e) {
            console.log(e)
          }
        }
    }
</script>
