<template>  
    <footer class="footer-distributed">

        <div class="footer-left">
    
          <h3><span style="font-family: 'Homemade Apple', cursive;">Book_TN372</span></h3>
    
          <p class="footer-company-name">Bản quyền thuộc về @QuachTrungNghia</p>
        </div>
    
        <div class="footer-center">
    
          <div>
            <i class="fa fa-map-marker"></i>
            <p><span>Đường 3/2</span> P. Xuân Khánh, Q. Ninh Kiều, TP. Cần Thơ</p>
          </div>
    
          <div>
            <i class="fa fa-phone"></i>
            <p>(+84) 326117003</p>
          </div>
    
          <div>
            <i class="fa fa-envelope"></i>
            <p><a href="hieub2005672@student.ctu.edu.vn">nghiab2005725@student.ctu.edu.vn</a></p>
          </div>
    
        </div>
    
        <div class="footer-right">
    
          <p class="footer-company-about">
            <span>Book_TN372</span>
            Đối với những cuốn sách hay, vấn đề không phải là bạn đọc xong bao nhiêu cuốn mà là bạn có thể đọc được bao nhiêu cuốn
          </p>
    
          <div class="footer-icons">
    
            <a href="#"><i class="fa-brands fa-facebook"></i></a>
            <a href="#"><i class="fa-brands fa-twitter"></i></a>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
            <a href="#"><i class="fa-brands fa-github"></i></a>
    
          </div>
    
        </div>
    
      </footer>
</template>
<script>

</script>
<style scoped>


@import url('https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap');
footer {
	text-decoration: none;
	background-color: rgba(0, 0, 0, 0.075);
}

.about-us p {
	text-align: justify;
}

.text-reset {
	text-decoration: none;
}

.address {
	background-color: rgba(0, 0, 0, 0.1);
}

.infomation {
	background-color: rgba(0, 0, 0, 0.075);
}


section {
	width: 100%;
	display: inline-block;
	background: hsl(0, 0%, 0%);
	height: 50vh;
	text-align: center;
	font-size: 22px;
	font-weight: 700;
	text-decoration: underline;
}

.footer-distributed {
	background-size: 100%;
	background-image: linear-gradient(to right, rgba(79, 218, 111, 0.37) 0%, #299e7b 100%);
	background-repeat: no-repeat;
	box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
	box-sizing: border-box;
	width: 100%;
	text-align: left;
	font: bold 16px sans-serif;
	padding: 55px 50px;
}

.footer-distributed .footer-left,
.footer-distributed .footer-center,
.footer-distributed .footer-right {
	display: inline-block;
	vertical-align: top;
}


.footer-distributed .footer-left {
	width: 40%;
}


.footer-distributed h3 {
	color: #000000;
	font: normal 36px 'Open Sans', cursive;
	margin: 0;
}

.footer-distributed h3 span {
	color: rgb(255, 255, 255);
}


.footer-distributed .footer-links {
	color: #000000;
	margin: 20px 0 12px;
	padding: 0;
}

.footer-distributed .footer-links a {
	display: inline-block;
	line-height: 1.8;
	font-weight: 400;
	text-decoration: none;
	color: inherit;
}

.footer-distributed .footer-company-name {
	color: #000000;
	font-size: 14px;
	font-weight: normal;
	margin: 0;
}


.footer-distributed .footer-center {
	width: 35%;
}

.footer-distributed .footer-center i {
	background-color: #33383b;
	color: #ffffff;
	font-size: 25px;
	width: 38px;
	height: 38px;
	border-radius: 50%;
	text-align: center;
	line-height: 42px;
	margin: 10px 15px;
	vertical-align: middle;
}

.footer-distributed .footer-center i.fa-envelope {
	font-size: 17px;
	line-height: 38px;
}

.footer-distributed .footer-center p {
	display: inline-block;
	color: #000000;
	font-weight: 400;
	vertical-align: middle;
	margin: 0;
}

.footer-distributed .footer-center p span {
	display: block;
	font-weight: normal;
	font-size: 14px;
	line-height: 2;
}

.footer-distributed .footer-center p a {
	color: rgb(0, 0, 0);
	text-decoration: none;
	;
}

.footer-distributed .footer-links a:before {
	content: "|";
	font-weight: 300;
	font-size: 20px;
	left: 0;
	color: #000000;
	display: inline-block;
	padding-right: 5px;
}

.footer-distributed .footer-links .link-1:before {
	content: none;
}


.footer-distributed .footer-right {
	width: 20%;
}

.footer-distributed .footer-company-about {
	line-height: 20px;
	color: #000000;
	font-size: 13px;
	font-weight: normal;
	margin: 0;
}

.footer-distributed .footer-company-about span {
	display: block;
	color: #000000;
	font-size: 14px;
	font-weight: bold;
	margin-bottom: 20px;
}

.footer-distributed .footer-icons {
	margin-top: 25px;
}

.footer-distributed .footer-icons a {
	display: inline-block;
	width: 35px;
	height: 35px;
	cursor: pointer;
	background-color: #33383b;
	border-radius: 2px;

	font-size: 20px;
	color: #ffffff;
	text-align: center;
	line-height: 35px;

	margin-right: 3px;
	margin-bottom: 5px;
}


@media (max-width: 880px) {

	.footer-distributed {
		font: bold 14px sans-serif;
	}

	.footer-distributed .footer-left,
	.footer-distributed .footer-center,
	.footer-distributed .footer-right {
		display: block;
		width: 100%;
		margin-bottom: 40px;
		text-align: center;
	}

	.footer-distributed .footer-center i {
		margin-left: 0;
	}

}
</style>