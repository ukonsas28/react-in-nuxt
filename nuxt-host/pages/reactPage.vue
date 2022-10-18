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
        console.log(result)
        result();
        const onNavigate = () => { this.$router.push('/test2') }
        window.onNavigate = onNavigate

    },
    components: {
        ReactApp
    }
}
</script>
