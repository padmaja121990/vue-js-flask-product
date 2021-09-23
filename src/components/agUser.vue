<template>
    <ag-grid-vue style="width: 500px; height: 500px;"
        class="ag-theme-alphine"
        :columnDefs="columnDefs"
        :rowData="rowData">
    </ag-grid-vue>
</template>

<script>
import { AgGridVue } from "ag-grid-vue";
import Vue from "vue";
import 'ag-grid-enterprice'

export default{
    name:'agUser',
    data(){
        return{
            columnDefs: null,
            rowData: null
        }
    },
    components:{
        AgGridVue
    },
    beforeMount() {
        this.columnDefs = [
            { field: 'id' },
            {field:'userId',rowGroup: true, hide: true}
            { field: 'title' },
            { field: 'completed' }
        ];

        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(result => result.json())
            .then(rowData => this.rowData = rowData);
    }                     
}
</script>

<style scoped>


.grid {
    height: 255px;
}
</style>