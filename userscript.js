// ==UserScript==
// @name         AutoMine
// @namespace    *
// @version      0.3
// @description  i love it
// @author       AkunaPaw
// @include     http://amininggame.com/index.php#
// @include     http://amininggame.com/index.php
// @include     http://amininggame.com/index.php*




// ==/UserScript==


(function () {





    setInterval(function () {
        if (document.getElementsByName("timeRemaining")[0].innerText != "LEAVE") {
            document.getElementsByName("bossPortal")[0].click();
            document.getElementsByName("buttons")[0].children[1].click();
            document.getElementsByName("continue")[0].click();

        }

        document.getElementsByName("continue")[0].click();

    }, 2000);

    var i = 0;

    setInterval(function () {

        document.getElementsByName("continue")[0].click();


    }, 900);

    setInterval(function () {
        if (document.getElementsByName("timeRemaining")[0].innerText != "LEAVE") {
            if (i > 19) {
                i = 0;
            }
            document.getElementsByName("item_details")[i++].children[6].click();
            document.getElementsByName("buttons")[0].children[1].click();
            document.getElementsByName("continue")[0].click();
            document.getElementsByName("buttons")[0].children[1].click();
            document.getElementsByName("continue")[0].click();
        }
    }, 5000);

    setInterval(function () {
        if (document.getElementsByName("timeRemaining")[0].innerText == "JOIN") {
            document.getElementsByName("globalBoss-join")[0].click();
        }
    }, 90000);


    var bestminer;
    var bestopm;
    var prices = [0, 0, 0, 0, 0, 0];
    var moneynow;

    setInterval(function () {
        if (document.getElementsByName("timeRemaining")[0].innerText != "LEAVE") {

            prices[0] = Number(document.getElementsByName("price")[0].innerHTML.replace(/\,/g, ''));
            prices[1] = Number(document.getElementsByName("price")[1].innerHTML.replace(/\,/g, ''));
            prices[2] = Number(document.getElementsByName("price")[2].innerHTML.replace(/\,/g, ''));
            prices[3] = Number(document.getElementsByName("price")[3].innerHTML.replace(/\,/g, ''));
            prices[4] = Number(document.getElementsByName("price")[4].innerHTML.replace(/\,/g, ''));
            prices[5] = Number(document.getElementsByName("price")[5].innerHTML.replace(/\,/g, ''));

            var opm0 = Number(document.getElementsByName("opm")[0].innerHTML.replace(/\,/g, '')) / prices[0];
            var omp1 = Number(document.getElementsByName("opm")[1].innerHTML.replace(/\,/g, '')) / prices[1];
            var opm2 = Number(document.getElementsByName("opm")[2].innerHTML.replace(/\,/g, '')) / prices[2];
            var opm3 = Number(document.getElementsByName("opm")[3].innerHTML.replace(/\,/g, '')) / prices[3];
            var opm4 = Number(document.getElementsByName("opm")[4].innerHTML.replace(/\,/g, '')) / prices[4];
            var opm5 = Number(document.getElementsByName("opm")[5].innerHTML.replace(/\,/g, '')) / prices[5];


            moneynow = Number(document.getElementById('money_display').innerHTML.replace(/\,/g, '').replace('$', ''));
            if (document.getElementsByName("owned")[0].innerText != "999 / 1000") {
                bestopm = opm0;
                bestminer = 0;
            }
            if (bestopm < omp1 && document.getElementsByName("owned")[1].innerText != "900 / 900") {
                bestopm = omp1;
                bestminer = 1;
            }
            if (bestopm < opm2 && document.getElementsByName("owned")[2].innerText != "800 / 800") {
                bestopm = opm2;
                bestminer = 2;
            }

            if (bestopm < opm3 && document.getElementsByName("owned")[3].innerText != "700 / 700") {
                bestopm = opm3;
                bestminer = 3;
            }

            if (bestopm < opm4 && document.getElementsByName("owned")[4].innerText != "600 / 600") {
                bestopm = opm4;
                bestminer = 4;
            }

            if (bestopm < opm5 && document.getElementsByName("owned")[5].innerText != "600 / 600") {
                bestminer = 5;
            }



            if (moneynow > prices[bestminer]) {
                switch (bestminer) {
                    case 0:
                        document.getElementsByName("buy-steve")[0].click();
                        break;
                    case 1:
                        document.getElementsByName("buy-miner")[0].click();
                        break;
                    case 2:
                        document.getElementsByName("buy-miner2")[0].click();
                        break;
                    case 3:
                        document.getElementsByName("buy-heavenlyminer")[0].click();
                        break;
                    case 4:
                        document.getElementsByName("buy-hellminer")[0].click();
                        break;
                    case 5:
                        document.getElementsByName("buy-enderminer")[0].click();
                        break;
                    default:
                }
            }

            document.getElementsByName("buttons")[0].children[1].click();
        }
    }, 5000);





    setInterval(function () {
        if (document.getElementsByName("timeRemaining")[0].innerText == "LEAVE") {
            document.getElementsByName("globalBossImg")[0].click();
        }
    }, 20);



    setInterval(function () {
        if (document.getElementsByName("timeRemaining")[0].innerText != "LEAVE") {
            if (document.getElementById('bc_display').innerText.replace(/\,/g, '') > 1) {
                document.getElementsByName('hiremax_scientists')[0].click();
            }

            document.getElementsByName("buttons")[0].children[1].click();
        }
    }, 2000);

    setInterval(function () {
        window.location.reload(false);
    }, 2000000);

})();
