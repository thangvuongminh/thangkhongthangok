 {
//     //1 click
//     const btn=document.querySelector(".button");
//     // element.addEventListener(eventName,fuction(){})
//     function handleClickButton(event)
//     {
//         console.log(event);
//         // event có 2 cái: 
//         // + event.target nó sẽ xác định element mà mình kích tới  chọn phần tử mình click tới
//         // + event.currentTarget: chọn phần tử mà mình click // chọn chính xác  thẻ mà mình xác định click
//         // click sẽ ảnh hưởng đến nổi bọt nghĩa là nhấn vào nó tức là sẽ nhấn vào các thẻ bọc nó ví dụ// 
//                 console.log('An Tô');
//     }
//     btn && btn.addEventListener("click",handleClickButton);
//     // && có nghĩa là btn phải tồn tại
//     const button_text=document.querySelector(".button-text");
//     button_text && button_text.addEventListener("click",function(e)
// {
//     e.stopPropagation(); // chỉ tác động vào span
//     console.log('Min Tô');
// });
// //  lúc này click vào thẻ span sẽ tác động vào thẻ button event.stopPropagation(): chặn vấn đề nổi bọt
// // event
// const single_link=document.querySelector(".single-link");
// single_link && single_link.addEventListener("click",function(e)
// {
//     e.preventDefault(); // ngăn chặn hành vi mặc định cụ thể là bấm vô thẻ a ra một web khác
// });
// const formSub=document.querySelector(".formSub");
// formSub && formSub.addEventListener("submit",function(e)
// {
//     e.preventDefault();
//     // có this là trả là element đó ví dụ:
//     console.log(this);
// });
//button effect-cricle
/// ############################################## STYLE
//style
// element.style.cssproperty  thêm thuộc tính css cho element
const buttonEff=document.querySelector(".button-effect");
buttonEff &&  buttonEff.addEventListener("click",function(e)
{
    const x=e.clientX -e.target.offsetLeft;
    const y=e.clientY-e.target.offsetTop;
    for(let index=0;index<5;index++)
    {
    const circle=document.createElement("span");
    circle.classList.add("effect-circle");
    circle.style.top=y+"px";
    circle.style.left=x+"px";
    circle.style.animationDelay=index*0.1+"s";
    this.appendChild(circle);
//     setTimeout(function()       
// { 
//     circle.remove();
//  },1000);                         set thời gian sau đó xóa đi thẻ đó  hoặc dùng cách 2
circle && circle.addEventListener("animationend",function()
{
    circle.remove();                    // hàm này có nghĩa sau khi kết thúc sẽ end
});
    }
});


}
const btnModal=document.querySelector(".button-modal");
const modal=document.querySelector("#modal-simple");
const modalClose=document.querySelector(".modal-close");
btnModal && btnModal.addEventListener("click",function()
{
    if(!modal) return;
    modal.classList.add("is-open");
});
function closeModal() 
{
    if(!modal) return;
    modal.classList.remove("is-open");
}
modalClose && modalClose.addEventListener("click",closeModal);