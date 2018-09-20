var vm=new Vue({
    el:"#app",
    data:{
            author:"科比",
            authorHtml: "<strong>科比</strong>",
            task:{
                name:'',//内容为空
                id:100,
                date:"Just Now",
                finished:false,
                deleted:false
            },
        list:[
            { name: " Vue前篇：ES6初体验 & 模块化编程", id: 9585766, date: "2018年9月5日", finished: false, deleted: true },//我们在这里定义一个删除的true
            { name: "Vue前篇：JS对象&字面量&this", id: 9580807, date: "2018年9月4日", finished: false, deleted: false },
            { name: " VUE 计划书 & 我的前后端开发简史", id: 9577805, date: "2018年9月3日", finished: false, deleted: false },
            { name: " DTOs 对象映射使用，项目部署Windows+Linux完整版", id: 3800, date: "2018年9月1日", finished: false, deleted: false },
            { name: " 三种跨域方式比较，DTOs(数据传输对象)初探", id: 4200, date: "2018年8月31日", finished: false, deleted: false },
            { name: "VUE 计划书 & 我的前后端开发简史", id: 3200, date: "2018年9月2日", finished: false, deleted: false },
            { name: "VUE 实战预告", id: 3200, date: "2018年9月12日", finished: false, deleted: false }
        ],
        list3:[
            { name: "Html5" },
            { name: "CSS3" },
            { name: "JAVASCTIPT" },
            { name: "SQL" },
            { name: "C#" },
            { name: "Wechat小程序" },
            { name: "ASP.NET" }
        ],
        isShow:false,
        computed:{
            listSearch:function(){
                //为什么要存这个this呢，因为filter过滤器会改变this的指向
                var that=this;
                return this.list.filter(function(item){
                     //简单的 判断文章name是否包含 input中的值，因为双向绑定，所以也就是 task.name
                    return item.name.indexOf(that.$data.task.name)>=0;
                })
            }
        },
        beforCreate:function(){
            console.group('beforeCreate 创建前状态===============》');
            console.log("%c%s","color:red","el   :"+this.$el);
            console.log("%c%s","color:red","data   :"+this.$data);
            console.log("%c%s","color:red","author   :"+this.$author);
        }
    }
})
Vue.component('footer-vue',{
    template:` <div id="footer-vue">
    <p>2018 <a href="#">LZ's Blog</a> - Hosted by <a href="#" style="font-weight: bold">Coding Pages</a></p>
    <p>
        <a href="#">京ICP备00000000号</a>
    </p>
</div>`
})