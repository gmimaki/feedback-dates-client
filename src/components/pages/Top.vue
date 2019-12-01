<template>
    <div id="top">
        <div>
            <router-link :to="{ name: 'feedback', params: { to: 'men' }}"><p>男性へのフィードバック</p></router-link>
            <router-link :to="{ name: 'feedback', params: { to: 'women' }}"><p>女性へのフィードバック</p></router-link>
        </div>
        <div>
            <ul>
                <li v-for="post in posts">
                    {{post.categoryName}}
                    {{post.text}} ({{post.id === 1 ? "男性へ" : "女性へ"}}) {{post.postedAt}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import moment from "moment"
import { _ } from 'underscore'

export default {
    name: "App",
    data() {
        return {
            posts: []
        }
    },
    methods: {
        clear() {
            this.msg = ""
        }
    },
    mounted() {
        axios.get("http://localhost:3000/posts")
        .then(res => {
            if (res.data && res.data.length) {
                _.each(res.data, (datum) => {
                    datum.postedAt = moment(datum.postedAt).format("YYYY年MM月DD日");
                });
                this.posts = res.data;
            }
        })
        .catch(error => console.log(error))
    },
    created() {
    }
}
</script>

<style scoped>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
li {
    list-style-type: none;
}
</style>
