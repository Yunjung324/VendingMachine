class ColaGenerator{
    constructor() {
        this.itemList = document.querySelector('.section1 .cola-list');
    }

    async setup(){
        const response = await this.loadData();
        this.colaFactory(response);
    }


    async loadData() {
        // 비동기 처리 해줘야함 (async await)
        try{
            //json 파일 가져오기
            const response = await fetch('./items.json')

            if(response.ok) {  //서버의 응답 코드가 200~299인 경우(응답 잘 온 경우) JS 객체로 바꾸기
                return response.json();
            } else {
                // 에러난 서버 응답 코드를 던져주기
                throw new Error(response.status);
            }
        } catch(error){
            console.log(error); // throw에서 가장 가까운 catch문인 여기서 응답 코드 받아와서 console.log 해주기
        }
    }
    // data는 loadData를 통해 들어오는 json 데이터
    // el는 json의 하나하나의 요소를 의미
    colaFactory(data) {
        const docFrag = document.createDocumentFragment();
        data.forEach((el) => {
            const item = document.createElement('li');
            const itemTemplate = `
            <button class="btn-cola" type=" button" data-item = "${el.name}" data-count = ${el.count} data-price = "${el.cost}" data-img = "${el.img}">
                <img class="cola-img" src="./img/${el.img}" alt="">
                <span class="cola-name">${el.name}</span>
                <strong class="cola-price">${el.cost}</strong>
            </button>
            `;

            item.innerHTML = itemTemplate;
            // this.itemList.append(item)
            docFrag.append(item);
        })
        this.itemList.append(docFrag) //한번에 붙여주기
    }
}

// 밖으로 수출하는 애
export default ColaGenerator;