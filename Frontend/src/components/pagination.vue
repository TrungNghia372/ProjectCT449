<template>
    <div class="v-pagination_container">
        <div class="v-pagination-left">
            <span>Total: {{totalRecord}} sản phẩm</span>
        </div>
        <div class="v-pagination-right">
            <div class="v-pagination_right-record"></div>
            <div class="v-pagination_right-page">
                <ul class="v-pagination">
                    <li class="v-pagination_prev" 
                        @click="changePage('prev')"
                        >
                        <i class="fa-solid fa-caret-left"></i>
                        <i class="fa-solid fa-caret-left"></i>
                    </li>
                   
                    <li class="v-pagination_item"
                        v-for="(page,i) in pages" 
                        :key="i" 
                        :class="{ active : page == pageNumber }"
                       
                        @click="changePage(page)"
                        >
                        {{ page }} 
                    </li>

                    <li class="v-pagination_after"
                        @click="changePage('after')"
                        >
                        <i class="fa-solid fa-caret-right"></i>
                        <i class="fa-solid fa-caret-right"></i>
                    </li>
                </ul>
            </div>
            
        </div>
    </div>
    <!-- <p>111</p> -->
</template>
<script>

   export default {
    props: {
        pageNumber: {
            type: Number,
            default: 1,
        },
        pageSize: {
            type: Number,
            default: 10,
        },
        totalRecord: {
            type: Number,
            default: 0,
        }
    },
    computed: {
        // tong so trang
        totalPage(){
            return  Math.ceil(this.totalRecord / this.pageSize);
        },
        // Tinh toan hien thi trang
        pages(){
            let pages =[];
            for (let i = 1; i <= this.totalPage; i++) {
                if (i==1 || i== this.totalPage || (i<=this.pageNumber + 2  && i>=this.pageNumber - 2)){
                    pages.push(i);
                } else if (i == this.pageNumber + 3 || i == this.pageNumber - 3) {
                    pages.push('...');
                } 
            }
            return pages;
        }
    },
    methods: {
        // chuyen doi trang
        changePage(page){
            if (page == 'prev' && this.pageNumber <= 1) {
                return;
            }
            if (page == 'after' && this.pageNumber >= this.totalPage) {
               
                return;
            } 
            if (page == 'after')
            {
                page = this.pageNumber + 1;
            }
            if (page == 'prev')
            {
                page = this.pageNumber - 1;
            }
            if (page == '...') return;
            // // Cap nhat lai trang
            this.$emit('update:pageNumber', page);
            // console.log(page);
        }
    }
  
   }
</script>
<style lang="css"  scoped>
.v-pagination_container{
    /* position: absolute; */
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color:#fff;
    font-size: 20px;
    padding:10px 0px;
}
.v-pagination-left{

}
.v-pagination-right{
    display: flex;
    align-items: center;
}
.v-pagination_right-record{

}
.v-pagination_right-page{

}
.v-pagination{
    display: flex;
    list-style: none;
    /* align-items: center; */
}
.v-pagination_prev,
.v-pagination_after{
 cursor: pointer;
 padding: 0 6px;
}
.v-pagination_item{
    padding:0px 6px;
    cursor: pointer;
   
}
.active{
    border: 1px solid rgb(187, 179, 179);
    font-weight: bold;
}

</style>