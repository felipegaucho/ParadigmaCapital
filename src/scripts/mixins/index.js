import { mapGetters } from 'vuex'

const mixins = {
    computed: {
        ...mapGetters(['getSomething'])
    },
    methods: {
        hello (message) {
            console.log("mixins", message)
        }
    },
}

export default mixins
