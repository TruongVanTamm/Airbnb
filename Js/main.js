const $=document.querySelector.bind(document)
const header = document.getElementById("header");
const container = document.querySelector(".container");
const header_wrap = document.querySelector(".header-wrap");
const body = document.querySelector("body");
const logo = document.querySelector(".logo");
const logo_2 = document.querySelector(".logo-2");
const nav = document.querySelector(".nav");
const nav_item = document.querySelectorAll(".nav-item");
const header_btn = document.querySelector(".header-btn");
const header_moblie = document.querySelector(".header-mobile");
const nav_moblie = document.querySelector(".nav-mobile");
const nav_moblie_btn = document.querySelectorAll(".nav-mobile-btn");
const become_a_host = document.querySelector(".become-a-host");
const scheduled  = document.querySelector(".scheduled");
const experience = document.querySelector(".experience");
const icon_plus=document.querySelectorAll(' .icon-plus')
const icon_minus=document.querySelectorAll(' .icon-minus')
const quantily=document.querySelectorAll(' .quantily')
const modal =document.querySelector('.modal ')
const modal_mobile =document.querySelector('.modal-mobile')
const favor_mobile =document.querySelector('.favor-mobile')
const modal_region_and_coin_body =document.querySelector('.modal-region-and-coin-body ')
const modal_region=document.querySelector('.modal-region')
const modal_coin =document.querySelector('.modal-coin')
const cancel_flex_search  =document.querySelector('.cancel-flex-search ')
const flex_search_input  =document.querySelector('.flex-search-input ')
const region_and_coin=document.querySelector('.region-and-coin ')
const modal_icon_close=document.querySelector('.modal-icon-close ')
const modal_icon_close_2=document.querySelector('.modal-icon-close-2 ')
const modal_region_and_coin_option1=document.querySelector('.modal-region-and-coin_option1')
const modal_region_and_coin_option2=document.querySelector('.modal-region-and-coin_option2')
const Language_item =document.querySelectorAll('.Language-item ')
const Coin_item =document.querySelectorAll('.Coin-item ')
const User_form=$('.User-form')
const login_regist_active=document.querySelectorAll('.login-regist-active')
const regist_btn =document.querySelector('.regist-btn ')
const form_meassage =document.querySelector('.form-message ')
const regist_phoneNumber_text=$('.regist-phoneNumber-text')
const regist_phoneNumber=$('.regist-phoneNumber')
const regist_phoneNumber_form=$('.regist-phoneNumber-form')
const regist_numberPhone=$('.regist-numberPhone')
const login_btn=document.querySelectorAll('.login-btn')
const favor_logion_btn=document.querySelector('.favor-mobile-header button')
const favor_list_wrap_button=document.querySelectorAll('.favor-list-btn')
const favor_list_btn_default=document.querySelectorAll('.favor-list-btn-default')
const favor_list_extra=document.querySelectorAll('.favor-list-extra')
const form_group=document.querySelectorAll('.form-group')
const modal_inner_1=$('.modal__inner-1')
const modal_inner_2=$('.modal__inner-2')
const Sub_search=document.querySelectorAll('.Sub-search ')
const Sub_search_text=document.querySelectorAll('.Sub-search-text')
const Add_guest=$('.Add-guest') 
const User =$('.User ') 
const guest_text=$(' .guest-text')
const Add_guest_text_wrap=$(' .Add-guest-text-wrap')
const Add_guest_adult=$(' .adult')
const Add_guest_child=$(' .child')
const Add_guest_baby=$('.baby')
const Add_guest_pet=$('.add-pet')
const Add_guest_text=$('.Add-guest-text')
const guest_text_icon=$('.guest-text-icon')
const Add_guest_box=$('.Add-guest-box')
const search_location=$('.search-location')
const location_input=document.querySelectorAll('.location-input')
const flex_serach_box=$('.flex-serach-box')
const flex_serach_box_2=$('.flex-search-box-2')
const Add_day =$('.Add-day ')
const experience_location =$('.experience-location ')
const experience_serach_box_wrap =$('.experience-serach-box-wrap ')
const experience_serach_box =$('.experience-serach-box ')
const Auto_translate_btn=$('.Auto-translate-btn')
const Auto_translate_btn_icon=$('.Auto-translate-btn-icon')
const Auto_translate_icon=$('.Auto-translate-btn-icon i')
const footer_option_language=$('.footer-option-language')
const footer_option_coin=$('.footer-option-coin')

