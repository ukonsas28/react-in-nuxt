<template>
    <div>
        <h1>React Page</h1>
        <ReactApp />
    </div>
</template>

<script>
import ReactApp from '../components/ReactApp.vue'

export default {

    async mounted() {

        if (!window.isInitReact) {
            await reactApp.init({});
            window.isInitReact = true
        }

        const result = await reactApp.get("./ReactApp");
        const module = await result();
        module.mountReact()
        const onNavigate = (path) => { this.$router.push(path) }
        window.onNavigate = onNavigate

    },
    components: {
        ReactApp
    }
}
</script>
