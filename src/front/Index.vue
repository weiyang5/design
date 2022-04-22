
<template>
  <div v-title>
    <Header></Header>

    <!--焦点区-->
    <div class="main mar-20">
      <el-row :gutter="15">
        <el-col :span="16">
          <el-card>
            <my-tab :ids="[11,17]"></my-tab>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card>
            <swiper class="swiper" :options="swiperOption">
              <swiper-slide><img src="https://www.freecatphotoapp.com/your-image.jpg"> </swiper-slide>
              <swiper-slide><img src="https://www.freecatphotoapp.com/your-image.jpg"> </swiper-slide>
              <swiper-slide><img src="https://www.freecatphotoapp.com/your-image.jpg"> </swiper-slide>
              <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
              <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
              <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
            </swiper>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <!--二层区域-->
    <div class="main mar-20">
      <el-row :gutter="15">
        <el-col :span="8">
          <my-card :channelId="18"></my-card>
        </el-col>
        <el-col :span="8">
          <my-card :channelId="21"></my-card>
        </el-col>
        <el-col :span="8">
          <el-card>
            <el-calendar v-model="value"></el-calendar>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <!--广告图片区-->
<!--    <div class="main mar-20">-->
<!--      <img src="../assets/images/middle.gif" width="1200px">-->
<!--    </div>-->


    <!--三层区域-->
    <div class="main mar-20">
      <el-row :gutter="15">
        <el-col :span="8">
          <my-card :channelId="22"></my-card>
        </el-col>
        <el-col :span="8">
          <my-card :channelId="30"></my-card>
        </el-col>
        <el-col :span="8">
          <my-card :channelId="16"></my-card>
        </el-col>
      </el-row>
    </div>

    <Footer></Footer>

  </div>

</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import '../assets/css/styles.css'
import Header from "@/front/Header";
import Footer from "@/front/Footer";
import MyCard from "@/front/MyCard";
import MyTab from "@/front/MyTab";
export default {
  name: "Index",
  components: {MyTab, MyCard, Footer, Header,Swiper,SwiperSlide},
  data() {
    return {
      swiperOption: {
        spaceBetween: 30,
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      value: new Date(),
    }
  }
}
</script>

<style scoped>

</style>