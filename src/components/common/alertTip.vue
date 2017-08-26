 <template>
    <div class="alet_container">
        <div class="modal"></div>
	    <section class="tip_text_container">
            <p class="tip_text">{{alertText}}</p>
            <div class="confrim">
                <span @click="leftBtn" class="left_btn">取消</span>
                <span @click="rightBtn">确认</span>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
    	data () {
            return{
                positionY: 0,
                timer: null,
            }
        },
        mounted(){
      
        },
        props: ['alertText','leftBtn', 'rightBtn'],
        methods: {
            closeTip(){
                this.$emit('closeTip')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
	@keyframes tipMove{
       0%   { transform: scale(1) }
       35%  { transform: scale(.8) }
       70%  { transform: scale(1.1) }
       100% { transform: scale(1) }
    }
    .alet_container{
        z-index: 200;
        .modal{
            position: fixed;
            left: -10rem;
            top: -10rem;
            @include wh(20rem, 20rem);
            background-color: #ddd;
            opacity: 0.6;

        }
    }
    .tip_text_container{
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -1rem;
        margin-left: -1rem;
        width: 3.6rem;
        animation: tipMove .4s ;
        background-color: rgba(255,255,255,1);
        padding: 0.03rem;
        border-radius: 0.2rem;
        .tip_text{
            @include sc(.2rem, #333);
            font-weight: bold;
            line-height: .22rem;
            text-align: center;
            margin: 0.7rem 0;
            padding: 0 .1rem;

        }
        .confrim{
            width: 100%;
            display: flex;
            span{
                flex: 1;
                font-size: 0.2rem;
                width: 100%;
                text-align: center;
                line-height: 0.55rem;
                border-top: 0.02rem solid #ddd;
                border-bottom-left-radius: 0.04rem;
                border-bottom-right-radius: 0.04rem;
                color: $suspectRed;
            }
            .left_btn{
                border-right: 0.02rem solid #ddd;
                color: #569cff;
            }
        } 
    }
    
</style>
