        //! Создание рекламных карточек

//Создание массива объектов с рекламными карточками
const marketingCard = [];    
function CreatMarketingCard() {
    // Создание массива с информацией для рекламных карточек
    const textMarketingCard = [`Origins`, `Arabica, Robusta coffee beans are quality according to international standards.`, 
    `Quality`, `Each coffee bean is a highly focused process of coffee artisans.`,
     `Nuts`, `70% of coffee cup quality comes from green bean origin and quality.`, 
     `Phache`,`The coffee beans are molted through thorough and rigorous roasting.`
    ];
    
    // Шаблон пути к изображениям с рекламными карточками
    let imgMarketingCard = `./image/IC (0).png`;   
    
    // массив для карточек
    const ImgMarketingCard = [];
    
    // Переменная с индексом для генерации изображений  для рекламных карточек
    let IndexImgMarketingCard;  
    for (let index = 0; index < imgMarketingCard.length; index++) {
        let num = `0`;
        if (num == imgMarketingCard[index]){
            IndexImgMarketingCard = index;
        }
        
    }
    for (let index = 0; index < (textMarketingCard.length/2); index++) {
     
            let ImgCreate = imgMarketingCard.slice(0 , IndexImgMarketingCard) + index + imgMarketingCard.slice((IndexImgMarketingCard+1));
            ImgMarketingCard.push(ImgCreate);
            
    }
    // Создание динамических Id для карточек
    let IdGenerator = () => Math.floor(Math.random()*1000);
    
    //Заполнение массива объектов с рекламными карточками
    for (let iterator = 0; iterator < textMarketingCard.length; iterator++) {
        if (iterator%2 == 0) {
            marketingCard.push({
                                id: IdGenerator(),
                                img: ImgMarketingCard[iterator/2],
                                name:textMarketingCard[iterator],
                                write:textMarketingCard[iterator+1],
    
                             });
        }
    };
    
}






















        //! Создание карточек товаров

// Создание массива объектов с карточками товаров
const saleCard = [];            
// Шаблон пути к изображениям с карточками товаров
let imgSaleCard = `./image/image (1).png`;    

// Переменная с индексом для генерации изображений для  карточек товаров
let IndexImgSaleCard;