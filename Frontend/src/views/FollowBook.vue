<template>
    <div class="detail">
        <Header />
        <Nav />
    </div>
    <div class="detailbook mb-3">
        <div class="titlee">
            <h1 style="font-family:Verdana, Geneva, Tahoma, sans-serif">THÔNG TIN MƯỢN SÁCH</h1>
            <div class="search-box">
                <input type="text" class="search-input" placeholder="Tìm kiếm...">
                <i class="fa-solid fa-magnifying-glass"></i>

            </div>
        </div>
        <table class="book-info container">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên sách</th>
                    <th>Ngày mượn</th>
                    <th>Ngày trả</th>
                </tr>
            </thead>
            <tbody 
                v-for="(followbook,i) in listFollowBook">
                    <tr :key="i">
                        <td style="text-align: center;" >{{i+1}}</td>
                        <td>{{followbook.idProducts}}</td>
                        <td>{{ getCurrentDate(new Date(followbook.borrowedDate)) }}</td>
                        <td>{{ getCurrentDate(new Date(followbook.payDate)) }}</td>
                    </tr>
                    
            </tbody>
            
        </table>
    </div>
    <div>
        <Footer />
    </div>
</template>
<script>
    import Nav from '../components/nav.vue';
    import Footer from '../components/footer.vue';
    import Header from '../components/header.vue';
    import axios from 'axios';
    export default {
    components:{
            Nav,
            Footer,
            Header,
        },
    data() {
        return {
            listFollowBook: [],
        }
    },
    created(){
        this.getAllFollowBook()
    },
    methods: {
        async getAllFollowBook() {
            try {
                const result = await axios.get('http://localhost:4000/api/followBook/getallfollowbook')
                this.listFollowBook = result.data;
            }catch(err){
                console.log(err)
            }
        },
        // async getAFollowBook() {
        //     try {
        //         const result = await axios.get(`http://localhost:4000/api/book/${this.$route.params.id}`)
                
        //         return result;
        //     } catch (error) {
        //         console.log(error);
        //     }
        // },
        getCurrentDate(d) {
            let day = d.getDate();
            let month =  d.getMonth() + 1;
            let year = d.getFullYear();

            return `${day}/${month}/${year}`;
        },
    },
    watch: {
        '$route': function(){
            if(this.$route.name == 'publisher'){
                this.getAllFollowBook()
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
    background-color: rgba(79, 218, 111, 0.37);;
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
.book-followbook,
.book-year,
.book-description {
    margin-bottom: 5px;
}

.book-update,
.book-delete {
    text-decoration: none;
    color: rgba(79, 218, 111, 0.37);
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
    text-align: center;
    margin-top: 37px;
    width: 95%;
}

button {
    margin-top: 20px;
    background-color: rgba(79, 218, 111, 0.74);
    color: #000000;
    padding: 10px;
    border: none;
    cursor: pointer;
}


th,
td {
    border: 1.5px solid rgb(0, 0, 0);
}

.titlee {
    margin-top: 100px;
    text-shadow: 0 2px 2px #ffffff, 0 4px 4px #fff, 0 6px 6px rgba(79, 218, 111, 0.37);;
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
<!-- <style scoped>
    p{
        margin: 0px;
    }
    .news{ 
        color:#fff;

    }
    .generality{
     
        display: flex;
    }
    .contentNews{
        color:black !important;
        margin-top:39px;
        height: 100%;
        width: 50%;
        padding-bottom: 30px;
    
    }
    .titleNews{
        color: #000000;
        font-size: 30px;
        text-align:start;
        padding: 80px 0 0 0px;
        border-bottom: 2px solid #fff;
        margin: 0px 50px;
    }
    .listNews{
        width:100%;
        color:#fff;
    }
    .cardTitle{
        font-weight: bold;
        cursor: pointer;
    }
    .cardTitle>h4:hover{
        color:#0095a8;
        
    }
    .cardNews{
        margin: 20px 50px;
        height:100%;
        border-bottom: 2px solid #fff;
    }
    .cardMain{
        padding:10px;
        display: flex;
    }
    .cardDate{
        /* padding:70px 0 0 0; */
    }
    .cardDate > small{
        color:#0095a8;
    }
    .cardBody{
        padding:0px 10px;
    }

    .differenceNews{
        color:#fff !important;
        margin-top:90px;
        height: 100%;
        width: 50%;
        padding:30px 0;
    
    }
    .differenceNews div{
        padding:20px;
        width: 100%;
    }
    .differenceNews>div>img {
        padding:0px 20px;
        width:500px;
    }
    .differenceNews>div>div>img{
        padding:0px 10px;
    }
</style>

 -->
