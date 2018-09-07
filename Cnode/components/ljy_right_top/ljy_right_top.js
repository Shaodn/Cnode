Vue.component('ljy_right_top',{
    props:['content'],
    data() {
        return {
            num:''
        }
    },
    template:`
            <div class="right_all">
                     <div class="ljy_right_header">
                        <ul class="ljy_right_breadcrumb">
                            <a href="/">个人信息页</a>
                        </ul>
                    </div>
                    <div class="ljy_right_userinfo">
                        <div class="ljy_right_user_avatar" >
                            <img v-if="content.data" :src="content.data.avatar_url" class="user_avatar" title="XadillaX">
                             <a class="ljy_right_dark" v-if="content.data" v-html="content.data.githubUsername"></a>
                        </div>
                        <div class="ljy_right_user_profile" v-if="content.data" v-html="content.data.score">
                          积分
                        </div>
                    </div>
                   
              </div>
             `
})