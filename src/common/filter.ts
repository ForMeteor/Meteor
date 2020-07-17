// 自定义过滤
import Vue from 'vue'
Vue.filter("toUpper",function(value:any, count:any){
    count = count?count:value.length-1
    return value.substr(0,count).toUpperCase()+value.substr(count);
});