import bcrypt from 'bcryptjs' // bonne idée de faire un fichier avec les données de la database
const data = {

  "users":[
    {
      firstName :"admin",
      lastName :"admin",
      email:"admin@gmail.com",
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
      adrressNB: '1',
      addresST: 'admin',
      ville: 'admin',
      codePostal:'18000'

    },
    {
      firstName :"client1",
      lastName :"client1",
      email:"client1@gmail.com",
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
      adrressNB: '1',
      addresST: 'clien1',
      ville: 'client1',
      codePostal:'20000'

    },
  ],


  "products":[
    {
      key: 1,
      image: "https://www.academiedugout.fr/images/50789/1200-686/10023-nigiri-sushi.jpg?poix=50&poiy=50",
      reference: "Su1",
      title: "Sushi saumon",
      description:
        "Japanese dish",
      prix:"5",
      quantity: "5",
      category: "Sushi"
    },
    {
      key: 2,
      image: "https://www.okome-sushi.fr/websites/57994eae3216383175507900aba5eda0/img/californiaC1_20190523172931.jpg",
      reference: "C1",
      title: "California roll saumon",
      description:
        "Japanese dish",
      prix:"5",
      quantity: "5",
      category: "Sushi"

    },
    {
      key: 3,
      image: "https://www.okome-sushi.fr/websites/57994eae3216383175507900aba5eda0/img/carte1-makiM2_20190523172700.jpg",
      reference: "M1",
      title: "Maki saumon",
      description:
        "Japanese dish",
      prix:"5",
      quantity: "5",
      category: "Sushi"

    },
    {
      key: 4,
      image: "https://www.okome-sushi.fr/websites/57994eae3216383175507900aba5eda0/img/SASHIMI%20ET%20TATAKI_20190523174006.jpg",
      reference: "S1",
      title: "Sashimi thon",
      description:
        "Japanese dish",
      prix:"5",
      quantity: "5",
      category: "Sashimi"

    },
    {
      key: 5,
      image: "https://www.okome-sushi.fr/websites/57994eae3216383175507900aba5eda0/img/temaki_20190523174127.jpg",
      reference: "T1",
      title: "Temaki saumon",
      description:
        "Japanese dish",
      prix:"5",
      quantity: "5",
      category: "Sushi"

    },
    {
      key: 6,
      image: "https://www.okome-sushi.fr/websites/57994eae3216383175507900aba5eda0/img/chirashi_20190523174922.jpg",
      reference: "CH1",
      title: "Chirashi saumon",
      description:
        "Japanese dish",
      prix:"5",
      quantity: "5",
      category: "Sashimi"

    },
    {
      key: 7,
      image: "https://www.okome-sushi.fr/websites/57994eae3216383175507900aba5eda0/img/slider2_20190523173623.jpg",
      reference: "R1",
      title: "Shake roll",
      description:
        "Japanese dish",
      prix:"5",
      quantity: "0",
      category: "Other"

    },
    {
      key: 8,
      image: "https://www.okome-sushi.fr/websites/57994eae3216383175507900aba5eda0/img/42ac070392c62845bdbfb3bf5e68e8e6.jpg",
      reference: "CT1",
      title: "California tempura",
      description:
        "Japanese dish",
      prix: "5",
      quantity: "5",
      category: "sashimi"

    },
  ]
    
};
  
  export default data;