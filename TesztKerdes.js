let pontszam = 0;
const pontszamTarolo = document.getElementById("pontszamTarolo");
export default class TesztKerdes {
    #szuloElem;
    #obj = {};
    #index;
    #valasz = [];
    #kerdesElem;

    constructor(szuloElem, obj, index, valasz) {
        this.#szuloElem = szuloElem;
        this.#obj = obj;
        this.#valasz = valasz;
        this.#index = index;
        this.megjelenit();
        this.#kerdesElem = this.#szuloElem.querySelector(".kerdesTarolo:last-child")
        this.esemenykezelo();
    }

    megjelenit() {
        let html = `
        <div class="kerdesTarolo">
            <h1 class="cim">${this.#obj.mondat}</h1>
            <div class="valasztasok">
                <button class="valasztas">${this.#obj.valasztas[0]}</button>
                <button class="valasztas">${this.#obj.valasztas[1]}</button>
                <button class="valasztas">${this.#obj.valasztas[2]}</button>
                <button class="valasztas">${this.#obj.valasztas[3]}</button>
            </div>
        </div>
        `;
        this.#szuloElem.insertAdjacentHTML("beforeend", html);
        this.#kerdesElem = this.#szuloElem.querySelector(".kerdesTarolo:last-child");
        this.esemenykezelo();
    }

    esemenykezelo() {
        const gombok = this.#kerdesElem.querySelectorAll(".valasztas");
        gombok.forEach((gomb) => {
            gomb.addEventListener("click", () => {
                const kivalasztottValasz = gomb.textContent.trim();
                const helyesValasz = this.#obj.valasztas[0];
    
                if (kivalasztottValasz === helyesValasz) {
                    gomb.style.backgroundColor = "rgb(12, 241, 5)";
                    pontszam+=1;
                    pontszamTarolo.textContent = `Pontszám: ${pontszam}`;
                } else {
                    gomb.style.backgroundColor = "red";
                }
                gombok.forEach(g => g.disabled = true);
        });
            })

    }
}

