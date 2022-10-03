window.onload=function(){
     var tel=document.querySelector('#tel');
     var regTel= /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
     regExpTab(tel,regTel);
     //qq
     var qq=document.querySelector('#qq');
     var regQQ=/^[1-9][0-9]{4,}$/;
     regExpTab(qq,regQQ);
     //昵称
      var nc=document.querySelector('#nc');
      //只能由汉字组成，且限制8个汉字
      var regNc=/^[\u4e00-\u9fa5]{0,}$/;
      regExpTab(nc,regNc);
      //密码
      var pwd =document.querySelector('#pwd');
      //以字母开头，长度在6~18之间，只能包含字母、数字和下划线
      var regPwd=/^[a-zA-Z]\w{5,17}$/;
      regExpTab(pwd,regPwd);
      //验证码
      var msg=document.querySelector('#msg');
      var regMsg=/^\d{4}$/;
      regExpTab(msg,regMsg);
      //确认密码
      var surepwd=document.querySelector('#surepwd');
     //表单验证函数封装
     function regExpTab(elm,reg){
         elm.onblur=function(){
            if(reg.test(this.value)){
                this.nextElementSibling.className='success';
                this.nextElementSibling.innerHTML='<i class="success_icon"></i> 恭喜您输入正确';
            }else{
                this.nextElementSibling.className='error';
                this.nextElementSibling.innerHTML='<i class="error_icon"></i> 格式错误，清重新输入';
            }
         }
     }

     //确认密码
     surepwd.onblur=function(){
        if(this.value==pwd.value){
            this.nextElementSibling.className='success';
            this.nextElementSibling.innerHTML='<i class="success_icon"></i> 恭喜您输入正确';
        }else{
            this.nextElementSibling.className='error';
            this.nextElementSibling.innerHTML='<i class="error_icon"></i> 两次密码不一致';
        }
     }

}