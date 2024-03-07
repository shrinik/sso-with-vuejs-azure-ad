<template>
    <div>
        Image List
        <button @click="getData">Get Data</button>
    </div>
</template>

<script>
import { getFilesList } from '../api/axios'
export default {
    name: 'ImageList',
    methods: {
        getData() {
            getFilesList()
        }
    }
}
</script>