<template>
    <div class="add">
      <Heading />
      <div class="container">
        <div class="titlee">
          <h1 style="font-family:Verdana, Geneva, Tahoma, sans-serif">CẬP NHẬT NHÀ XUẤT BẢN</h1>
        </div>
  
        <form action="" method="post">
          <div class="form-group">
            <label for="title">Tên nhà xuất bản:</label>
            <input type="text" name="title" id="title" class="form-control" v-model="name">
          </div>
          <div class="form-group">
            <label for="address">Địa chỉ:</label>
            <input type="text" name="address" id="address" class="form-control" v-model="address">
          </div>

          <div class="buttonbook">
            <button type="button" class="btn btn-info" style="background-color:coral;"
              @click="this.$router.push({ name: 'admin' });">Thoát</button>
            <button type="button" class="btn btn-info" @click="updatePublisher()">Cập nhật</button>
  
          </div>
  
        </form>
      </div>
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
      publisherItem: "",
      name: "",
      address: "" ,
    }
  },

  created(){
    this.getAPublisher()
  },
  watch: {
    // name : this.publisherItem.name,
    
  },
 
  methods: {
    async updatePublisher() {
      try {
        const result = await axios.put(`http://localhost:4000/api/publisher/${this.publisherItem._id}`, {
          name: this.name,
          address: this.address,
        });
        await Swal.fire({
          icon: "success",
          title: "CẬP NHẬT NHÀ XUẤT BẢN",
          text: "Cập nhật thành công!",
        });

      } catch (error) {
        console.log(error);
      }
    },

    async getAPublisher() {
      try {
        const result = await axios.get(`http://localhost:4000/api/publisher/${this.$route.params.id}`)
        this.publisherItem = result.data;
        this.name = result.data.name;
        this.address = result.data.address;
        
        return result;
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>
  
  <style scoped>
  .titlee {
    margin-top: 100px;
    text-shadow: 0 2px 2px #ffffff, 0 4px 4px #fff, 0 6px 6px #56b4df;
    padding-top: 25px;
    padding-bottom: 15px;
  }
  
  body {
    font-family: sans-serif;
  }
  
  .container {
    width: 615px;
    margin: 0 auto;
    box-shadow: 0px 0px 10px 3px #d8d4d4;
  }
  
  h1 {
    text-align: center;
    padding-top: 20px;
  }
  
  form {
    padding: 20px;
    border: 1px solid #ccc;
  }
  
  .form-group {
    font-size: 1.1rem;
    margin-bottom: 10px;
  }
  
  label {
    font-weight: bold;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
  }
  
  textarea {
    height: 200px;
  }
  
  button {
    margin-top: 20px;
    background-color: rgba(79, 218, 111, 0.7);
    color: #000000;
    padding: 10px;
    border: none;
    cursor: pointer;
    margin-right: 20px;
    margin-left: 20px;
  }
  
  .buttonbook {
    text-align: center;
    padding: 8px 16px;
  }
  
  .btn {
    width: 200px;
  }
  </style>