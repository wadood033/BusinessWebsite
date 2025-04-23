export const categoryData: Record<
  string,
  { 
    title: string; 
    products: { 
      name: string; 
      image: string; 
      hoverImage: string; // New field for hover image
      material: string; 
      sizing: string; 
      delivery: string; 
      customPrinting: string; 
    }[]; 
  }
> = {
  // 🟢 CASUAL WEAR
  "crew-neck": {
    title: "Crew Neck Collection",
    products: [
      {
        name: " Crew Neck T-01",
        image: "/crew_neck/010.jpg",
        hoverImage: "/crew_neck/01.jpg", // Hover image
        material: "100% Cotton",
        sizing: "S-XXL",
        delivery: "3-5 Days",
        customPrinting: "Available",
      },
      {
        name: " Crew Neck T-02",
        image: "/crew_neck/011.jpg",
        hoverImage: "/crew_neck/02.jpg", // Hover image
        material: "Poly-Cotton Blend",
        sizing: "S-XXL",
        delivery: "3-5 Days",
        customPrinting: "Available",
      },
      {
        name: " Crew Neck T-03",
        image: "/crew_neck/012.jpg",
        hoverImage: "/crew_neck/03.jpg", // Hover image
        material: "Poly-Cotton Blend",
        sizing: "S-XXL",
        delivery: "3-5 Days",
        customPrinting: "Available",
      },
      {
        name: " Crew Neck T-04",
        image: "/crew_neck/013.jpg",
        hoverImage: "/crew_neck/04.jpg", // Hover image
        material: "Poly-Cotton Blend",
        sizing: "S-XXL",
        delivery: "3-5 Days",
        customPrinting: "Available",
      },
      {
        name: " Crew Neck T-05",
        image: "/crew_neck/014.jpg",
        hoverImage: "/crew_neck/09.jpg", // Hover image
        material: "Poly-Cotton Blend",
        sizing: "S-XXL",
        delivery: "3-5 Days",
        customPrinting: "Available",
      },
      {
        name: " Crew Neck T-06",
        image: "/crew_neck/5.jpg",
        hoverImage: "/crew_neck/5.jpg", // Hover image
        material: "Poly-Cotton Blend",
        sizing: "S-XXL",
        delivery: "3-5 Days",
        customPrinting: "Available",
      },
      {
        name: " Crew Neck T-07",
        image: "/crew_neck/6.jpg",
        hoverImage: "/crew_neck/6.jpg", 
        material: "Poly-Cotton Blend",
        sizing: "S-XXL",
        delivery: "3-5 Days",
        customPrinting: "Available",
      },
      {
        name: " Crew Neck T-08",
        image: "/crew_neck/7.jpg",
        hoverImage: "/crew_neck/7.jpg", 
        material: "Poly-Cotton Blend",
        sizing: "S-XXL",
        delivery: "3-5 Days",
        customPrinting: "Available",
      },
 

    ],
  },
  "hoodies": {
    title: "Hoodies Collection",
    products: [
      {
        name: " Hoodie H-01",
        image: "/hoddies/05.jpg",
        hoverImage: "/hoddies/01.jpg", // Hover image
        material: "Cotton & Polyester",
        sizing: "S-XXL",
        delivery: "4-6 Days",
        customPrinting: "Available",
      },
      {
        name: " Hoodie H-02",
        image: "/hoddies/06.jpg",
        hoverImage: "/hoddies/02.jpg", // Hover image
        material: "Cotton Fleece",
        sizing: "M-XXL",
        delivery: "4-6 Days",
        customPrinting: "Available",
      },
      {
        name: " Hoodie H-03",
        image: "/hoddies/07.jpg",
        hoverImage: "/hoddies/03.jpg", // Hover image
        material: "Cotton Fleece",
        sizing: "M-XXL",
        delivery: "4-6 Days",
        customPrinting: "Available",
      },
      {
        name: " Hoodie H-03",
        image: "/hoddies/08.jpg",
        hoverImage: "/hoddies/04.jpg", // Hover image
        material: "Cotton Fleece",
        sizing: "M-XXL",
        delivery: "4-6 Days",
        customPrinting: "Available",
      },
    ],
  },
  "2-button-jersey": {
    title: "2 Button Jersey",
    products: [
      {
        name: " 2 Button Jersey J-01",
        image: "/2buttonjersey/02.jpg",
        hoverImage: "/2buttonjersey/01.jpg", // Hover image
        material: "Polyester",
        sizing: "S-XXL",
        delivery: "4-6 Days",
        customPrinting: "Available",
      },
      {
        name: " 2 Button Jersey J-02",
        image: "/2buttonjersey/04.jpg",
        hoverImage: "/2buttonjersey/03.jpg", // Hover image
        material: "Polyester",
        sizing: "S-XXL",
        delivery: "4-6 Days",
        customPrinting: "Available",
      },
      {
        name: " 2 Button Jersey J-03",
        image: "/2buttonjersey/06.jpg",
        hoverImage: "/2buttonjersey/05.jpg", // Hover image
        material: "Polyester",
        sizing: "S-XXL",
        delivery: "4-6 Days",
        customPrinting: "Available",
      },
      {
        name: " 2 Button Jersey J-04",
        image: "/2buttonjersey/08.jpg",
        hoverImage: "/2buttonjersey/07.jpg", // Hover image
        material: "Polyester",
        sizing: "S-XXL",
        delivery: "4-6 Days",
        customPrinting: "Available",
      },
      {
        name: " 2 Button Jersey J-05",
        image: "/2buttonjersey/10.jpg",
        hoverImage: "/2buttonjersey/09.jpg", // Hover image
        material: "Polyester",
        sizing: "S-XXL",
        delivery: "4-6 Days",
        customPrinting: "Available",
      },
    ],
  },
  "full-button-pants": {
    title: "Full Button Jersey & Pants",
    products: [
      {
        name: " Jersey Front JF-01",
        image: "/fullbuttonwithpants/01.jpg",
        hoverImage: "/fullbuttonwithpants/01.jpg", // Hover image
        material: "Breathable Polyester",
        sizing: "S-XXL",
        delivery: "5-7 Days",
        customPrinting: "Available",
      },
      {
        name: " Jersey Back & Pants JB&P-01",
        image: "/fullbuttonwithpants/06.jpg",
        hoverImage: "/fullbuttonwithpants/06.jpg", // Hover image
        material: "Breathable Polyester",
        sizing: "S-XXL",
        delivery: "5-7 Days",
        customPrinting: "Available",
      },
      {
        name: " Jersey Front JF-02",
        image: "/fullbuttonwithpants/02.jpg",
        hoverImage: "/fullbuttonwithpants/02.jpg", // Hover image
        material: "Breathable Polyester",
        sizing: "S-XXL",
        delivery: "5-7 Days",
        customPrinting: "Available",
      },
      {
        name: " Jersey Back & Pants JB&P-02",
        image: "/fullbuttonwithpants/07.jpg",
        hoverImage: "/fullbuttonwithpants/07.jpg", // Hover image
        material: "Breathable Polyester",
        sizing: "S-XXL",
        delivery: "5-7 Days",
        customPrinting: "Available",
      },
      {
        name: " Jersey Front JF-03",
        image: "/fullbuttonwithpants/03.jpg",
        hoverImage: "/fullbuttonwithpants/03.jpg", // Hover image
        material: "Breathable Polyester",
        sizing: "S-XXL",
        delivery: "5-7 Days",
        customPrinting: "Available",
      },
      {
        name: " Jersey Back & Pants JB&P-03",
        image: "/fullbuttonwithpants/08.jpg",
        hoverImage: "/fullbuttonwithpants/08.jpg", // Hover image
        material: "Breathable Polyester",
        sizing: "S-XXL",
        delivery: "5-7 Days",
        customPrinting: "Available",
      },
      {
        name: " Jersey Front JF-04",
        image: "/fullbuttonwithpants/04.jpg",
        hoverImage: "/fullbuttonwithpants/04.jpg", // Hover image
        material: "Breathable Polyester",
        sizing: "S-XXL",
        delivery: "5-7 Days",
        customPrinting: "Available",
      },
      {
        name: " Jersey Back & Pants JB&P-04",
        image: "/fullbuttonwithpants/09.jpg",
        hoverImage: "/fullbuttonwithpants/09.jpg", // Hover image
        material: "Breathable Polyester",
        sizing: "S-XXL",
        delivery: "5-7 Days",
        customPrinting: "Available",
      },
      {
        name: " Jersey Front JF-05",
        image: "/fullbuttonwithpants/05.jpg",
        hoverImage: "/fullbuttonwithpants/05.jpg", // Hover image
        material: "Breathable Polyester",
        sizing: "S-XXL",
        delivery: "5-7 Days",
        customPrinting: "Available",
      },
      {
        name: " Jersey Back & Pants JB&P-05",
        image: "/fullbuttonwithpants/010.jpg",
        hoverImage: "/fullbuttonwithpants/010.jpg", // Hover image
        material: "Breathable Polyester",
        sizing: "S-XXL",
        delivery: "5-7 Days",
        customPrinting: "Available",
      },

    ],
  },
  "6-pocket-shorts": {
    title: "6 Pocket Shorts",
    products: [
      {
        name: " 6 Pocket Shorts P-01",
        image: "/microfiber6pocketshorts/08.jpg",
        hoverImage: "/microfiber6pocketshorts/01.jpg", // Hover image
        material: "Ripstop Cotton",
        sizing: "S-XXL",
        delivery: "3-5 Days",
        customPrinting: "Available",
      },
      {
        name: " 6 Pocket Shorts P-02",
        image: "/microfiber6pocketshorts/09.jpg",
        hoverImage: "/microfiber6pocketshorts/02.jpg", // Hover image
        material: "Ripstop Cotton",
        sizing: "S-XXL",
        delivery: "3-5 Days",
        customPrinting: "Available",
      },
      {
        name: " 6 Pocket Shorts P-03",
        image: "/microfiber6pocketshorts/010.jpg",
        hoverImage: "/microfiber6pocketshorts/03.jpg", // Hover image
        material: "Ripstop Cotton",
        sizing: "S-XXL",
        delivery: "3-5 Days",
        customPrinting: "Available",
      },
      {
        name: " 6 Pocket Shorts P-04",
        image: "/microfiber6pocketshorts/011.jpg",
        hoverImage: "/microfiber6pocketshorts/04.jpg", // Hover image
        material: "Ripstop Cotton",
        sizing: "S-XXL",
        delivery: "3-5 Days",
        customPrinting: "Available",
      },
      {
        name: " 6 Pocket Shorts P-05",
        image: "/microfiber6pocketshorts/012.jpg",
        hoverImage: "/microfiber6pocketshorts/05.jpg", // Hover image
        material: "Ripstop Cotton",
        sizing: "S-XXL",
        delivery: "3-5 Days",
        customPrinting: "Available",
      },
      {
        name: " 6 Pocket Shorts P-06",
        image: "/microfiber6pocketshorts/013.jpg",
        hoverImage: "/microfiber6pocketshorts/06.jpg", // Hover image
        material: "Ripstop Cotton",
        sizing: "S-XXL",
        delivery: "3-5 Days",
        customPrinting: "Available",
      },
      {
        name: " 6 Pocket Shorts P-07",
        image: "/microfiber6pocketshorts/014.jpg",
        hoverImage: "/microfiber6pocketshorts/07.jpg", // Hover image
        material: "Ripstop Cotton",
        sizing: "S-XXL",
        delivery: "3-5 Days",
        customPrinting: "Available",
      },
    ],
  },
  "american-football": {
    title: "American Football Uniforms",
    products: [
      {
        name: " Football Unifrom FU-01 ",
        image: "/americanfootballuniforms/06.jpg",
        hoverImage: "/americanfootballuniforms/01.jpg", // Hover image
        material: "Mesh Polyester",
        sizing: "M-XXL",
        delivery: "5-7 Days",
        customPrinting: "Available",
      },
      {
        name: " Football Uniform FU-02 ",
        image: "/americanfootballuniforms/07.jpg",
        hoverImage: "/americanfootballuniforms/02.jpg", // Hover image
        material: "Mesh Polyester",
        sizing: "M-XXL",
        delivery: "5-7 Days",
        customPrinting: "Available",
      },
      {
        name: " Football Uniform FU-03",
        image: "/americanfootballuniforms/08.jpg",
        hoverImage: "/americanfootballuniforms/03.jpg", // Hover image
        material: "Mesh Polyester",
        sizing: "M-XXL",
        delivery: "5-7 Days",
        customPrinting: "Available",
      },
      {
        name: " Football Uniform FU-04 ",
        image: "/americanfootballuniforms/09.jpg",
        hoverImage: "/americanfootballuniforms/04.jpg", // Hover image
        material: "Mesh Polyester",
        sizing: "M-XXL",
        delivery: "5-7 Days",
        customPrinting: "Available",
      },
      {
        name: "Football Uniform FU-05 ",
        image: "/americanfootballuniforms/010.jpg",
        hoverImage: "/americanfootballuniforms/05.jpg", // Hover image
        material: "Mesh Polyester",
        sizing: "M-XXL",
        delivery: "5-7 Days",
        customPrinting: "Available",
      },
    ],
  },
  "ls-jersey": {
    title: "Long Sleeve Jerseys",
    products: [
      {
        name: " LS Jersey LJ-01",
        image: "/lsjerseys/04.jpg",
        hoverImage: "/lsjerseys/08.jpg", // Hover image
        material: "Moisture-Wicking Fabric",
        sizing: "S-XXL",
        delivery: "5-7 Days",
        customPrinting: "Available",
      },
      {
        name: " LS Jersey LJ-02",
        image: "/lsjerseys/05.jpg",
        hoverImage: "/lsjerseys/01.jpg", // Hover image
        material: "Moisture-Wicking Fabric",
        sizing: "S-XXL",
        delivery: "5-7 Days",
        customPrinting: "Available",
      },
      {
        name: " LS Jersey LJ-03",
        image: "/lsjerseys/06.jpg",
        hoverImage: "/lsjerseys/02.jpg", // Hover image
        material: "Moisture-Wicking Fabric",
        sizing: "S-XXL",
        delivery: "5-7 Days",
        customPrinting: "Available",
      },
      {
        name: " LS Jersey LJ-04",
        image: "/lsjerseys/07.jpg",
        hoverImage: "/lsjerseys/03.jpg", // Hover image
        material: "Moisture-Wicking Fabric",
        sizing: "S-XXL",
        delivery: "5-7 Days",
        customPrinting: "Available",
      },
    ],
  },
  "soccer-jersey": {
    title: "Soccer Jerseys",
    products: [
      {
        name: " Soccer Jersey SJ-01",
        image: "/SOCCERJERSEY/06.jpg",
        hoverImage: "/SOCCERJERSEY/01.jpg", // Hover image
        material: "Lightweight Polyester",
        sizing: "S-XXL",
        delivery: "4-6 Days",
        customPrinting: "Available",
      },
      {
        name: " Soccer Jersey SJ-02",
        image: "/SOCCERJERSEY/07.jpg",
        hoverImage: "/SOCCERJERSEY/02.jpg", // Hover image
        material: "Lightweight Polyester",
        sizing: "S-XXL",
        delivery: "4-6 Days",
        customPrinting: "Available",
      },
      {
        name: " Soccer Jersey J-03",
        image: "/SOCCERJERSEY/08.jpg",
        hoverImage: "/SOCCERJERSEY/03.jpg", // Hover image
        material: "Lightweight Polyester",
        sizing: "S-XXL",
        delivery: "4-6 Days",
        customPrinting: "Available",
      },
      {
        name: " Soccer Jersey J-04",
        image: "/SOCCERJERSEY/09.jpg",
        hoverImage: "/SOCCERJERSEY/04.jpg", // Hover image
        material: "Lightweight Polyester",
        sizing: "S-XXL",
        delivery: "4-6 Days",
        customPrinting: "Available",
      },
      {
        name: " Soccer Jersey J-05",
        image: "/SOCCERJERSEY/010.jpg",
        hoverImage: "/SOCCERJERSEY/05.jpg", // Hover image
        material: "Lightweight Polyester",
        sizing: "S-XXL",
        delivery: "4-6 Days",
        customPrinting: "Available",
      },
   
    ],
  },
};
