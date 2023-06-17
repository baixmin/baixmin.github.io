var posts=["posts/1312.html","posts/b9a6.html","posts/2370.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"安知鱼","hundredSuffix":"","link":"https://blog.anheyu.com/","avatar":"https://img01.anheyu.com/useruploads/90/2023/04/23/6444e85234e51.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg"},{"name":"Akilarの糖果屋","link":"https://akilar.top/","avatar":"https://npm.elemecdn.com/akilar-friends@latest/avatar/akilar.top.jpg","descr":"欢迎光临糖果屋","siteshot":"https://npm.elemecdn.com/akilar-friends@latest/siteshot/akilar.top.jpg"},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://bu.dusays.com/2022/12/28/63ac2812183aa.png","descr":"分享设计与科技生活","siteshot":"https://bu.dusays.com/2023/03/03/6401bcbf1d33b.webp"},{"name":"杜老师说","link":"https://dusays.com/","avatar":"https://cdn.dusays.com/avatar.png","descr":"师者，传道，授业，解惑！","siteshot":"https://cdn.staticaly.com/gh/gtwxxh666/pic@main/202304222038583.png"},{"name":"铭心石刻","link":"https://blog.kouseki.cn/","avatar":"https://blog.kouseki.cn/imgs/avatar.webp","descr":"愿岁并谢，与友长兮","siteshot":"https://blog.kouseki.cn/imgs/siteshot.webp"},{"name":"Shine","link":"https://blog.shineyu.cn/","avatar":"https://blog.shineyu.cn/img/shineyu_avatar.webp","descr":"热爱生活点滴，分享时刻精彩。","siteshot":"https://blog.shineyu.cn/img/website.webp"},{"name":"Harris's Blog","link":"https://blog.harriswong.top","avatar":"https://cdn.jsdelivr.net/npm/hassan-assets/img/avatar_blog.jpg","descr":"时不我待，只争朝夕","siteshot":"https://cdn.jsdelivr.net/npm/hassan-assets/img/siteshot.jpg"},{"name":"Adil","link":"https://blog.adil.com.cn","avatar":"https://tucdn.wpon.cn/2023/04/06/15dbbb2004b44.jpg","descr":"BW/HANA顾问,BI工程师,数据分析师,数据科学家。","siteshot":"https://tucdn.wpon.cn/2023/04/06/126fba2e88c54.png"},{"name":"青桔气球","link":"https://blog.qjqq.cn/","avatar":"https://avatar.iftft.com/1/646cdb372913c.webp!avatar","descr":"分享网络安全与科技生活","siteshot":"https://avatar.iftft.com/1/647571edf20a9.webp!avatar"},{"name":"摸鱼星球","link":"https://moyustar.cn/","avatar":"https://moyustar.cn/icon.png","descr":"斯人若彩虹，遇见方知有","siteshot":"https://moyustar.cn/fengmian.png"},{"name":"阿豪AHao","link":"https://ahao.ah.cn","avatar":"https://image.ahao.ah.cn/3cccc50598660ee1cece6e10be840f2.jpg","descr":"人间值得，未来可期","siteshot":"https://image.ahao.ah.cn/b4f3987b256a963bd96cf48d75068e5.png"},{"name":"小冰博客","link":"https://zfe.one","avatar":"https://zfe.space/images/headimage.png","descr":"做个有梦想的人！"},{"name":"Leonus","link":"https://blog.leonus.cn/","avatar":"https://q1.qlogo.cn/g?b=qq&nk=990320751&s=5","descr":"进一寸有进一寸的欢喜。"},{"name":"糖丸","link":"https://www.tany.top/","avatar":"https://cdn.staticaly.com/gh/xy055878/picGoDrawingBed@main/imgs/Header.jpg","descr":"及时当勉，岁月不待"},{"name":"毕少侠-Hexo-Anzhiyu","link":"https://hexo.geekswg.top/","avatar":"https://hexo.geekswg.top/imgs/avatar.webp","descr":"毕少侠也在江湖。"},{"name":"Ganzhe","link":"https://ganzhe2028.github.io","avatar":"https://pic.imgdb.cn/item/64895d391ddac507cce97bc3.webpg","descr":"顺其自然，持之以恒"},{"name":"望无人于此","link":"https://blog.dd.ac.cn/","avatar":"/imgs/zll.png","descr":"Hope no one is here"}];
    var refreshNum = 1;
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };