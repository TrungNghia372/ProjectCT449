<template>  
    <div class="footer">
        <div class="footerSocical">
            <div class="footerContentSocical">
                <p>Thông tin liên hệ của chúng tôi</p>
            </div>
            <div class="footerIcon">
                <!-- facebook -->
                <a  class="btn text-white btn-floating m-1"
                    style="background-color: #3b5998;"
                    href="#!"
                    role="button">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <!-- Twitter -->
                <a class="btn text-white btn-floating m-1"
                    style="background-color: #55acee;"
                    href="#!"
                    role="button">
                    <i class="fab fa-twitter"></i>
                </a>
                <!-- Google -->
                <a  class="btn text-white btn-floating m-1"
                    style="background-color: #dd4b39;"
                    href="#!"
                    role="button">
                    <i class="fab fa-google"></i>
                </a>
                <!-- Instagram -->
                <a  class="btn text-white btn-floating m-1"
                    style="background-color: #ac2bac;"
                    href="#!"
                    role="button">
                    <i class="fab fa-instagram"></i>
                </a>
                <!-- Linkedin -->
                <a  class="btn text-white btn-floating m-1"
                    style="background-color: #0082ca;"
                    href="#!"
                    role="button">
                    <i class="fab fa-linkedin-in"></i>
                </a>
                <!-- Github -->
                <a  class="btn text-white btn-floating m-1"
                    style="background-color: #333333;"
                    href="#!"
                    role="button">
                    <i class="fab fa-github"></i>
                </a>
            </div>
        </div>
        <div class="footerContent">
            <div class="column footerRecomment">
                <h4>Giới thiệu về OceanBusiness</h4>
                <p>
                    Đây là một trang web thương mai điện tử bán đủ loại các sản phẩm như cá cảnh, cây thủy sinh, bệ cá,... Shop được thành lập ngày 20/11/2022, Với đội ngũ tư vấn chu đáo, nhiệt tình sẽ cung cấp những thông tin cần thiết cho khách hàng, phạm vi Shop buôn bán rộng khắp cả nước Việt Nam.
                </p>
            </div>
            <div class="column footerProducts">
                <h4>Sản phẩm</h4>
                <p>Cá nước ngọt</p>
                <p>Cá biển</p>
                <p>Cây thủy sinh</p>
                <p>Bệ Cá</p>
            </div>
            <div class="column footerLocation">
                <h4>Vị trí</h4>
                <p>Việt Nam</p>
                <p>Singapore</p>
                <p>Hàn Quốc</p>
                <p>Nhật Bản</p>
            </div>
            <div class="column footerContact">
                <h4>Liên Hệ</h4>
                <p class="Home">
                    xã Quốc Thái, huyện An Phú,tỉnh An Giang
                </p>
                <p class="Email">
                    huyb2012094@student.ctu.edu.vn
                </p>
                <p class="phone1">
                    0336070648
                </p>
                <p class="phone2">
                    0961974152
                </p>
            </div>
        </div>
        <div class="footerEnd">
            <p>
                <i class="fa-solid fa-copyright"></i>
                Design by Nguyen Gia Huy B2012094
            </p>
        </div>
    </div>
     

</template>
<script>

</script>
<style scoped>
    *{
        box-sizing: border-box;
    }
    .footer{
        background-color: rgba(0, 0, 0, 0.737);
        height:300px;
        width: 100%;
        /* padding:0px 90px; */
    }
    .footerSocical{
        padding-top: 15px;
        display: flex;
        align-items: flex-end;
        justify-content: space-around;
        /* padding: 15px 90px 0px 90px; */
    }
    .footerContentSocical{
        color:#fff;
    }
    .footerEnd{
        background-color: black;
        height:35px;
        width: 100%;
        color:#fff;
        font-size: 15px;
    }
    .footerEnd > p{
        text-align: center;
        padding-top:7px;
        margin-bottom: 0px;
    }

    .footerContent{
        border-top: 1px solid rgba(255, 255, 255, 0.444);
        color:#fff;
        display: flex;
        /* height:100%; */
        height:220px;
        overflow: hidden;
    }
    .column{
        padding: 10px;
        height: 300px
    }
    .column.footerRecomment{
        flex:3;
    }
    .column.footerProducts,
    .column.footerLocation{
        flex:1;
    }
</style>