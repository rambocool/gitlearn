//通信系统滚动效果
document.addEventListener("DOMContentLoaded", function () {
  // 获取滚动容器
  var container = document.getElementById("tongxin");
  // 自动滚动的函数
  function autoScroll() {
    var scrollHeight = container.scrollHeight;
    var clientHeight = container.clientHeight;
    var scrollTop = container.scrollTop;
    var duration = 6000; // 滚动动画的持续时间（毫秒）
    var pauseDuration = 1000; // 停顿时间（毫秒）

    var startTime = null;

    function animateScroll(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = timestamp - startTime;

      if (progress >= duration) {
        // 滚动到底部后，重新滚动到顶部
        container.scrollTop = 0;
        startTime = timestamp;
      } else {
        var targetScrollTop =
          (progress / duration) * (scrollHeight - clientHeight);
        container.scrollTop = targetScrollTop;
      }

      requestAnimationFrame(animateScroll);
    }

    requestAnimationFrame(animateScroll);
  }

  // 启动自动滚动
  autoScroll();
});

//王者系统滚动效果
document.addEventListener("DOMContentLoaded", function () {
  // 获取滚动容器
  var container = document.getElementById("wangzhe");
  // 自动滚动的函数
  function autoScroll() {
    var scrollHeight = container.scrollHeight;
    var clientHeight = container.clientHeight;
    var scrollTop = container.scrollTop;
    var duration = 6000; // 滚动动画的持续时间（毫秒）
    var pauseDuration = 1000; // 停顿时间（毫秒）

    var startTime = null;

    function animateScroll(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = timestamp - startTime;

      if (progress >= duration) {
        // 滚动到底部后，重新滚动到顶部
        container.scrollTop = 0;
        startTime = timestamp;
      } else {
        var targetScrollTop =
          (progress / duration) * (scrollHeight - clientHeight);
        container.scrollTop = targetScrollTop;
      }

      requestAnimationFrame(animateScroll);
    }

    requestAnimationFrame(animateScroll);
  }

  // 启动自动滚动
  autoScroll();
});

//幸运系统滚动
document.addEventListener("DOMContentLoaded", function () {
  // 获取滚动容器
  var container = document.getElementById("xingyun");
  // 自动滚动的函数
  function autoScroll() {
    var scrollHeight = container.scrollHeight;
    var clientHeight = container.clientHeight;
    var scrollTop = container.scrollTop;
    var duration = 6000; // 滚动动画的持续时间（毫秒）
    var pauseDuration = 1000; // 停顿时间（毫秒）

    var startTime = null;

    function animateScroll(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = timestamp - startTime;

      if (progress >= duration) {
        // 滚动到底部后，重新滚动到顶部
        container.scrollTop = 0;
        startTime = timestamp;
      } else {
        var targetScrollTop =
          (progress / duration) * (scrollHeight - clientHeight);
        container.scrollTop = targetScrollTop;
      }

      requestAnimationFrame(animateScroll);
    }

    requestAnimationFrame(animateScroll);
  }

  // 启动自动滚动
  autoScroll();
});

//其他系统滚动效果

document.addEventListener("DOMContentLoaded", function () {
  // 获取滚动容器
  var container = document.getElementById("qita");
  // 自动滚动的函数
  function autoScroll() {
    var scrollHeight = container.scrollHeight;
    var clientHeight = container.clientHeight;
    var scrollTop = container.scrollTop;
    var duration = 6000; // 滚动动画的持续时间（毫秒）
    var pauseDuration = 1000; // 停顿时间（毫秒）

    var startTime = null;

    function animateScroll(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = timestamp - startTime;

      if (progress >= duration) {
        // 滚动到底部后，重新滚动到顶部
        container.scrollTop = 0;
        startTime = timestamp;
      } else {
        var targetScrollTop =
          (progress / duration) * (scrollHeight - clientHeight);
        container.scrollTop = targetScrollTop;
      }

      requestAnimationFrame(animateScroll);
    }

    requestAnimationFrame(animateScroll);
  }

  // 启动自动滚动
  autoScroll();
});

// Data retrieved from https://netmarketshare.com
Highcharts.chart("tit01", {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: "pie",
  },
  title: {
    text: "Browser market shares in May, 2020",
    align: "left",
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
  },
  accessibility: {
    point: {
      valueSuffix: "%",
    },
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: {
        enabled: true,
        format: "<b>{point.name}</b>: {point.percentage:.1f} %",
      },
    },
  },
  series: [
    {
      name: "Brands",
      colorByPoint: true,
      data: [
        {
          name: "Chrome",
          y: 70.67,
          sliced: true,
          selected: true,
        },
        {
          name: "Edge",
          y: 14.77,
        },
        {
          name: "Firefox",
          y: 4.86,
        },
        {
          name: "Safari",
          y: 2.63,
        },
        {
          name: "Internet Explorer",
          y: 1.53,
        },
        {
          name: "Opera",
          y: 1.4,
        },
        {
          name: "Sogou Explorer",
          y: 0.84,
        },
        {
          name: "QQ",
          y: 0.51,
        },
        {
          name: "Other",
          y: 2.6,
        },
      ],
    },
  ],
});
