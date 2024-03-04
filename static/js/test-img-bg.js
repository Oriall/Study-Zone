  
  
function click()
{
    document.getElementById('bg').style.backgroundImage = URL('bg.png')
}

  const defaultBtn = document.querySelector("#default-btn");
                        const customBtn = document.querySelector("#custom-btn");
                        const img = document.querySelector("img")
                        function defaultBtnActive(){
                            defaultBtn.click();
                        }
                        defaultBtn.addEventListener("change",function(){
                            const file=this.files[0];
                            if(file){
                                const reader=new FileReader();
                                reader.onload = function(){
                                    const result=reader.result;
                                    img.src = result;
                                }
                                reader.readAsDataURL(file);
                            }
                        });