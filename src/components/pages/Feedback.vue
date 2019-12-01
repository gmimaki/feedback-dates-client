<template>
    <div id="feedback">
        {{menOrWomen}}向けのフィードバック一覧
        <p>フィードバックを書く</p>
        <select v-model="selectedCategory">
            <option v-for="category in categories" v-bind:value="category.id">
                {{category.name}}
            </option>
        </select>
        <textarea v-model="feedbackText" placeholder="フィードバック"></textarea>
        <button v-on:click="submitFeedback">登録</button>
        <div>
            <ul>
                <li v-for="post in posts">
                    {{post.text}} {{post.postedAt}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import myheader from '../modules/myheader'
import axios from "axios"
import moment from "moment"
import { _ } from 'underscore'

export default {
    data() {
        return {
            feedbackText: "Hello World",
            categories: [{ id: 1, name: "付き合う前のデート"}],
            selectedCategory: 1,
            posts: []
        }
    },
    methods: {
        submitFeedback: function() {
            axios.post("http://localhost:3000/posts", {
                toWhom: this.$route.params.to === "men" ? 1 : 2,
                category: this.selectedCategory,
                text: this.feedbackText
            }, {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
        }
    },
    computed: {
        menOrWomen: function() {
            return this.$route.params.to === "men" ? "男性" : "女性";
        }
    },
    mounted() {
        axios.get("http://localhost:3000/categories")
        .then(res => (this.categories = res.data))
        .catch(error => console.log(error));

        const towhomParam = this.$route.params.to === "men" ? "1" : "2"
        axios.get(`http://localhost:3000/posts?towhom=${towhomParam}`)
        .then(res => {
            if (res.data && res.data.length) {
                _.each(res.data, (datum) => {
                    datum.postedAt = moment(datum.postedAt).format("YYYY年MM月DD日");
                });
                this.posts = res.data;
            }
        })
        .catch(error => console.log(error));
    },
    created() {
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
li {
    list-style-type: none;
}
</style>
