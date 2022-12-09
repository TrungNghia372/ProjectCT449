<template>
    <div class="cardMain">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col"
              
            >
                <div class="card h-100"
              
                >
                    <img :src= class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{item.name}}</h5>
                        <p class="card-text">{{item.description}}</p>
                    </div>
                    <div class="card-footer">
                        <p class="card-price">
                            {{item.price}}
                            <span class="card-price-vnd">vnd</span>
                        </p>
                        <p class="card-quantity">Còn lại :{{item.quantity}}</p>
                    </div>
                    <button class="card-btn-order">Thêm vào giỏ hàng</button>

                </div>

            </div>
        </div> 
    </div>
</template>
<script>

</script>
<style scoped>

</style>