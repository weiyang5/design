
<template>
  <div v-title data-title="学生就业网">
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
              <swiper-slide><img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.fr-trading.com%2F0%2F5_1019_1780158_1000_1000.jpg%3Ft%3D1575017026&refer=http%3A%2F%2Fimg1.fr-trading.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653234718&t=154940c75fd78a02b22b86dde80e0388"  width="350px" height="360px"> </swiper-slide>
              <swiper-slide><img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F052420110515%2F200524110515-2-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653234587&t=daf50faa20278bda29abf0e8c4412637" width="350px" height="360px"> </swiper-slide>
              <swiper-slide><img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F4k%2Fs%2F02%2F2109250135543096-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653234587&t=1f1962f2f97c332465979dada2080de5" width="350px" height="360px"> </swiper-slide>
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