var numberAdult=0, numberChild=0, numberBaby=0, numberPet=0;

function disableScroll() { document.body.style.overflow="hidden";}
function enableScroll() { document.body.style.overflow="initial";}
document.onclick=function(e){
        hideSerach()
        hideFlexSearch()
        hideUserForm()  
}
function showSerach(){
    Sub_search.forEach(function(item){
        item.classList.add('Sub-search-show')
    })
    Sub_search_text.forEach(function(item){
        item.classList.remove('hide')
    })
    Add_guest.classList.remove('l-4')
    Add_guest.classList.add('l-5')
    search_location.classList.remove('l-4')
    search_location.classList.add('l-3')
    Add_guest.classList.remove('m-4')
    Add_guest.classList.add('m-5')
    search_location.classList.remove('m-4')
    search_location.classList.add('m-3')
    Add_guest.classList.toggle('changbackground')
    Add_guest.addEventListener('mouseover', function(){
        Add_guest.classList.remove('changeBackgroundColor')
    })
    Add_day.classList.remove('l-6')
    Add_day.classList.add('l-7')
    experience_location.classList.remove('l-6')
    experience_location.classList.add('l-5')
    Add_day.classList.remove('m-6')
    Add_day.classList.add('m-7')
    experience_location.classList.remove('m-6')
    experience_location.classList.add('m-5')
}

