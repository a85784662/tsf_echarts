//转中文星期
function transformChinaDate(engArry){
    var currentDate
    var chinaDate = [];
    engArry.forEach(function(item){
      switch(item){
        case 'Mon':
        currentDate = '星期一';
        break;
        case 'Tue':
        currentDate = '星期二';
        break;
        case 'Wed':
        currentDate = '星期三';
        break;
        case 'Thu':
        currentDate = '星期四';
        break;
        case 'Fri':
        currentDate = '星期五';
        break;
        case 'Sat':
        currentDate = '星期六';
        break;
        case 'Sun':
        currentDate = '星期日';
        break;
      }
      chinaDate.push(currentDate);
    });
    return chinaDate
  }