var that;
class tab {
     constructor(id) {
         that=this;
         this.main=document.querySelector(id);
         this.add=this.main.querySelector(".tabadd");
         this.section=this.main.querySelector(".tabscon");
         this.ul=this.main.querySelector(".fisrstnav ul:first-child");

         this.init();
     }

     //初始化
     init(){
          this.lis=this.main.querySelectorAll("li");
          this.sections=this.main.querySelector(".tabscon").querySelectorAll("section");
          this.removeBnt=this.main.querySelectorAll(".iconfont");
          this.add.onclick=this.addElem;
          this.tabTexts=this.ul.querySelectorAll("li span:first-child");
          for(var i=0 ;i<this.lis.length;i++){
            this.lis[i].index=i;
            this.lis[i].onclick=this.toggleTab;
            this.removeBnt[i].onclick=this.removeTab;
            //绑定双击事件
            this.tabTexts[i].ondblclick=this.editText;
            this.sections[i].ondblclick=this.editText;
          }


     }

     //排他函数
     clear(){
        for(var j=0;j<this.lis.length;j++){

            this.lis[j].className='';
            this.sections[j].className='';
        }
     }

     //切换方法
     toggleTab(){
        that.clear();
        this.className='liactive';
        var index=this.index;
        that.sections[index].className='conactive';
        
     }
     //删除方法
     removeTab(e){
      //阻止冒泡，因为点击会触发父级的切换事件，导致报错
      e.stopPropagation();
      var index=this.parentNode.index;
      this.parentNode.remove();
      that.sections[index].remove();
      that.init();
      if(document.querySelector(".liactive"))return;
      index--;
      that.lis[index].click();
     }
     //添加方法
     addElem(){
      if(that.lis.length<8){
        that.clear();
        var random=Math.random();
        var li ='<li class="liactive"><span>选项卡</span><span class="iconfont icon-guanbi"></span></li>';
        var section2='<section class="conactive">测试1'+random+'</section>';
        that.ul.insertAdjacentHTML('beforeend',li);
        that.section.insertAdjacentHTML('beforeend',section2);
        that.init();
      }else{
         alert("tab栏已满");
      }
     }
     //修改方法
     editText(){
      var str=this.innerHTML;
      //双击禁止选中文字
      window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
      this.innerHTML='<input type="text">';
      this.children[0].value=str;
      this.children[0].select();

      this.children[0].onblur=function(){
      this.parentNode.innerHTML=this.value;
      }
      this.children[0].onkeyup=function(e){
         if(e.keyCode==13){
         this.blur();
         }
         }
     }
}

var box=new tab("#tab");