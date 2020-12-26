window.onload = function() {
    var aData = [{
            "imgUrl": "image/1.png",
            "proName": " soft薯片 ",
            "proPrice": "5.5",
            "proComm": "1"
        },
        {
            "imgUrl": "image/2.png",
            "proName": " Redmi ",
            "proPrice": "99.9",
            "proComm": "9.7"
        },
        {
            "imgUrl": "image/3.png",
            "proName": " 米家蓝牙温湿度计 ",
            "proPrice": "65",
            "proComm": "1.3"
        },
        {
            "imgUrl": "image/4.png",
            "proName": " 小米小爱智能闹钟 ",
            "proPrice": "149",
            "proComm": "1.1"
        },
        {
            "imgUrl": "image/5.png",
            "proName": "米家电子温湿度计Pro  ",
            "proPrice": "750",
            "proComm": "0.3"
        },
        {
            "imgUrl": "image/6.png",
            "proName": " 小米手环3 NFC版 Pro  ",
            "proPrice": "199",
            "proComm": "3.3"
        },
        {
            "imgUrl": "image/7.png",
            "proName": " 小米手环3 / 4 通用腕带",
            "proPrice": "19.9",
            "proComm": "1.2"
        },
        {
            "imgUrl": "image/8.png",
            "proName": "  米家温湿度传感器 ",
            "proPrice": "45",
            "proComm": "0.6"
        },
        {
            "imgUrl": "image/9.png",
            "proName": "  米家电子温湿度计Pro 3个装  ",
            "proPrice": "207",
            "proComm": "0.3"
        },
        {
            "imgUrl": "image/10.png",
            "proName": " 小米手环3 ",
            "proPrice": "199",
            "proComm": "7.2"
        }
    ];
    var oBox = document.getElementById("box");
    var oCar = document.getElementById("car");
    var oUl = document.getElementById("box").getElementsByTagName("ul")[0];

    for (let i = 0; i < aData.length; i++) {
        var oLi = document.createElement("li");
        let data = aData[i];
        oLi.innerHTML += '<div class="pro_img"><img src="' + data["imgUrl"] + '" width="150" height="150"></div>';
        oLi.innerHTML += '<h3 class="pro_name"><a href="#">' + data["proName"] + '</a></h3>';
        oLi.innerHTML += '<p class="pro_price">' + data["proPrice"] + '元</p>';
        oLi.innerHTML += '<p class="pro_rank">' + data["proComm"] + '万人好评</p>';
        oLi.innerHTML += '<div class="add_btn">加入购物车</div>';
        oUl.appendChild(oLi);

    }
    var aBtn = getClass(oBox, "add_btn"); //获取box下的所有添加购物车按钮
    var number = 0; //初始化商品数量
    for (let i = 0; i < aBtn.length; i++) {
        number++;
        aBtn[i].index = i;
        aBtn[i].onclick = function() {
            var oDiv = document.createElement("div");
            let data = aData[this.index];
            oDiv.className = "row hid";
            oDiv.innerHTML += '<div class="check left"> <em class="em_check" id="em_check" onclick="em_check()" >√</em></div>';
            oDiv.innerHTML += '<div class="img left"><img src="' + data["imgUrl"] + '" width="80" height="80"></div>';
            oDiv.innerHTML += '<div class="name left"><span>' + data["proName"] + '</span></div>';
            oDiv.innerHTML += '<div class="price left"><span>' + data["proPrice"] + '元</span></div>';
            oDiv.innerHTML += ' <div class="item_count_i"><div class="num_count"><div class="count_d">-</div><div class="c_num">1</div><div class="count_i">+</div></div> </div>'
            oDiv.innerHTML += '<div class="subtotal left"><span>' + data["proPrice"] + '元</span></div>'
            oDiv.innerHTML += '<div class="ctrl left"><a href="javascript:;"><i class="glyphicon glyphicon-remove-circle"></i></a></div>';
            oCar.appendChild(oDiv);
            var delBtn = oDiv.lastChild.getElementsByTagName("a")[0];
            var check = oDiv.firstChild.getElementsByTagName("em")[0];
            check.onclick = function() {
                if (check.className == "em_check em_acity") {
                    check.classList.remove("em_acity");

                } else {
                    check.classList.add("em_acity");
                }
                getAmount();
            }
            delBtn.onclick = function() {
                    var result = confirm("确定删除吗?");
                    if (result) {
                        oCar.removeChild(oDiv);
                        number--;
                        getAmount();
                    }
                }
                //获取所有的数量加号按钮
            var i_btn = document.getElementsByClassName("count_i");
            for (var k = 0; k < i_btn.length; k++) {
                i_btn[k].onclick = function() {
                    var bt = this;
                    //获取小计节点
                    var at = this.parentElement.parentElement.nextElementSibling;
                    //获取单价节点
                    var pt = this.parentElement.parentElement.previousElementSibling;
                    //获取数量值
                    var node = bt.parentNode.childNodes[1];
                    console.log(node);
                    var num = node.innerText;
                    num = parseInt(num);
                    num++;
                    node.innerText = num;
                    //获取单价
                    var price = pt.innerText;
                    price = price.substring(0, price.length - 1);
                    //计算小计值
                    at.innerText = price * num + "元";
                    //计算总计值
                    getAmount();
                }
            }
            //获取所有的数量减号按钮
            var d_btn = document.getElementsByClassName("count_d");
            for (k = 0; k < i_btn.length; k++) {
                d_btn[k].onclick = function() {
                    var bt = this;
                    //获取小计节点
                    var at = this.parentElement.parentElement.nextElementSibling;
                    //获取单价节点
                    var pt = this.parentElement.parentElement.previousElementSibling;
                    //获取c_num节点
                    var node = bt.parentNode.childNodes[1];
                    var num = node.innerText;
                    num = parseInt(num);
                    if (num > 1) {
                        num--;
                    }
                    node.innerText = num;
                    //获取单价
                    var price = pt.innerText;
                    price = price.substring(0, price.length - 1);
                    //计算小计值		
                    at.innerText = price * num + "元";
                    //计算总计值
                    getAmount();
                }
            }
        }
    }

    function getClass(oBox1, tagname) {
        var aTag = oBox1.getElementsByTagName("*");
        var aBox = [];
        for (let i = 0; i < aTag.length; i++) {
            if (aTag[i].className == tagname) {
                aBox.push(aTag[i]);
            }
        }
        return aBox;
    }
}

var index = false;

function checkAll() {
    var choose = document.getElementById("car").getElementsByTagName("em");
    if (choose.length != 1) {
        for (let i = 1; i < choose.length; i++) {
            if (!index) {
                choose[0].classList.add("em_acity2")
                choose[i].classList.add("em_acity");
            } else {
                choose[i].classList.remove("em_acity");
                choose[0].classList.remove("em_acity2")
            }
        }
        index = !index;
    }
    getAmount();
}

//进行价格合计
function getAmount() {
    var ns = document.getElementsByClassName("em_acity");
    sum = 0;
    //选中框
    document.getElementById("price_num").innerText = sum;
    for (var y = 0; y < ns.length; y++) {
        //小计
        var amount_info = ns[y].parentElement.parentElement.lastElementChild.previousElementSibling;
        var num = parseInt(amount_info.innerText);
        sum += num;
        document.getElementById("price_num").innerText = sum;
    }
}