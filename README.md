# vuejs_test
VUE JS 학습 테스트

## Folder

> 폴더 1
>> Hello Vue

> 폴더 2
>> Vue의 컴포넌트
- [X] 컴포넌트 생성
- [X] 컴포넌트 간 데이터 이동(하위로는 속성값 전달, 상위에서는 이벤트 전달)
- [ ] axios 사용

>>> props 지정 시(v-bind) new Vue의 components 전달이 안 되었다. Vue.component(전역)의 경우에는 정상적으로 넘어갔다.
>>> 하위 컴포넌트에 메소드를 매핑할 시(v-on:[메소드명]="[상위 메소드명]") 하위 컴포넌트의 메소드명에 대문자가 포함될 경우 $emit으로 불러올 수가 없었다(callPro).

> 폴더 3
>> 라우팅
>>> IE 11에서는 VueRouter에서 routes를 선언하는 부분, Vue에서 router를 매핑하는 부분을 따로 지정해주지 않으면 안 됨.

<pre>
  <code>
    const router = new VueRouter({
      routes : routes
    })

    const app = new Vue({
      router : router
    }).$mount('#app')
  </code>
</pre>


> 폴더 4
>> 이벤트 및 반응성(computed, watch)
