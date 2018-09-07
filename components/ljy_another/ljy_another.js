Vue.component('ljy-another', {
    props:['content'],
    //!!!在自定义组件里面=>data 必须是一个函数
    data() {
        return {
            num:''
        }
    },
    template:`<div class="ljy-replies">
                   <div class="ljy-header">
                        <span class="ljy-col-fade">查看最近参与的话题</span>
                    </div>
                    <div id="wrapper">
                        <div id="wrap-all" v-if="content.data" v-for="item of content.data.recent_replies">
                              <div class="left">
                                 <img :src="item.author.avatar_url">
                                 <span class="count"> 89 /  390</span>
                              </div>
                              <span class="title">{{item.title}}</span>
                              <img id="img" :src="item.author.avatar_url">
                        </div>
                    </div>
               </div>`,

});