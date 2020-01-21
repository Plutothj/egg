
module.exports = {
    schedule: {
      interval: '3s', // 1 分钟间隔
      type: 'worker', // 指定所有的 worker 都需要执行
      disable:true
    },
    async task(ctx) {
        console.log("任务执行 : "+ new Date().toString());
    },
    
};