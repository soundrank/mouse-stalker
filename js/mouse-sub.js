$(function () {

  //キラキラ降りそそぐマウスストーカー
  //=================================
  var body = $("body");
  //キラキラ頻度調整用フラッグ
  var flag = true;

  //mousemoveイベントでカーソル要素を移動
  $(document).on("mousemove", function (e) {
    if (flag) {
      //マウス位置を取得するプロパティ
      var x = e.clientX;
      var y = e.clientY;

      //キラキラ要素生成
      var shine = $("<p>").attr("class", "shine");
      shine.css({
        "top": y + "px",
        "left": x + "px"
      });
      //body直後に配置
      body.prepend(shine);
      //2秒後に削除
      setTimeout(function () {
        shine.remove();
      }, 2000);

      //一旦新しい要素生成をストップ
      flag = false;
      //0.1s後に解除
      setTimeout(function () {
        flag = true;
      }, 100);
    }
  });
});