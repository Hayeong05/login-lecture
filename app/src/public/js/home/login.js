"use strict"

const { login } = require("../../../routes/home/home.ctrl");

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

    console.log(id);
    console.log("hello");

    loginBtn.addEventListener("click", login);

    function login() {
        const req = {
            id : id.value,
            psword : psword.value,
        };

        fetch("/login", {
            method : "POST",
            headers : {
                "ContentType" : "application/json"
            },
            body : JSON.stringify(req),
        });
    }