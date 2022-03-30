const nodemailer = require('nodemailer'); //发送邮件的node插件
const ejs = require("ejs"); //ejs模版引擎
const fs = require("fs"); //文件读写
const path = require("path"); //路径配置
function sendEmail (data){
    let transporter = nodemailer.createTransport({
        service: '163', // 发送者的邮箱厂商，支持列表：https://nodemailer.com/smtp/well-known/
        port: 465, // SMTP 端口
        secureConnection: true, // SSL安全链接
        auth: {   //发送者的账户密码
            user: 'alarm16578@163.com', //账户
            pass: 'XPPQAWHFRDDKPKGI', //smtp授权码，到邮箱设置下获取
        }
    });
	const template = ejs.compile(
	  fs.readFileSync(path.resolve(__dirname, "index.ejs"), "utf8")
	);
	const html = template();
	  
	
    let mailOptions = {
        from: '"测试" <alarm16578@163.com>', // 发送者昵称和地址
        to: 724252669@qq.com, // 接收者的邮箱地址
        subject: '测试邮件自动发送', // 邮件主题
        html: html
    };
    //发送邮件
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('邮件发送成功');
    }); 
}
// 这里可以后续通过当前的用户信息返回
let nickName, createTime, link;
nickName =  'node 学习'
createTime = '2021-07-30 15:20';
link = 'http://blog.lovemysoul.vip'


let data = {
    email:'yang_***@163.com',
}
sendEmail(data) 