function showAddGuestBox(){
    guest_text_icon.classList.toggle('hide')
    Add_guest_box.classList.toggle('hide')
}
function hideSerach(){
    Sub_search.forEach(function(item){
        return item.classList.remove('Sub-search-show')
    })
    Sub_search_text.forEach(function(item){
        item.classList.add('hide')
    })
    Add_guest.classList.add('l-4')
    Add_guest.classList.remove('l-5')
    search_location.classList.add('l-4')
    search_location.classList.remove('l-3')
    Add_guest.classList.add('m-4')
    Add_guest.classList.remove('m-5')
    search_location.classList.add('m-4')
    search_location.classList.remove('m-3')
    Add_guest.classList.remove('changbackground')
    guest_text_icon.classList.add('hide')
    Add_guest_box.classList.add('hide')
    Add_guest.addEventListener('mouseover', function(){
            this.classList.add('changeBackgroundColor')
        })
        Add_day.classList.add('l-6')
        Add_day.classList.remove('l-7')
        experience_location.classList.add('l-6')
        experience_location.classList.remove('l-5')
        Add_day.classList.add('m-6')
        Add_day.classList.remove('m-7')
        experience_location.classList.add('m-6')
        experience_location.classList.remove('m-5')   
}
function showFlexSearch() {
    flex_serach_box.classList.remove('hide')
    experience_serach_box.classList.remove('hide')
}
function hideFlexSearch() {
    flex_serach_box.classList.add('hide')
    experience_serach_box.classList.add('hide')
    search_location.classList.remove('changbackground')
    search_location.addEventListener('mouseover', function(){
        this.classList.add('changeBackgroundColor')
    })
    experience_location.classList.remove('changbackground')
    experience_location.addEventListener('mouseover', function(){
        this.classList.add('changeBackgroundColor')
    })
}
function hideUserForm() {
    User_form.classList.add('hide')
}
function hidetext(){
    Add_guest_text.classList.add('hide')
}
function showtext(){
    Add_guest_text.classList.remove('hide')
}
Sub_search.forEach(function(item){
    item.onclick=function(e){
        e.stopPropagation();
        Add_guest.classList.remove('changbackground')
        Add_guest_box.classList.add('hide')
        this.classList.add('Sub-search-show')
        Sub_search_text.forEach(function(item){
            item.classList.remove('hide')
        })
        Add_guest.classList.remove('changbackground')
        Add_guest_box.classList.add('hide')
        guest_text_icon.classList.add('hide')
        showFlexSearch()
        showSerach()
    }
})
guest_text_icon.onclick=function(e){
    e.stopPropagation()
   Add_guest_adult.innerHTML = ""
   Add_guest_child.innerHTML = ""
   Add_guest_baby.innerHTML = ""
   Add_guest_pet.innerHTML = ""
    numberAdult=numberChild=numberBaby=numberPet=0
   Add_guest_text.classList.remove("hide")
   icon_plus.forEach(function(item){
    item.classList.remove('changeColor')
   })
   icon_minus.forEach(function(item){
    item.classList.add('changeColor')
   })
   quantily.forEach(function(item){
       item.innerHTML="0"
   })
}
Add_guest.onclick=function(e){
    showSerach()
    showAddGuestBox()
    hideFlexSearch()
    e.stopPropagation() 
}
Add_guest_box.onclick=function(e){
    e.stopPropagation() 
}
icon_plus.forEach(function(item,index){
    if(index==0){
       item.onclick=function(){
           hidetext()
           numberAdult++;
           if(numberAdult<17){
               quantily.forEach(function(quantily,quantily_index){
                   if(quantily_index==0){
                       quantily.innerHTML=numberAdult
                       Add_guest_adult.innerHTML=`${numberAdult} khách lớn, `
                   }
               })

           }
           if(numberAdult<16 && numberAdult > 0){
            Add_guest_adult.classList.remove('hide')
            icon_minus.forEach(function(item,index){
                if(index==0){             
                    item.classList.remove('changeColor')
                }
            })
        }
            if(numberAdult>=16){
                numberAdult=16
                this.classList.add('changeColor')
        }
       }
    }
    if(index==1){
        item.onclick=function(){
            hidetext()
            numberChild++;
            if(numberChild<6){
                quantily.forEach(function(quantily,quantily_index){
                    if(quantily_index==1){
                        quantily.innerHTML=numberChild                 
                        Add_guest_child.innerHTML=`${numberChild} khách nhỏ,`
                    }
                })
 
            }
            if(numberChild>=5){
                 numberChild=5
                 this.classList.add('changeColor')
            }
            if(numberChild<5 && numberChild > 0){
             Add_guest_child.classList.remove('hide')
             icon_minus.forEach(function(item,index){
                 if(index==1){             
                     item.classList.remove('changeColor')
                 }
             })
         }
        }
     }
     if(index==2){
        item.onclick=function(){
            hidetext()
            numberBaby++;
            if(numberBaby<6){
                quantily.forEach(function(quantily,quantily_index){
                    if(quantily_index==2){
                        quantily.innerHTML=numberBaby
                        Add_guest_baby.innerHTML=`${numberBaby} em bé,`
                    }
                })
 
            }
            if(numberBaby>=5){
                 numberBaby=5
                 this.classList.add('changeColor')
            }
            if(numberBaby<5 && numberBaby > 0){
             Add_guest_baby.classList.remove('hide')
             icon_minus.forEach(function(item,index){
                 if(index==2){             
                     item.classList.remove('changeColor')
                 }
             })
         }
        }
     }
     if(index==3){
        item.onclick=function(){
            hidetext()
            numberPet++;
            if(numberPet<6){
                quantily.forEach(function(quantily,quantily_index){
                    if(quantily_index==3){
                        quantily.innerHTML=numberPet
                        Add_guest_pet.innerHTML=`${numberPet} pet`
                    }
                })
 
            }
            if(numberPet>=5){
                 numberPet=5
                 this.classList.add('changeColor')
            }
            if(numberPet<5 && numberPet > 0){
             Add_guest_child.classList.remove('hide')
             icon_minus.forEach(function(item,index){
                 if(index==3){             
                     item.classList.remove('changeColor')
                 }
             })
         }
        }
     }

})
icon_minus.forEach(function(item,index){
    item.classList.add('changeColor')
    if(index==0){
        item.onclick=function(){      
            numberAdult--;
           if(numberAdult>=0){
               quantily.forEach(function(quantily,quantily_index){
                   if(quantily_index==0){
                       quantily.innerHTML=numberAdult
                       Add_guest_adult.innerHTML=`${numberAdult} khách lớn,`
                   }
               })
           }
           if(numberAdult<=0){
               if(numberChild==0 && numberBaby==0 && numberPet==0){
                   showtext()
               }
            numberAdult=0
            Add_guest_adult.classList.add('hide')
            item.classList.add('changeColor')
            }
            if(numberAdult<16){
                icon_plus.forEach(function(item,index){
                    if(index==0){             
                        item.classList.remove('changeColor')
                    }
                })
            }

       }
    }
     if(index==1){
        item.onclick=function(){       
            numberChild--;
           if(numberChild>=0){
               quantily.forEach(function(quantily,quantily_index){
                   if(quantily_index==1){
                       quantily.innerHTML=numberChild
                       Add_guest_child.innerHTML=`${numberChild} khách nhỏ,`
                   }
               })
           }
           if(numberChild<=0){
            if(numberAdult==0 && numberBaby==0 && numberPet==0){
                showtext()
            }
            Add_guest_child.classList.add('hide')
            numberChild=0
            item.classList.add('changeColor')
            }
            if(numberChild<5){
                icon_plus.forEach(function(item,index){
                    if(index==1){             
                        item.classList.remove('changeColor')
                    }
                })
            }

       }
    }
    if(index==2){
        item.onclick=function(){       
            numberBaby--;
           if(numberBaby>=0){
               quantily.forEach(function(quantily,quantily_index){
                   if(quantily_index==2){
                       quantily.innerHTML=numberBaby
                       Add_guest_baby.innerHTML=`${numberBaby} em bé,`
                   }
               })
           }
           if(numberBaby<=0){
            if(numberAdult==0 && numberChild==0 && numberPet==0){
                showtext()
            }
            Add_guest_baby.classList.add('hide')
            numberBaby=0
            item.classList.add('changeColor')
            }
            if(numberBaby<5){
                icon_plus.forEach(function(item,index){
                    if(index==2){             
                        item.classList.remove('changeColor')
                    }
                })
            }

       }
    }
    if(index==3){
        item.onclick=function(){       
            numberPet--;
           if(numberPet>=0){
               quantily.forEach(function(quantily,quantily_index){
                   if(quantily_index==3){
                       quantily.innerHTML=numberPet
                       Add_guest_pet.innerHTML=`${numberPet} pet,`
                   }
               })
           }
           if(numberPet<=0){
            if(numberChild==0 && numberBaby==0 && numberAdult==0){
                showtext()
            }
            Add_guest_pet.classList.add('hide')
            numberPet=0
            item.classList.add('changeColor')
            }
            if(numberPet<5){
                icon_plus.forEach(function(item,index){
                    if(index==3){             
                        item.classList.remove('changeColor')
                    }
                })
            }

       }
    }
    
})
experience_serach_box_wrap.onclick=function(e){
    location_input.forEach(function(item){
       return item.value="Lân Cận"
    })
}
experience_location.onclick = function(e){
    e.stopPropagation()
    showSerach()
    showFlexSearch() 
    this.classList.add('changbackground')
    experience_location.addEventListener('mouseover', function(){
        this.classList.remove('changeBackgroundColor')
    })
    location_input.forEach(function(item){
        return item.focus()
    })
}
search_location.onclick=function(e){
    showSerach()
    showFlexSearch() 
    Add_guest.classList.remove('changbackground')
    guest_text_icon.classList.add('hide')
    Add_guest_box.classList.add('hide')
    this.classList.add('changbackground')
    search_location.addEventListener('mouseover', function(){
        this.classList.remove('changeBackgroundColor')
    })
    location_input.forEach(function(item){
        return item.focus()
    })
    e.stopPropagation()
}
flex_serach_box.onclick=function(e){
    e.stopPropagation()
}
nav_item.forEach(function(item,index){
    if(index==0){
       item.onclick=function(){
        scheduled.classList.remove('hide')
        experience.classList.add('hide')
        location_input.forEach(function(item){
            return item.value=""
         })
       }
    }
    if(index==1){
        item.onclick=function(){
            scheduled.classList.add('hide')
            experience.classList.remove('hide')
        }
     }
})
// ------------------------------------------Mobile-----------------------------------------
header_btn.onclick=function(e){
    e.stopPropagation()
    this.classList.add('hide')
    nav.classList.remove("hide")
    scheduled.classList.remove('hide')
    experience.classList.add('hide')
    location_input.forEach(function(item){
        return item.focus()
     })
    showFlexSearch() 
    showSerach()
  }
  function scrollTop(){
    favor_mobile.scrollTop=0 
    window.scrollTo(0,0)
  }
