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
>> 이벤트 및 반응성(computed, watch), 지시자 사용
>>> computed와 method는 캐싱의 유무와 값을 바꾸는 데 있어서 수동으로 호출할지(메소드), 자동으로 수정될지(computed)의 차이이다.
>>> watch는 감시할 데이터를 지정하는 것이고(명령형), computed는 계산해야 하는 목표 데이터를 정의(선언형)
>>> watch 속성은 HTTP 요청 후의 값 변경에서 사용
>>> v-if는 DOM 상 아예 지워버리는 것. v-show는 <code>display : none</code>으로만 설정
>>> 버튼의 v-on 바인딩 시 해당 프로퍼티의 명을 그냥 작성하면 됨(this 붙일 필요 X)

> 폴더 5
>> HTTP 통신
>>> Axios 추천(Vue 창시자의 추천, vue-resource 라고도 있는데 이슈는 많지만, 전혀 안 고쳐지고 있음)

> 폴더 6
>> 싱글 파일 컴포넌트 체계(할일 관리 앱, CLI)
>>> 폴더 7 학습(Vuex) 후 기존 코드에서 상태관리 추가해보기

> 폴더 7
>> Vuex 이해, Vuex 예제 https://github.com/vuejs/vuex/tree/dev/examples/shopping-cart 학습 후 폴더 6에 Vuex 적용해보기
