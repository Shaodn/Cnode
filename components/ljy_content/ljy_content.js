Vue.component('ljy', {
    props:['content'],
    //!!!在自定义组件里面=>data 必须是一个函数
    data() {
        return {
            num:''
        }
    },
    template:`<div class="all">
                    <div class="ljy_header">
                        <ul class="ljy_breadcrumb">
                            <li>
                                <a href="/">主页</a>
                                <span class="ljy_divider">/</span>
                            </li>
                        </ul>
                    </div>
                    <div class="ljy_userinfo">
                        <div class="ljy_user_avatar" >
                            <img v-if="content.data":src="content.data.avatar_url">
                             <a class="ljy_dark" v-if="content.data" v-html="content.data.githubUsername"></a>
                        </div>
                        <div class="ljy_user_profile" v-if="content.data" v-html="content.data.score">
                           积分
                        </div>
                        <p class="ljy_col_fade" v-if="content.data" v-html="content.data.create_at"></p>
                    </div>
                   
              </div>`,
    methods:{

    },
    computed:{

    }
});