nav_moblie_btn.forEach(function(item,index){
    const nav_index=nav_moblie_btn[index]
  item.onclick=function(e){ 
      e.stopPropagation()
      document.querySelector(".nav-mobile-btn.nav-mobile-btn-active").classList.remove("nav-mobile-btn-active")
      nav_index.classList.add('nav-mobile-btn-active')
      if (index==2){
        scrollTop()  
        this.parentElement.classList.add('nav-mobile-border')
         modal.classList.remove('hide')
         modal_inner_2.classList.remove('hide')
         modal_mobile.classList.add('hide')
         favor_mobile.classList.add('hide')
        favor_list_extra.forEach(function(item){
            return item.classList.add('hide')
        })  
        favor_list_wrap_button.forEach(function(item,index){
              return  item.classList.remove('hide')          
        })
      }
      else if (index==1){
        favor_mobile.classList.remove('hide')
        scrollTop()  
      }
      else{
          scrollTop()
         favor_mobile.classList.add('hide')
          modal_mobile.classList.add('hide')
          modal.classList.add('hide')
          modal_inner_2.classList.add('hide')
        
      }
  
  }
})
favor_logion_btn.onclick=function(e){
    nav_moblie_btn.forEach(function(item,index){
        if(index == 2){
           return  item.click()
        }
    })
}
function showMobileFlexSearch(){
    modal_mobile.classList.remove('hide')
    nav_moblie.classList.add('hide')
    flex_serach_box_2.classList.remove('hide')
    disableScroll()
    flex_search_input.focus()
 }
 function cancelFlexSearch(){
    modal_mobile.classList.add('hide')
    nav_moblie.classList.remove('hide')
    enableScroll()
 }
