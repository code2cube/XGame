function Form() {

    function factors(number, deez) {
        let factors = [];
        let checked = [];
        for (let i=1; i < 10; i++) {
            if (checked.includes(i)) {
                continue;
            } else {
                if (number % i === 0) {
                    const lol = number / i;
                    factors.push(`${lol} and ${i}`)
                    checked.push(lol);
                    checked.push(i);
                } else {
                    continue;
                }
            }
        }
        return xGame(number, factors, deez);
    }

    function xGame(number, factors, deez) {
        let sent = false;
        for (let i=0; i < factors.length; i++) {
            const a = factors[i]
            const delimiter = " and ";
            const [before, after] = a.split(delimiter);
            const int1 = parseInt(before);
            const int2 = parseInt(after);
            if (int1 + int2 === deez) {
                sent = `${int1} and ${int2} multiply to ${number} and add to ${deez}`;
            }
            else if (-int1 + int2 === deez) {
                sent = `${-int1} and ${int2} multiply to ${number} and add to ${deez}`;
            }
            else if (int1 + -int2 === deez) {
                sent = `${int1} and ${-int2} multiply to ${number} and add to ${deez}`;
            }
            else if (-int1 + -int2 === deez) {
                sent = `${-int1} and ${-int2} multiply to ${number} and add to ${deez}`;
            }
        }
        if (sent === false) {
            // return "Not Possible";
            alert("Not Possible!");
        } else {
            // return sent;
            alert(sent);
        }
    }

    //console.log(factors(16, 8))

    function lol(event) {
        event.preventDefault();
        const mT = document.querySelector('#mT').value;
        const aT = document.querySelector('#aT').value;
        factors(parseInt(mT), parseInt(aT))
        //alert(`${parseInt(mT)} | ${parseInt(aT)}`)
    }

    return (
        <div className="container">
            <form onSubmit={lol}>
                <div class="mb-3">
                    <label for="mT" class="form-label">Multiply To</label>
                    <input type="number" class="form-control" id="mT" placeholder="15" required/>
                </div>
                <div class="mb-3">
                    <label for="aT" class="form-label">Add To</label>
                    <input type="number" class="form-control" id="aT" placeholder="8" required/>
                </div>
                <button class="btn btn-dark" type="submit">Calculate</button>
            </form>
        </div>
    );
}

export default Form;