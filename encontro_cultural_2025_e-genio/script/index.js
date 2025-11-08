const div = document.getElementById("div_srch_links");

const h4_click_2_show = document.getElementById("h4_click_2_show");
const btn_show = document.getElementById("btn_show");

var display = 0;

console.log(`display = ${display}`)

function hide_and_show()
{
    if(display == 1)
    {
        div.classList.add("go_in")
        div.classList.remove("go_out")

        h4_click_2_show.textContent = "clique na opção que deseja.";
        btn_show.textContent = "Mostrar menos.";
        
        display = 0;

        div.addEventListener("animationend", () => {
            div.style.display = "none";
        }, {once: True});


        console.log(`display = ${display}`)
    }
    else
        {
        div.style.display = "block";

        div.classList.add("go_out");
        div.classList.remove("go_in");

        h4_click_2_show.textContent = "";
        btn_show.textContent = "Mostrar mais.";

        display = 1;
        console.log(`display = ${display}`)
        }
}
