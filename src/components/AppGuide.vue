<script>
import {h} from 'vue'
import Terms from './Terms'
import Feedback from './Feedback'
export default {
    render(){
        var termsList = h('p','No Terms');
        const agreeButton = h('input',{id:'check_agree',type:'checkbox', modelValue:this.checked, onClick:this.cliclAgree});
        const submitButton = h('button', {for:'check_agree',onClick:this.clickSubmit},'SUBMIT');
        var compMap = [];
         if(this.termList.length){
             termsList = this.termList.map((termItem) => {
                return h('li', termItem.term)
            })
             compMap.push(termsList);
            compMap.push(agreeButton);
            compMap.push(h('label','AGREE'));
            compMap.push(h('br'));
            compMap.push(submitButton);
         }
         compMap.push(h('br'));
         compMap.push(h('br'));
        return h('div',{id:'app_guide'}, [
            h('h2', this.title), 
            h(Terms,{appName:this.terms}),
            h('ul', compMap),
            h(Feedback)
            ])
    },
    name: 'AppGuide',
    data(){
        return {
            title: 'App Guide',
            terms: 'User App',
            termList: [
                {id:1, term: 'allow local access'},
                {id:2, term: 'show in desktop'}
            ],
            checked: false
        }
    },
    components: {
        Terms,
        Feedback
    },
    methods:{
        cliclAgree(){
            this.checked = !this.checked;
        },
        clickSubmit(){
        this.$emit('submitted', this.checked);
        }
    }

}
</script>

<style>
div #app_guide {
    position: absolute;
    right: 700px;
    width: 317px;
    border-left-style: outset;
    border-bottom-style: outset;
    background-color: grey;
}

</style>