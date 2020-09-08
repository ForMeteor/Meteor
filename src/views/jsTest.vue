<!--  -->
<template>
  <div>
      <div class="tty" v-bl></div>
      <div class="tty" v-te:ko.a.b="msg"></div>
      <div class="tty">{{msg|toUpper}}</div>
      <div class="tty">{{gugu}}</div>
      <div class="ttt" @click="change">
        {{mile}}
      </div>
  </div>
</template>

<script>
import { BG } from '@/common/constant'
export default {
  name: 'jsTest',
  components: {
  },
  data () {
    return {
      msg: 'ttt',
      mile: [{
        a: 1,
        b: 2,
        c: 3
      }, {
        a: 21,
        b: 22
      }],
      gugu: {
        name: "2",
        msg: "22"
      }
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
    console.log(BG)
    console.log(this.$store)
    this.$store.commit("changeName")
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
      this.gugu.msg = "11"
      this.$set(this.mile, 0, { a: 2222 })
      console.log(this.mile)
    }
  }
}

</script>
<style  scoped>
.tty{
    width: 60px;text-align: center;
    height: 60px;line-height: 60px;
}
.ttt{
  width: 200px;
  height: 100px;
}
</style>
