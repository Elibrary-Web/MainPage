 
      let signup = document.querySelector(".signup");
      let login = document.querySelector(".login");
      let slider = document.querySelector(".slider");
      let formSection = document.querySelector(".form-section");
      
      signup.addEventListener("click", () => {
          slider.classList.add("moveslider");
          formSection.classList.add("form-section-move");
      });
      
      login.addEventListener("click", () => {
          slider.classList.remove("moveslider");
          formSection.classList.remove("form-section-move");
      });
      
      
      /*Paragrafi*/
      
      
      var text = document.getElementById('text');
      var newDom = '';
      var animationDelay = 6;
      
      for(let i = 0; i < text.innerText.length; i++)
      {
          newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
      }
      
      text.innerHTML = newDom;
      var length = text.children.length;
      
      for(let i = 0; i < length; i++)
      {
          text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
      }
      
      /*Abonimi*/ 
       
   