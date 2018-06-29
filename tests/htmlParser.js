const parser = require('../lib/htmlParser');

const html = `
<div class="mod_topic_wrap">
<dl class="topic_wrap clearfix">
    <dt class="topic_l">
    <div data-username="" class="user_head"><a href="#" rel="nofollow" target="_blank" class="user_head_box"><img src="//avatar.csdn.net/3/7/2/2_wang_kai_7.jpg" class="avatar"></a>
        <div class="user_material">
            <div class="user_material_bg">
                <dl class="user_material_c">
                    <dt class="fl"><a href="//my.csdn.net/wang_kai_7" target="_blank"><img src="//avatar.csdn.net/3/7/2/2_wang_kai_7.jpg" class="avatar_104"></a></dt>
                    <dd>
                        <ul class="topic_list">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </dd>
                    <dd class="more_topic_wrap"></dd>
                    <dd class="fun_dd">
                    </dd>
                </dl>
            </div>
        </div>
    </div>
    <div class="user_nick_name">
        <div class="nick_name csdn_recom"><a href="#">CSDN推荐</a></div>
    </div>
    </dt>
    <dd class="topic_r">
        <div class="control clearfix">
            <div class="control_l fl">
                <span class="reply_intro">CSDN今日推荐</span>
            </div>
        </div>
        <div class="recom_wrap">
            <ul class="recom_list clearfix">
                        <li data-mod="popu_592" data-dsm="post" data-poputype="feed" data-feed-show="false">
                            <em>⋅</em>
                            <a href="https://blog.csdn.net/happy_fb/article/details/77950028" target="_blank" title="EDA与VHDL作业（2）">EDA与VHDL作业（2）</a>
                        </li>
                        <li data-mod="popu_592" data-dsm="post" data-poputype="feed" data-feed-show="false">
                            <em>⋅</em>
                            <a href="https://blog.csdn.net/sun124608666/article/details/72846615" target="_blank" title="H5识别二维码问题">H5识别二维码问题</a>
                        </li>
                        <li data-mod="popu_592" data-dsm="post" data-poputype="feed" data-feed-show="false">
                            <em>⋅</em>
                            <a href="https://blog.csdn.net/wangwenjunsw/article/details/5551864" target="_blank" title="同步和异步有何异同,在什么情况下分别使用他们?">同步和异步有何异同,在什么情况下分别使用他们?</a>
                        </li>
                        <li data-mod="popu_592" data-dsm="post" data-poputype="feed" data-feed-show="false">
                            <em>⋅</em>
                            <a href="https://blog.csdn.net/qq_21170031/article/details/51613421" target="_blank" title="H5本地存储大小">H5本地存储大小</a>
                        </li>
                        <li data-mod="popu_592" data-dsm="post" data-poputype="feed" data-feed-show="false">
                            <em>⋅</em>
                            <a href="https://blog.csdn.net/testasda/article/details/19511903" target="_blank" title="同步和异步有何异同，在什么情况下分别使用他们？举例说明。">同步和异步有何异同，在什么情况下分别使用他们？举例说明。</a>
                        </li>
                        <li data-mod="popu_592" data-dsm="post" data-poputype="feed" data-feed-show="false">
                            <em>⋅</em>
                            <a href="https://blog.csdn.net/longlc123/article/details/78018327" target="_blank" title="H5不同手机适配">H5不同手机适配</a>
                        </li>
                        <li data-mod="popu_592" data-dsm="post" data-poputype="feed" data-feed-show="false">
                            <em>⋅</em>
                            <a href="https://blog.csdn.net/kingroc/article/details/51376975" target="_blank" title="当我们在使用CSS的时候ID与Class有何不同？">当我们在使用CSS的时候ID与Class有何不同？</a>
                        </li>
                        <li data-mod="popu_592" data-dsm="post" data-poputype="feed" data-feed-show="false">
                            <em>⋅</em>
                            <a href="https://blog.csdn.net/abs1004/article/details/75736167" target="_blank" title="H5 获取地理位置">H5 获取地理位置</a>
                        </li>
            </ul>
        </div>
        <div disabled class="recom_b">
        </div>
        <style>
            .a {}
        </style>
        <script>
            alert(45)
        </script>
    </dd>
</dl>
<br>
<s x=1 />
</div>
<#div>abc</#div>
`.replace(/[\r\n]/g, '');

parser(html, {
    start: (...a) => console.log(a),
    end: (...a) => console.log(a),
    chars: text => console.log(text, 'car'),
});