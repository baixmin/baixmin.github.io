var posts=["2023/06/05/分类测试/","2023/05/28/hello-world/","2023/06/10/外置标签测试/","2023/06/03/测试2/","2023/06/03/测试/","2023/06/03/测试3/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"安知鱼","hundredSuffix":"","link":"https://blog.anheyu.com/","avatar":"https://img02.anzhiy.cn/adminuploads/1/2022/09/15/63232b7d91d22.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg"},{"name":"Shine","link":"https://blog.shineyu.cn/","avatar":"https://s3.bmp.ovh/imgs/2022/11/23/129c19d56d22c637.png","descr":"热爱生活点滴，分享时刻精彩。","siteshot":"https://s3.bmp.ovh/imgs/2022/12/28/fe2452f7c4ff48ee.png"},{"name":"南方嘉木","link":"https://gavin-chen.top/","avatar":"https://gavin-chen.top/img/avatar.webp","descr":"不畏将来，不念过往。","siteshot":"https://gavin-chen.top/img/siteshot.webp"},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://bu.dusays.com/2022/12/28/63ac2812183aa.png","descr":"分享设计与科技生活","siteshot":"https://bu.dusays.com/2023/03/03/6401bcbf1d33b.webp"},{"name":"杜老师说","link":"https://dusays.com/","avatar":"https://cdn.dusays.com/avatar.png","descr":"师者，传道，授业，解惑！","siteshot":"https://cdn.staticaly.com/gh/gtwxxh666/pic@main/202304222038583.png"},{"name":"安知鱼","hundredSuffix":"","link":"https://blog.anheyu.com/","avatar":"https://img02.anzhiy.cn/adminuploads/1/2022/09/15/63232b7d91d22.jpg","descr":"生活明朗，万物可爱"},{"name":"我不是咕咕鸽","link":"https://blog.laoda.de","avatar":"https://blog.laoda.de/logo","descr":"服务器折腾不完全指南，定期分享一些好玩的东西，不定期记录生活。"},{"name":"清风","link":"https://limh.cc/","avatar":"https://limh.cc/img/avatar.webp","descr":"人不拼怎知输赢"},{"name":"Ading阿定の小站","link":"https://blog.saop.cc","avatar":"https://picbed.saop.cc/Asuna/Asuna1x1.png","descr":"我们终会相遇相知，在那悠远的苍穹"}];
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