// 수출한 거 수입해오기
import ColaGenerator from "./classes/colaGenerator.js";
import VendingMachineEvents from "./classes/vendingMachineEvents.js";

// 인스턴스 만드는 방법
const colaGenerator = new ColaGenerator();
const vendingMachineEvents = new VendingMachineEvents();

// 탑레벨 await : 최상위 모듈에서 실행되는 await
(async function() {
    await colaGenerator.setup();
    vendingMachineEvents.bindEvent();
})()


// await colaGenerator.setup();
// vendingMachineEvents.bindEvent();