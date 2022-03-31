import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/favicon.ico" />
                <link rel="alternate" hrefLang="en" href="https://contibus.hu/en" />
                <link rel="alternate" hrefLang="hu" href="https://contibus.hu" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta
                    name="description"
                    content="Cégünk autóbusz bérbeadással foglalkozik. 18-83 fős autóbuszokkal vállaljuk cégek, iskolák, baráti társaságok utazásainak lebonyolítását."
                />
                <meta name="copyright" content="2020 © Neoline KFT." />
                <meta name="country" content="Hungary" />
                <meta name="robots" content="index, follow" />
                <meta
                    name="keywords"
                    content="Buszbérlés, Buszrendelés, osztálykirándulás, szakmai út, élmény, városnézés, kikapcsolódás, 
                külföldi utazás, kirándulás, személyszállítás, belföld, külföld, nyaralás, sítúra, 
                Tanulmányút, Munkásjárat, Transzfer, Luxus autóbusz, Luxusautóbusz"
                />
                <meta name="content-language" content="hu, en" />
                <meta
                    property="og:description"
                    content="1990 óta foglalkozunk belföldi és nemzetközi autóbuszos személyszállítással. Szolgáltatásunk közé tartozik többek között: autóbusz bérlés és kölcsönzés, iskolai osztálykirándulások, szakmai utak, dolgozók szállítása és munkásjáratok szervezése."
                />
                <meta property="og:site_name" content="ContiTrans" />
                <meta property="og:title" content="ContiTrans" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="hu_HU" />
                <meta property="og:image" content="https://contibus.hu/img/3.jpg" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="ContiTrans" />
                <meta
                    name="twitter:description"
                    content="1990 óta foglalkozunk belföldi és nemzetközi autóbuszos személyszállítással. Szolgáltatásunk közé tartozik többek között: autóbusz bérlés és kölcsönzés, iskolai osztálykirándulások, szakmai utak, dolgozók szállítása és munkásjáratok szervezése."
                />
                <title>ContiTrans</title>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
