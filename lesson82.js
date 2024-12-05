//ex 1
console.log("*******1********");
//1
const arrFruit = [
  //2
  {
    name: "banana",
    calories: 100,
    price: 7,
    print() {
      console.log("------");
      for (const key in this) {
        if (typeof this[key] !== "function") {
          console.log(key, this[key]);
        }
      }
    },
  },
  {
    name: "apple",
    calories: 50,
    price: 3,
    print() {
      console.log("------");

      for (const key in this) {
        if (typeof this[key] !== "function") {
          console.log(key, this[key]);
        }
      }
    },
  },
  new Object(),
];
//3
arrFruit[2].name = "peach";
arrFruit[2].calories = 23;
arrFruit[2].price = 7;
arrFruit[2].print = function () {
  console.log("------");

  for (const key in this) {
    if (typeof this[key] !== "function") {
      console.log(key, this[key]);
    }
  }
};
//4
for (const i of arrFruit) {
  i.print();
}
//5
arrFruit[0].colors = "pink";
console.log(arrFruit[0]);
//6
for (const i of arrFruit) {
  if ("colors" in i) {
    i.print();
  }
  i.print();
}
//7
arrFruit[0].print = function () {
  console.log("------");

  for (const key in this) {
    if (typeof this[key] !== "function") {
      console.log(key, this[key]);
    }
  }
};
//8
delete arrFruit[1].price;
arrFruit[1].print();

let y = "";
for (const key in arrFruit[1]) {
  if (typeof arrFruit[1][key] !== "function") {
    y += key + " : " + arrFruit[1][key] + "<br>";
  }
}
const x = document.createElement("p");
x.innerHTML = y;
document.body.append(x);
//9
function f9() {
  arrFruit[0].price = document.getElementById("pricee").value;
  arrFruit[0].print();
}
//10
function f10() {
  let cal = document.getElementById("calories").value;
  let a = arrFruit.filter((item) => item.calories <= cal);
  console.log(a);
}
//11
for (const i of arrFruit) {
  Object.defineProperty(i, "Price", {
    get() {
      return i.price;
    },
    set(p) {
      if (p > 10 && p < 10000) {
        i.price = p;
      }
    },
  });
}
arrFruit[0].Price = 122;
arrFruit[0].print();
console.log("*******2********");
//ex 2
//1
function MessageBox(
  colorText,
  colorBackground,
  imageIcon,
  message = { title: "", body: "" }
) {
  this.colorText = colorText;
  this.colorBackground = colorBackground;
  this.imageIcon = imageIcon;
  this.message = message;
  this.render = () => {
    const d = document.createElement("p");
    d.innerHTML = this.message.title + " : " + this.message.body;
    d.style.color = colorText;
    d.style.backgroundColor = colorBackground;

    const img = document.createElement("img");
    img.src = this.imageIcon;

    d.append(img);
    return d;
  };
}
const info = new MessageBox("black", "green", "info.jpg", {
  title: "info",
  body: "tehila miller",
});

document.body.append(info.render());
const error = new MessageBox("black", "red", "error.jpg", {
  title: "error",
  body: "tehila miller",
});

document.body.append(error.render());
const worning = new MessageBox("black", "yellow", "warning.jpg", {
  title: "warning",
  body: "tehila miller",
});

document.body.append(worning.render());
//3