cancel_flex_search.addEventListener('click', cancelFlexSearch)
header_moblie.addEventListener('click',showMobileFlexSearch)

favor_list_wrap_button.forEach(function(item){
    item.onclick=function(e){
        e.stopPropagation()
        item.classList.add('hide')
        item.parentElement.nextElementSibling.classList.remove('hide')
    }
})
// ------------------------------------------Scroll-----------------------------------
function myFunction() {
    if (window.pageYOffset > header.offsetTop) {
      header.classList.add("sticky");
      logo.style.color='red'
      logo_2.style.color='red'
      nav.classList.add("hide")
      nav.style.color='black '
      nav_item.forEach(function(item){
          return item.classList.add("nav-item-fixed")
      })
        become_a_host.style.color='black '
        region_and_coin.style.color='black '
        header_btn.classList.remove('hide')
       scheduled.classList.add('hide')
       experience.classList.add('hide')
       header_moblie.classList.add("sticky");
       nav_moblie.classList.add("hide"); 
    }
     else     
     {
     nav.classList.remove("hide")
     nav.style.color='white'
     nav_item.forEach(function(item){
        return item.classList.remove("nav-item-fixed")
     }) 
      header.classList.remove("sticky");
      logo.style.color='white'
      logo_2.style.color='white'
      become_a_host.style.color='white '
      region_and_coin.style.color='white'
      header_btn.classList.add('hide')
      scheduled.classList.remove('hide')
      experience.classList.add('hide')
      header_moblie.classList.remove("sticky");
    }
    var a = body.offsetWidth
    if(this.oldScroll > this.scrollY && a <415){
        nav_moblie.classList.remove("hide");
    }
    this.oldScroll = this.scrollY;
  }
