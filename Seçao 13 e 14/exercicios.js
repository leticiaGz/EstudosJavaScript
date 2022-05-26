// ex 41
const validaMaiuscula=/[A-Z]/;
console.log(validaMaiuscula.test("LETICIA"))
console.log(validaMaiuscula.test("leticia"))
console.log("------------------------------------------- ")

//ex 42
const Id=/\d+ID\b/

console.log(Id.test("56232352ID"))
console.log(Id.test("hjjjI"))
console.log("------------------------------------------- ")

//ex 43 (chamado choice pattern)

const marca=/Marca: (Nike|Adidas|Puma|Asics)/;

console.log(marca.test("Marca: Nike"))
console.log(marca.test("Marca: Lilica"))
console.log(marca.test("Nike"))
console.log("------------------------------------------- ")

//ex 44 (valida IP , a virgula indica intervalo)

const IP=/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;
console.log(IP.test("127.033.033.1"))
console.log(IP.test("155.0.0.1"))
console.log(IP.test("124.25.01"))
console.log("------------------------------------------- ")

// ex 45 a (expessao nao esta valida)
const user=/^(?={3,16}$)[a-z0-9-_]/
console.log(user.test("leticia_"))
console.log(user.test("gggggggggggggggggggggggggggggggggggggggggggggggggggggg"))



