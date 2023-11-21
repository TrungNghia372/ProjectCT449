<template>
    <div class="rule">
        <Heading />
        <div class="rulebook">
            <div class="titlee">
                <h1 style="font-family:Verdana, Geneva, Tahoma, sans-serif">NỘI QUY, QUY ĐỊNH</h1>

            </div>
<div class="noiquy">
    <h2>1. Quy định chung</h2>
            <ul>
                <li>Tất cả mọi người đều phải tuân thủ nội quy, quy định của thư viện.</li>
                <li>Thư viện mở cửa từ thứ hai đến thứ sáu, trong giờ hành chính.</li>
                <li>Để sử dụng tài liệu tại thư viện, bạn cần đăng ký thẻ thư viện.</li>
                <li>Bạn có thể mượn tài liệu tại thư viện với thời hạn nhất định.</li>
                <li>Bạn cần trả tài liệu đúng hạn, nếu không sẽ bị phạt.</li>
                <li>Bạn cần giữ gìn vệ sinh thư viện, không gây ồn ào, mất trật tự.</li>
            </ul>
            <h2>2. Quy định về việc sử dụng tài liệu</h2>
            <ul>
                <li>Bạn chỉ được sử dụng tài liệu tại thư viện.</li>
                <li>Bạn không được mang tài liệu ra khỏi thư viện khi chưa được phép.</li>
                <li>Bạn cần giữ gìn tài liệu cẩn thận, không làm hư hỏng.</li>
                <li>Bạn cần trả lại tài liệu đúng hạn.</li>
            </ul>
            <h2>3. Quy định về việc sử dụng máy tính, thiết bị điện tử</h2>
            <ul>
                <li>Bạn chỉ được sử dụng máy tính, thiết bị điện tử tại các khu vực quy định.</li>
                <li>Bạn không được sử dụng máy tính, thiết bị điện tử để truy cập vào các trang web không phù hợp.</li>
                <li>Bạn cần giữ gìn vệ sinh máy tính, thiết bị điện tử.</li>
            </ul>
            <h2>4. Quy định về việc ăn uống, hút thuốc</h2>
            <ul>
                <li>Bạn không được ăn uống, hút thuốc trong thư viện.</li>
                <li>Bạn cần giữ gìn vệ sinh khu vực ăn uống.</li>
            </ul>
            <h2>5. Quy định về việc sử dụng điện thoại di động</h2>
            <ul>
                <li>Bạn chỉ được sử dụng điện thoại di động ở chế độ im lặng.</li>
                <li>Bạn không được sử dụng điện thoại di động để quay phim, chụp ảnh trong thư viện.</li>
            </ul>

</div>
            

        </div>




        <Footer />
    </div>
</template>
  
<script>
import Heading from '../components/admin/heading.vue';
import Footer from '../components/admin/footer.vue';

export default {
    components: {
        Heading,
        Footer,
    },
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>
  
<style scoped>
.titlee {
    margin-top: 55px;
    text-shadow: 0 2px 2px #ffffff, 0 4px 4px #fff, 0 6px 6px #56b4df;
    padding-top: 25px;
    padding-bottom: 15px;
}

h1 {
    text-align: center;
    padding-top: 20px;
}

header {
    background-color: #ccc;
    padding: 10px;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

li {
    margin-bottom: 10px;
    padding-left: 70px;
}

a {
    text-decoration: none;
}

.noiquy{
    padding-left: 140px;

}




</style>