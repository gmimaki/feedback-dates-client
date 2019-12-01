<template>
    <div id="app">
        <!--
        <p v-if="msg.length > 0">
            {{msg}}
        </p>
        <p v-else>
            no-text
        </p>
        <input type="text" v-model="msg">
        <button @click="clear()">clear</button>
        -->
        <!--
        <div>
            <router-link to="/feedback/men"><p>男性へのフィードバック</p></router-link>
            <router-link to="/feedback/women"><p>女性へのフィードバック</p></router-link>
        </div>
        -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            msg: "Hello World"
        }
    },
    methods: {
        clear() {
            this.msg = ""
        }
    },
    created() {
        /*
        fetch("http://www.geonames.org/postalCodeLookupJSON?postalcode=10504&country=US")
            .then(response => {
                return response.json()
            })
            .then(json => {
                this.msg = json.postalcodes[0].adminName1
            })
            .catch(() => {
            });
            */
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