favor_mobile.onscroll=function(e){

    nav_moblie.classList.add("hide"); 
    if( this.oldScroll > e.target.scrollTop){
        nav_moblie.classList.remove("hide"); 
    }
    this.oldScroll=e.target.scrollTop
}
modal_inner_2.onscroll=function(e){

    nav_moblie.classList.add("hide"); 
    if( this.oldScroll > e.target.scrollTop){
        nav_moblie.classList.remove("hide"); 
    }
    this.oldScroll=e.target.scrollTop
}
window.addEventListener('scroll', function(e){
    myFunction()
})
// ----------------------------------------------Modal-chung------------------------------------------------------
function toggleModal(){  
    modal.classList.toggle('hide')
    modal_inner_1.classList.add('hide')
    modal_inner_2.classList.add('hide')
    if(body.offsetWidth > 1024){
        Language_item.forEach(function(item){
            return item.classList.remove('l-3')
        })
        Coin_item.forEach(function(item){
            return item.classList.remove('l-3')
        })
    }
    else{
        Language_item.forEach(function(item){
            return item.classList.add('l-3')
        })
    }
    registFormReset()
    enableScroll()
}
modal.addEventListener('click',function(e){
    if (e.target == e.currentTarget){
        toggleModal()
    }
})
// -----------modal_region_and_coin--------------------------------------------------------------------------------------------
modal_region_and_coin_option2.onclick=function(e){
    e.stopPropagation()
    modal_region_and_coin_option1.classList.add('hide-boder')
    modal_region_and_coin_option2.classList.remove('hide-boder')
     modal_region.classList.add('hide')
     modal_coin.classList.remove('hide')
}
modal_region_and_coin_option1.onclick=function(e){
    e.stopPropagation()
    this.classList.remove('hide-boder')
    modal_region_and_coin_option2.classList.add('hide-boder')
    modal_region.classList.remove('hide')
    modal_coin.classList.add('hide')
}
Auto_translate_btn.onclick=function(e){
    this.classList.toggle('Auto-translate-btn-change-color')
    Auto_translate_btn_icon.classList.toggle('Auto-translate-btn-change')
    Auto_translate_icon.classList.toggle('hide')
}
region_and_coin.onclick=function(){
    toggleModal()
    modal_inner_1.classList.remove('hide')
    modal_region_and_coin_option2.classList.remove('hide')
    modal_region_and_coin_option1.classList.remove('hide')
}
modal_icon_close.onclick=function(e){
    toggleModal()
}
// -----------------------------------------------------------Modal-login-regist------------------------------------
User.onclick=function(e){
    e.stopPropagation()
    User_form.classList.toggle('hide')
    hideSerach()
    hideFlexSearch()
}
User_form.onclick=function(e){
    e.stopPropagation()
}
function registFormError(){
    regist_phoneNumber_text.classList.add('regist-phoneNumber-text-modify')
    regist_phoneNumber.classList.remove('hide')
    regist_numberPhone.focus()
}
function registFormReset(){
    regist_phoneNumber_text.classList.remove('regist-phoneNumber-text-modify')
    regist_phoneNumber.classList.add('hide')
    regist_phoneNumber_form.classList.remove('invalid')
    regist_phoneNumber_form.classList.remove('regist-phoneNumber-form-correct')
    regist_phoneNumber_form.classList.remove('regist-phoneNumber-form-active')
    form_meassage.innerHTML=''
    regist_numberPhone.innerHTML=''
    regist_numberPhone.value=''
}
regist_btn.onclick=function(){
    registFormError()
}
form_group.forEach(function(item,index){
    return item.onclick=function(e){
        e.stopPropagation()
        if(index != 0){
            registFormError()
        }
        else{
            registFormReset()
        }
        item.classList.add('regist-phoneNumber-form-active')
    }
})
login_regist_active.forEach(function(item){
    return item.onclick=function(){
        toggleModal()
        modal_inner_2.classList.remove('hide')
        User_form.classList.toggle('hide')
       disableScroll()
    }
})
modal_icon_close_2.onclick=function(e){
    registFormReset()
    toggleModal()
}
login_btn.forEach(function(item){
    return item.addEventListener("click", function(){
        registFormReset()
    })
})
// -------------------------Vadition------------------------------------------------------------------------------
function validator(option){
    function getParent(element,selector){
        while(element.parentElement){
            if (element.parentElement.matches(selector)){
                    return element.parentElement
            }
           element = element.parentElement
        }
    }
    var selectorRules={

    };
    var validate=(inputElement,rule)=>{
    var errorElement=getParent(inputElement,option.formGroupSelector).querySelector(option.errorMessage)
    var errorMessage
        var rules=selectorRules[rule.selector]
        for (var i=0; i< rules.length; i++){            
                errorMessage=rules[i](inputElement.value)            
            if ( errorMessage)
            break;
        }
               if(errorMessage){
                errorElement.innerHTML=errorMessage
                getParent(inputElement,option.formGroupSelector).classList.add('invalid')

               }
               else{
                errorElement.innerHTML=''
                getParent(inputElement,option.formGroupSelector).classList.add('regist-phoneNumber-form-correct')
                getParent(inputElement,option.formGroupSelector).classList.remove('invalid')
               }
        return !errorMessage
}
var formElement=document.querySelector(option.form);
if (formElement){
    formElement.onsubmit = function(e){
        e.preventDefault();
       var isFormValid=true;
        option.rules.forEach(function(rule){
            var inputElement=formElement.querySelector(rule.selector);
            var isValid=validate(inputElement,rule)   
            if (!isValid){
                isFormValid=false;
            }
        })
        if (isFormValid){
            if (typeof option.onSubmit === 'function'){
                var enabledInputs= formElement.querySelectorAll('[name]:not([disabled])');
                var formValues=Array.from(enabledInputs).reduce(function(values,input){                 
                            values[input.name] = input.value                  
                    return  values;
                },{})
                option.onSubmit(formValues)
            }
            else 
            {
                formElement.submit()
            }
        }
    }
    option.rules.forEach(function(rule){
        if (Array.isArray(selectorRules[rule.selector])){
            selectorRules[rule.selector].push(rule.test);
        }
        else{
            selectorRules[rule.selector]=[rule.test]
        }

       var inputElement=formElement.querySelectorAll(rule.selector);
       Array.from(inputElement).forEach(function(inputElement){
           if (inputElement){
            var errorElement=getParent(inputElement,option.formGroupSelector).querySelector(option.errorMessage)
               inputElement.onblur=function(){
                  validate(inputElement,rule)                                   
               }
               inputElement.onclick=function(){
                errorElement.innerHTML=''
                getParent(inputElement,option.formGroupSelector).classList.remove('invalid')
               }
           }

       })
    })
}
}
validator.isRequired=function(selector){
    return {
        selector: selector,
        test(value){
            return value.trim() ? undefined : 'Vui lòng nhập trường này'
        }
    }
}
validator.minLength=function(selector,min){
    return {
        selector:selector,
        test(value){
            return value.length >= min ? undefined :`Vui lòng nhập đúng số điện thoại `
        }
    }
}
// --------------------------------------------------------------Footer---------------------------------------------------------------
footer_option_language.onclick=function(){
    toggleModal()
    modal_inner_1.classList.remove('hide')
    modal_region_and_coin_option2.classList.add('hide')
    modal_region_and_coin_option1.classList.add('hide')
    modal_region.classList.remove('hide')
    modal_coin.classList.add('hide')
    disableScroll()
}
footer_option_coin.onclick=function(){
    toggleModal()
    modal_inner_1.classList.remove('hide')
    modal_region_and_coin_option2.classList.add('hide')
    modal_region_and_coin_option1.classList.add('hide')
    modal_region.classList.add('hide')
    modal_coin.classList.remove('hide')
    disableScroll()
}




