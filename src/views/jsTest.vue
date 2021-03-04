<!--  -->
<template>
  <div>
      <div class="tty" v-bl @click="ifShow = !ifShow"></div>
      <div class="tty" v-te:ko.a.b="msg"></div>
      <div class="flexTest" v-show="ifShow">
        <div class="flexTestItem"></div>
        <div class="flexTestItem"></div>
        <div class="flexTestItem"></div>
      </div>
      <div class="tty">{{msg|toUpper}}</div>
      <div class="tty">{{gugu}}</div>
      <div class="tty" @click="change">
        {{mile}}
      </div>
  </div>
</template>

<script>
// import { BG } from '@/common/constant'
import { adminTable, adminQuery } from '@/api/admin'
export default {
  name: 'jsTest',
  components: {
  },
  data () {
    return {
      ifShow: true,
      msg: 'ttt',
      mile: [{
        a: 1,
        b: 2,
        c: 3
      }, {
        a: 21,
        b: 22
      }],
      gugu: [1, 2, 3, 4]
    }
  },
  directives: {
    te: function (el, binding) {
      const s = JSON.stringify
      el.style.background = '#ff5511'
      el.innerHTML = 'sss'
      console.log(s(binding.name))
      console.log(s(binding.value))
      console.log(s(binding.expression))
      console.log(s(binding.arg))
    }
  },

  computed: {},

  mounted () {
    // console.log(0.1+0.2!==0.3)
    console.log(process.env)
    console.log(process.env.VUE_APP_REQ_API)
    console.log(this.$store)
    // adminQuery({
    //   username:'meteor'
    // }).then((res) => {
    //   console.log(res)
    // }).catch()
    console.log(this.$store)
    const yu = 1111
    const ty = {
      a: 1,
      b: 2
    }
    const words = { yu, ty }
    words.ty.a = 2
    console.log(ty)
    class Person {
      constructor (name, age, sex) {
        this.name = name
        this.age = age
        this.sex = sex
      }

      introduce () {
        console.log(this)
        console.log(this.name + this.age + this.sex)
        return 2
      }

      greet () {
        console.log('hello i am ' + this.name)
        return 1
      }
    }
    Person.prototype.getLink = function () {
      return 'ccc'
    }
    class Son extends Person {
      constructor (x, y, z, job) {
        super(x, y, z)
        this.job = job
      }

      pla () {
        console.log()
      }
    }
    const lili = new Person('lili', 18, 'female')
    lili.introduce()
    lili.greet()
    const lier = new Son()
    const lilei = new Son('lilei', 19, 'male', 'hunt')
    const likan = new Son('likan', 99, 'male', 'sleep')
    lilei.__proto__.cake = function () {
      console.log(this.age + 'gogogo')
    }
    lilei.cake()
    likan.cake()
    console.log(lier)
  },

  methods: {
    change () {
      this.gugu[0] = 22
      // this.$set(this.gugu, 0, 22)
    }
  }
}

</script>
<style  scoped>
.tty{
    width: 600px;text-align: center;
    height: 60px;line-height: 60px;
}
.ttt{
  width: 200px;
  height: 100px;
}
.flexTest{
  display: flex;
  height:60px;
}
.flexTestItem{
  flex: 1;
  border:1px solid black;
}
</style>
