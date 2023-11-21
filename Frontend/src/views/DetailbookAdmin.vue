<template>
    <div class="detail">
        <Heading />
    </div>
    <div class="detailbook">
        <div class="titlee">
            <h1 style="font-family:Verdana, Geneva, Tahoma, sans-serif">THÔNG TIN SÁCH</h1>
            <div class="search-box">
                <input type="text" class="search-input" placeholder="Tìm kiếm...">
                <i class="fa-solid fa-magnifying-glass"></i>

            </div>
        </div>
        <table class="book-info">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên sách</th>
                    <th>Tác giả</th>
                    <th>Loại sách</th>
                    <th>Năm sản xuất</th>
                    <th>Số lượng</th>
                    <th>Mô tả sách</th>
                    <th>Cập nhật</th>
                    <th>Xóa</th>
                </tr>
            </thead>
            <tbody 
                v-for="(book,i) in listBooks">
                    <tr :key="i">
                        <td style="text-align: center;" >{{i+1}}</td>
                        <td>{{book.name}}</td>
                        <td>{{book.author}}</td>
                        <td>{{book.type}}</td>
                        <td style="text-align: center;">{{book.manufactureOfYear}}</td>
                        <td style="text-align: center;">{{book.quantity}}</td>
                        <td>{{book.description}}</td>
                        <td><button type="button" class="btn btn-info" @click="updateHandle(book)" >Cập nhật</button></td>
                        <td><button type="button" class="btn btn-info" style="background-color: tomato;" 
                            @click="deleteHandle(book._id)">Xóa</button></td>
                    </tr>
                    
            </tbody>
            
        </table>
    </div>
    <div>
        <Footer />
    </div>
</template>
<script>
import Heading from '../components/admin/heading.vue';
import Footer from '../components/admin/footer.vue';
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    components: {
        Heading,
        Footer,
    },
    data() {
        return {
            listBooks: [],
         
        }
    },
    created(){
        this.getAllBook()
    },
    props: [
        "bookUpdateHandle"
    ],
    methods: {
        async getAllBook(){
            try {
                const result = (await axios.get('http://localhost:4000/api/book/getallbooks'));
                this.listBooks = result.data;
                console.log(this.listBooks);
            } catch (error) {
                consCole.log(err)
            }
        },
        async updateHandle(data){
            this.$router.push({ name: 'updatebook' });
            console.log(data);
            // this.bookUpdateHandle(data);
        },
        async deleteHandle(bookid){
            try {
                const result = (await axios.delete(`http://localhost:4000/api/book/deletebook/${bookid}`));
                await Swal.fire({
                    icon: "success",
                    title: "XOÁ SÁCH",
                    text: "Sách đã được xóa thành công!",
                    });
                window.location.reload();
            } catch (error) {
                console.log(error);
            }
        }
    },
    watch: {
        '$route': function(){
            if(this.$route.name == 'book'){
                this.getAllBook()
            }
        }
    } 
}
</script>

<style scoped>



.detailbook{
    padding-top: 20px;
}

body {
    font-family: sans-serif;
    background-color: #fff;
}

header {
    background-color: #222;
    color: #fff;
    padding: 10px;
}

h1 {
    font-size: 3em;
    text-align: center;
}

table {
    width: 500px;
    margin: 0 auto;
}

th {
    text-align: center;
    background-color: #74daea;
    padding: 15px 10px;
    font-size: 1.1rem;

}

td {
    padding: 10px;
}
tbody:nth-child(odd){
    background-color: #ebe5e5;
}
tbody:nth-child(even){
    background-color: #ffffff;
}


.book-info {
    width: 500px;
    margin: 0 auto;
}

.book-title {
    font-size: 1.5em;
    margin-bottom: 10px;
}

.book-author,
.book-publisher,
.book-year,
.book-description {
    margin-bottom: 5px;
}

.book-update,
.book-delete {
    text-decoration: none;
    color: blue;
    cursor: pointer;
}

footer {
    background-color: #222;
    color: #fff;
    padding: 10px;
    bottom: 0;
    width: 100%;
}

.book-info {
    margin-top: 37px;
    width: 95%;
}

button {
    margin-top: 20px;
    background-color: #3a80f1;
    color: #fff;
    padding: 10px;
    border: none;
    cursor: pointer;
}


th,
td {
    border: 1.5px solid rgb(67, 136, 225);
}

.titlee {
    margin-top: 60px;
    text-shadow: 0 2px 2px #ffffff, 0 4px 4px #fff, 0 6px 6px #56b4df;
    padding-top: 20px;
}

.search-box {
    display: flex;
    width: 750px;
    margin: 0 auto;
    padding: 10px 15px;
    border: 1px solid #908d8d;
    border-radius: 40px;
    align-items: center;
    margin-top: 15px;
}

.search-input {
    width: 100%;
    height: 30px;
    font-size: 16px;
    padding: 5px 10px;
    border: 0;
    border-radius: 40px;
}

.fa-search {
    color: #000;
    font-size: 18px;
    float: right;
    margin-top: 5px;
}



</style>