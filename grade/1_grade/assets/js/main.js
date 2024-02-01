var label           = ["PC Building", "Blender", "Javascript"];

// １つ目の系列の情報を設定
var name      = "skill";                          // 系列１の名前
var data      = [ 5,  3.5,  3]; // 系列１データ
var bgcolor   = "rgba(132, 200, 255, 0.2)";           // 系列１の塗りつぶし色
var linecolor = "rgba(132, 200, 255, 1.0)";          // 系列１の線の色

// グラフ縦軸の最大／最小／目盛りの間隔を設定
var max  = 5;  // グラフ縦軸の最大
var min  =   0;  // グラフ縦軸の最小
var step =  1;  // グラフ縦軸の目盛り線を引く間隔

var ctx = document.getElementById("Chart").getContext("2d");
var myChart3 = new Chart(ctx, {
  type: "bar",
  data: {
    labels: label,
    datasets:[
      {
        axis:            'y',
        label:           name,
        data:            data,
        backgroundColor: bgcolor,
        borderColor:     linecolor,
        borderWidth:     1,
      },
      // ５つ以上系列を描画する場合は上のセットを追加する
    ]
  },
  options: {
    indexAxis: 'y',
    scales: {
      x: {
        display:      true,
        stacked:      true,
      },
      y: {
        display:      true,
        stacked:      true,
        ticks: {
          Max: max,
          Min: min,
          stepSize: step,
        },
      }
    }
  }
});

