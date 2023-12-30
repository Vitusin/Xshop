import React from "react";
import Product from "./components/product";
import CategoryInfoDesktop from "./components/CategoryInfoDesktop";

const App = () => {
  const products = [
    {
      id: 1,
      name: "Čerstvé máslo, 240-260 g",
      price: "30 Kč",
      image: "https://assets.scuk.cz/images/20190228/c6/c6f475fac71ce4d19b83a82340da60298bf8d985-fit-resize-white-320x320.webp",
    },
    {
      id: 2,
      name: "BIO čerstvá vejce - různé velikosti, 30 ks",
      price: "40 Kč",
      image: "https://assets.scuk.cz/images/20211129/40/4020f31b25a766eab142b54b97aa4a55a917b1c9-fit-resize-white-320x320.webp",
    },
    {
      id: 3,
      name: "Čerstvé máslo - rodinné balení, 0,99-1,01 kg",
      price: "30 Kč",
      image: "https://assets.scuk.cz/images/20190228/c6/c6f475fac71ce4d19b83a82340da60298bf8d985-fit-resize-white-320x320.webp",
    },
    {
      id: 4,
      name: "Čerstvá vejce z volného chovu na trávě - různé velikosti, 30 ks",
      price: "30 Kč",
      image: "https://assets.scuk.cz/images/20211129/40/4020f31b25a766eab142b54b97aa4a55a917b1c9-fit-resize-white-320x320.webp",
    },
    {
      id: 5,
      name: "Farmářské mléko plnotučné ve skle, 1 l",
      price: "30 Kč",
      image: "https://assets.scuk.cz/images/20180328/6e/6e66a6ccf8399833b444279dd30fab0056c64663-fit-resize-white-320x320.webp",
    },
    {
      id: 6,
      name: "Čerstvá vejce z volného chovu na trávě - vel. M, 10 ks",
      price: "30 Kč",
      image: "https://assets.scuk.cz/images/20210413/82/8252c36fad7c6bd12289d107f607eb1754bd92a1-fit-resize-white-320x320.webp  ",
    },
    {
      id: 7,
      name: "Farmářské mléko, 1",
      price: "30 Kč",
      image: "https://assets.scuk.cz/images/20231214/3e/3e5848618457c2cf46a38083a7b1f1270cecb889-fit-resize-white-320x320.webp",
    },
    {
      id: 8,
      name: "BIO vejce - vel. L, 30 ks",
      price: "30 Kč",
      image: "https://assets.scuk.cz/images/20210708/e2/e2cca77cb31d51cbf42c9caa5a9493dedb494634-fit-resize-white-320x320.webp",
    },
    {
      id: 9,
      name: "Ghí přepuštěné máslo, 720 ml",
      price: "399 Kč",
      image: "https://assets.scuk.cz/images/20210617/03/03d2d70d48cb3482397dea319c371c7ad4037344-fit-resize-white-320x320.webp",
    },
    {
      id: 10,
      name: "Farmářský jogurt bílý ve vratném obalu, 1 kg",
      price: "59 Kč",
      image: "https://assets.scuk.cz/images/20201126/b3/b321bccfd2eaee9cfeb54c55cb9c284ee2a5d5c3-fit-resize-white-320x320.webp",
    },
    {
      id: 11,
      name: "BIO přepuštěné máslo Ghí, 720 ml",
      price: "415 Kč",
      image: "https://assets.scuk.cz/images/20230727/88/88defcc44efb17a3f6afd45e96c84d96efee5b22-fit-resize-white-320x320.webp",
    },
    {
      id: 12,
      name: "Kimchi pálivé, 1 kg",
      price: "235 Kč",
      image: "https://assets.scuk.cz/images/20210223/f6/f6d74eab817ed7e3b9abbb3638e8047946e10086-fit-resize-white-320x320.webp",
    },
    {
      id: 13,
      name: "Kvašená zelenina pickles, 1 kg",
      price: "179 Kč",
      image: "https://assets.scuk.cz/images/20210223/ac/ac1ced51cc7ef62e7d4649a283d2d41c55f15cbf-fit-resize-white-320x320.webp",
    },
    {
      id: 14,
      name: "BIO přepuštěné máslo GHÍ, 450 ml",
      price: "389 Kč",
      image: "https://assets.scuk.cz/images/20190221/f0/f0e0b1bfeb9da3efbdc17be86dd19db477248c61-fit-resize-white-320x320.webp",
    },
    {
      id: 15,
      name: "Sada ochucených jogurtů, 7x 150 g",
      price: "164 Kč",
      image: "https://assets.scuk.cz/images/20220531/dd/dd574d689487e55ccdd313b5e6554f27500bf91a-fit-resize-white-320x320.webp",
    },
    {
      id: 16,
      name: "Čerstvá vejce z volného chovu na trávě - vel. S, 30 ks",
      price: "245 Kč",
      image: "https://assets.scuk.cz/images/20211129/40/4020f31b25a766eab142b54b97aa4a55a917b1c9-fit-resize-white-320x320.webp",
    },
    {
      id: 17,
      name: "Kysané zelí ve sklenici, 3 kg",
      price: "255 Kč",
      image: "https://assets.scuk.cz/images/20201020/72/7293e0d01d48921253c761b71e6e2ac7ed9687a6-fit-resize-white-320x320.webp",
    },
    {
      id: 18,
      name: "Kefír, 1 kg",
      price: "45 Kč",
      image: "https://assets.scuk.cz/images/20180313/80/808f81f4ac1aadf71b4bde8a76c559825b4e3edb-fit-resize-white-320x320.webp",
    },
    // další produkty...

  ];

  return (
    <div className="App">
      <CategoryInfoDesktop />
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default App;
