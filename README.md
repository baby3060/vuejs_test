# vuejs_test
VUE JS 학습 테스트

## Folder

> 폴더 1
>> Hello Vue

> 폴더 2
>> Vue의 컴포넌트
- [X] 컴포넌트 생성
- [ ] 컴포넌트 간 데이터 이동(하위로는 속성값 전달, 상위에서는 이벤트 전달)
>>> props 지정 시(v-bind) new Vue의 components 전달이 안 되었다. Vue.component(전역)의 경우에는 정상적으로 넘어갔다.
>>> 하위 컴포넌트에 메소드를 매핑할 시(v-on:[메소드명]="[상위 메소드명]") 하위 컴포넌트의 메소드명에 대문자가 포함될 경우 $emit으로 불러올 수가 없었다(callPro).

> 폴더 3
